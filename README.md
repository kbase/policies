# KBase Policies

See `./policies` folder for text (markdown). This repo can be installed as an NPM package with a single default export, it contains the text of each policy as an array to be parsed downstream.

## How to update a policy
1. Copy the policy to be updated.
2. Edit `./index.ts` to import your new `.md` file, and then add it to the `policies` array.
3. DO NOT remove the "front-matter" at the beginning of each file. (Bounded by three dashes `---`). DO NOT edit the `id` field in existing policies.
4. Edit the "front-matter" to reflect the new `version` number (if wanted) and list any previous `equivalentVersions` which, if the user has agreed to, should prevent them from being forced to agree to changes in the current version. If changes may be made without updating the version, users should not be prompted to agree again. 
5. Submit your changes as a PR to this repo.
6. Once merged here, `kbase/ui` must be updated to reference the most recent commit from this repo. To do so, a dev can run `npm install git+https://github.com/kbase/policies.git@latest`.

## How to create a new policy
1. Add a new `.md` file in `./policies`.
2. Add the following front-matter to the markdown file, replacing the ID and title:
  ```
  ---
  id: POLICY-ID
  title: POLICY-TITLE
  version: 1
  equivalentVersions: []
  ---
  ``` 
3. Add your text below that front-matter block.
4. Edit `./index.ts` to import your new `.md` file, and then add it to the `policies` array.
4. Submit your changes as a PR to this repo.
5. Once merged here, `kbase/ui` must be updated to reference the most recent commit from this repo. To do so, a dev can run `npm install git+https://github.com/kbase/policies.git@latest`.