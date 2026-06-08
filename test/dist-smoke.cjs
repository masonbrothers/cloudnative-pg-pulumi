const assert = require("node:assert/strict");
const pulumi = require("@pulumi/pulumi");
const cnpg = require("../dist/index.js");

pulumi.runtime.setMocks(
  {
    call: (args) => args.inputs,
    newResource: (args) => ({
      id: `${args.name}_id`,
      state: args.inputs,
    }),
  },
  "project",
  "stack",
  false,
);

async function main() {
  const cluster = new cnpg.postgresql.v1.Cluster("database", {
    metadata: { name: "database" },
    spec: {
      instances: 1,
      storage: { size: "1Gi" },
    },
  });

  assert.equal(cnpg.postgresql.v1.Cluster.isInstance(cluster), true);
  assert.equal(await cluster.apiVersion.promise(), "postgresql.cnpg.io/v1");
  assert.equal(await cluster.kind.promise(), "Cluster");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
