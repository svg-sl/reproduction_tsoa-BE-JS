Steps to reproduce the issue:
1. Add env variables for or replace \$SEALIGHTS_TOKEN, \$GIT_REF, \$GIT_HASH in the package.json.
    - export SEALIGHTS_TOKEN="$SL_TOKEN_POC"
    - export GIT_REF=plutoTV
    - export GIT_HASH=`date +"%y%m%d_%H%M"` 

2. Replace --projectRoot (in package.json) with the actual path to the project root.
3. Run following commands:

```
# Install deps:
npm install

# Build 
npm run build

# slnodejs config/scan, unit tests:
npm run test:sealights

# Run app with SL:
npx slnodejs run --token $SL_TOKEN_POC --buildsessionidfile ./buildSessionId --workspacepath ./src -- dist/server.js

# Start Test Stage:
npx slnodejs start --token $SL_TOKEN_POC --buildsessionidfile ./buildSessionId --teststage 'Functional Tests'

# Run test:
curl http://localhost:3000/test

# End Test Stage:
npx slnodejs end --token $SL_TOKEN_POC --buildsessionidfile ./buildSessionId

```
Expected behavior:
The test should cover 
- the `getActiveRegions` method in testController.ts
- the `RegisterRoutes` and `ActiveRegionsController_getActiveRegions` in routes.ts

Actual behavior:
The coverage report shows that the `getActiveRegions` method in testController.ts is uncovered.
