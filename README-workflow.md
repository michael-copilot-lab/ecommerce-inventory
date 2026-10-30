# CI Workflow

This repository includes a GitHub Actions workflow defined in [.github/workflows/ci.yml](.github/workflows/ci.yml).

## What it does

The workflow runs on every push and pull request, and it has two jobs:

### build
- Checks out the repository
- Sets up Node.js 20
- Installs dependencies with `npm ci`
- Builds the project with `npm run build`
- Uploads the generated `dist/` folder as the `build-output` artifact using `actions/upload-artifact@v4`

### deploy
- Depends on the `build` job via `needs: build`
- Downloads the `build-output` artifact using `actions/download-artifact@v4`
- Runs after the build job succeeds

## Artifact flow

The `build` job produces a reusable artifact named `build-output`, which the `deploy` job downloads and uses afterward. This pattern is useful for passing build output between jobs without re-running the build.

## Trigger

The workflow is triggered by:
- `push`
- `pull_request`

## Notes

If the build fails, the deploy job will not run because it depends on the successful completion of the `build` job.
