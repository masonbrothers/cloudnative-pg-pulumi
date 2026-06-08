# cloudnative-pg-pulumi

Pulumi TypeScript bindings for CloudNativePG CRDs generated with `crd2pulumi`.

This package is generated from a pinned CloudNativePG operator release bundle.
It is intended for Pulumi programs that create `Cluster`, `Backup`,
`ScheduledBackup`, `Pooler`, and catalog resources directly.

## Install

```sh
npm install cloudnative-pg-pulumi @pulumi/kubernetes @pulumi/pulumi
```

## Example

```ts
import { postgresql } from "cloudnative-pg-pulumi";

new postgresql.v1.Cluster("postgres", {
  metadata: {
    name: "postgres",
    namespace: "database",
  },
  spec: {
    instances: 3,
    storage: {
      size: "100Gi",
    },
  },
});
```

## Generate

```sh
pnpm generate:crds
```

The CRDs currently come from CloudNativePG `v1.29.1`.

For local regeneration, clone `masonbrothers/crd2pulumi-package-tools` as a
sibling directory:

```sh
git clone git@github.com:masonbrothers/crd2pulumi-package-tools.git ../crd2pulumi-package-tools
```

## Publish

GitHub Actions runs install, CRD regeneration, typecheck, and build. Publishing
runs from GitHub Releases with npm provenance and requires an `NPM_TOKEN`
repository secret.
