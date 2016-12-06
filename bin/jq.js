var path = require('path');
var exec = require('child_process').exec;

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

execFileSync(
  path.join(__dirname, '..', 'jq-releases', file),
  process.argv.slice(2)
);
