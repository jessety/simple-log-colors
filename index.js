'use strict';

const colors = {
  black: 0,
  red: 1,
  green: 2,
  yellow: 3,
  blue: 4,
  magenta: 5,
  cyan: 6,
  white: 7
};

const reset = '\u001b[0m';

for (const [name, value] of Object.entries(colors)) {

  module.exports[name] = (...messages) => [`\u001b[3${value}m`, messages.join(' '), reset].join('');

  module.exports[`${name}Background`] = (...messages) => [`\u001b[4${value}m`, messages.join(' '), reset].join('');
}
