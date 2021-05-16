const colorIds = {
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

const defaultExport: { [key: string]: (...out: unknown[]) => string} = {};

for (const [name, value] of Object.entries(colorIds)) {

  if (process.stdout.isTTY === true) {

    defaultExport[name] = (...out) => [`\u001b[3${value}m`, out.join(' '), reset].join('');
    defaultExport[`${name}Background`] = (...out) => [`\u001b[4${value}m`, out.join(' '), reset].join('');

  } else {

    defaultExport[name] = (...out) => out.join(' ');
    defaultExport[`${name}Background`] = (...out) => out.join(' ');
  }
}

for (const [key, func] of Object.entries(defaultExport)) {
  exports[key] = func;
}

type colors = {
  red: (...out: unknown[]) => string;
  green: (...out: unknown[]) => string;
  yellow: (...out: unknown[]) => string;
  blue: (...out: unknown[]) => string;
  magenta: (...out: unknown[]) => string;
  cyan: (...out: unknown[]) => string;
  black: (...out: unknown[]) => string;
  white: (...out: unknown[]) => string;

  redBackground: (...out: unknown[]) => string;
  greenBackground: (...out: unknown[]) => string;
  yellowBackground: (...out: unknown[]) => string;
  blueBackground: (...out: unknown[]) => string;
  magentaBackground: (...out: unknown[]) => string;
  cyanBackground: (...out: unknown[]) => string;
  blackBackground: (...out: unknown[]) => string;
  whiteBackground: (...out: unknown[]) => string;
}

export default defaultExport as colors;
