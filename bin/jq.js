#!/usr/bin/env node

var path = require('path');
var spawn = require('child_process').spawn;

var file;
switch(process.platform) {
  case 'darwin':
    file = 'jq-osx-amd64';
    break;
  case 'win32':
    file = 'jq-win32.exe';
    break;
  default:
    throw new Error('platform not supported: ' + process.platform);
}

jq = spawn(
    path.resolve(path.join(__dirname, '..', 'jq-releases', file)),
    process.argv.slice(2),
    { stdio: ['inherit'] }
);

jq.stdout.on('data', function (data) { process.stdout.write(data.toString()); });
jq.stderr.on('data', function (data) { process.stderr.write(data.toString()); });
jq.on('exit', function (code) { process.exit(code); });
