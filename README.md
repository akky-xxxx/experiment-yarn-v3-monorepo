# experiment-yarn-v3-monorepo

## Requires
- node
- yarn

## Resolve dependencies
1. `$ yarn`
2. `$ yarn prepare`

## Run as development mode
- `$ yarn ws-dev`

## Run as production mode
1. `$ yarn ws-build`
2. `$ yarn ws-start`

## Scripts
### For root

| script  | description                   |
|---------|-------------------------------|
| fix     | Format the code as automatic. |
| lint    | Analyze the code.             |
| prepare | Prepare for the development.  |

### For all workspaces

| script        | description                                     |
|---------------|-------------------------------------------------|
| ws-build      | Build for production at all workspaces.         |
| ws-dev        | Run as development mode at all workspaces.      |
| ws-fix        | Format the code as automatic at all workspaces. |
| ws-lint       | Analyze the code at all workspaces.             |
| ws-start      | Run as production mode at all workspaces.       |
| ws-storybook  | Run storybook at all workspaces.                |
| ws-type-check | Check the type at all workspaces.               |
