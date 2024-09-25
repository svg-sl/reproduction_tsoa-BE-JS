Steps to reproduce the issue:
1. Add env variables for or replace \$SEALIGHTS_TOKEN, \$GIT_REF, \$GIT_HASH in the package.json.
2. Replace --projectRoot with the actual path to the project root.
3. Run following commands:
```
npm install
npm run test:sealights
```
Expected behavior:
The test should cover testController.ts file.
Actual behavior:
The line 9 is covered, but the line 7 is not covered.
