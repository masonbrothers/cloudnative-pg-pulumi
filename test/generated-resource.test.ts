import * as pulumi from "@pulumi/pulumi";
import { Cluster } from "../postgresql/v1/cluster";
import { describe, expect, it } from "vitest";

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

describe("generated CloudNativePG CRD resources", () => {
  it("constructs a typed Cluster with generated API defaults", async () => {
    const cluster = new Cluster("database", {
      metadata: {
        name: "database",
      },
      spec: {
        instances: 1,
        storage: {
          size: "1Gi",
        },
      },
    });

    expect(Cluster.isInstance(cluster)).toBe(true);
    expect(Cluster.__pulumiType).toBe(
      "kubernetes:postgresql.cnpg.io/v1:Cluster",
    );
    await expect(outputValue(cluster.apiVersion)).resolves.toBe("postgresql.cnpg.io/v1");
    await expect(outputValue(cluster.kind)).resolves.toBe("Cluster");
    await expect(outputValue(cluster.metadata)).resolves.toMatchObject({
      name: "database",
    });
  });
});

async function outputValue<T>(output: pulumi.Output<T>): Promise<T> {
  return (output as unknown as { promise: () => Promise<T> }).promise();
}
