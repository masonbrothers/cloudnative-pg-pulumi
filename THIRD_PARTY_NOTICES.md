# Third Party Notices

This package includes Kubernetes CustomResourceDefinition YAML copied from
CloudNativePG and TypeScript bindings generated from those CRDs with
`crd2pulumi`.

Upstream project: https://github.com/cloudnative-pg/cloudnative-pg
Upstream version: `v1.29.1`
Upstream license: Apache-2.0
License text: `THIRD_PARTY_LICENSES/APACHE-2.0.txt`

Bundled source file:

- `https://raw.githubusercontent.com/cloudnative-pg/cloudnative-pg/v1.29.1/releases/cnpg-1.29.1.yaml`

Changes made in this package:

- CRD YAML is copied into `crds/` with generated source/version headers.
- TypeScript Pulumi resources are generated from the CRD schemas.
- Generated TypeScript is normalized for provider tokens and trailing whitespace.

No upstream root `NOTICE` file was present in the pinned source tree when this
package was prepared.
