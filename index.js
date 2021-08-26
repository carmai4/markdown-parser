const minimist = require('minimist');
const util = require('./util');

const input = minimist(process.argv.slice(2))._[0];
console.log(util.parse(util.split(input)));
