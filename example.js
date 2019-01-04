'use strict';

const colors = require('./index');

console.log(`Hello! It's ${colors.green('nice')} to meet ${colors.blue('you')}!`);
console.log('It can be ' + colors.whiteBackground('fun') + ' to throw a ' + colors.magenta('little') + ' color around ' + colors.cyan('sometimes'));

// Supports any number of parameters
console.log(colors.green('Log messages can be hard', 2, 'read.', true, ' - if they\'re all the same color'));

console.log(`But check out how nice and ${colors.yellow('readable')} this is:`);
console.log(`${colors.cyan('3:12 1/4/2019 UTC')}: https ${colors.blue('GET')} /`);
console.log(`${colors.cyan('3:13 1/4/2019 UTC')}: https ${colors.blue('POST')} /purchase`);

console.log('\nHere are all possible styles: ');
for (const [name, func] of Object.entries(colors)) {

  console.log(` * ${func(name)}`);
}

console.log(colors.magentaBackground('\nThanks!'));
