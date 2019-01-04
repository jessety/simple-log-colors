'use strict';

const reset = '\u001b[0m';

const text = {
  black: '\u001b[30m',
  red: '\u001b[31m',
  green: '\u001b[32m',
  yellow: '\u001b[33m',
  blue: '\u001b[34m',
  magenta: '\u001b[35m',
  cyan: '\u001b[36m',
  white: '\u001b[37m'
};

for (const [name, value] of Object.entries(text)) {

  module.exports[name] = (...messages) => {

    return value + messages.join(' ') + reset;
  };
}

const background = {
  black: '\u001b[40m',
  red: '\u001b[41m',
  green: '\u001b[42m',
  yellow: '\u001b[43m',
  blue: '\u001b[44m',
  magenta: '\u001b[45m',
  cyan: '\u001b[46m',
  white: '\u001b[47m'
};

for (const [name, value] of Object.entries(background)) {

  module.exports[name + 'Background'] = (...messages) => {

    return value + messages.join(' ') + reset;
  };
}
