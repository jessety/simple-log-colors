'use strict';

const colors = require('./index');

// Template strings
console.log(`Hello! It's ${colors.green('nice')} to meet ${colors.blue('you')}!`);

// Concatenating strings
// eslint-disable-next-line prefer-template
console.log('It can be ' + colors.blueBackground('fun') + ' to throw a ' + colors.magenta('little') + ' color around ' + colors.cyan('sometimes'));

// Supports any number of parameters
console.log(colors.blue('Log messages can be hard to read.', true), colors.green('- if they\'re all the same color'));

console.log(`But check out how nice and ${colors.yellow('readable')} this is:`);
console.log(`${colors.cyan('3:12 1/4/2019 UTC')}: https ${colors.blue('GET')} /`);
console.log(`${colors.cyan('3:13 1/4/2019 UTC')}: https ${colors.blue('POST')} /purchase`);

console.log('\nHere are all possible styles: ');
for (const [name, func] of Object.entries(colors)) {

  console.log(` * ${func(name)}`);
}

console.log('\n', colors.magentaBackground('Thanks!'));
