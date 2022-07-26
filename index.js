#!/usr/bin/env node

const fs = require('fs');
const childProcess = require('child_process');

const appPath = process.cwd();

// Get version
const packageJson = require(appPath + '/package.json');
console.log(packageJson.version);
const version = packageJson.version;
const appName = packageJson.name;

const output = `${appName}-${version}-${Date.now()}.tar.gz`;

childProcess.exec(`tar --exclude-from=.buildignore -czf ${output} *`);
console.log(output);
