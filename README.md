# simple-log-colors

Extremely lightweight zero-dependency library for coloring Node terminal output

[![build](https://github.com/jessety/simple-log-colors/workflows/build/badge.svg)](https://github.com/jessety/simple-log-colors/actions)
[![npm](https://img.shields.io/npm/v/simple-log-colors.svg)](https://www.npmjs.com/package/simple-log-colors)

## Install

```bash
npm install simple-log-colors
```

## Usage

```javascript
// Modules
import colors from 'simple-log-colors';

// CommonJS
const colors = require('simple-log-colors');
```

Template strings

```javascript
console.log(`Hello, ${colors.blue('world')}!`);
console.log(`Everything looks ${colors.cyan('better')} with a little ${colors.magenta('color')}!`);
```

Concatenation

```javascript
console.log(colors.redBackground('WARNING') + ' things are getting pretty ' + colors.yellow('colorful') + ' around here.');
```

Functions

```javascript
const { red, green, blue } = require('simple-log-colors');

console.log(`${red('Error')} the ${green('POST')} request to the ${blue('/test')} route was not signed properly.`);
```

## Colors

The following colors are supported:

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`

All of these colors are also supported as background colors. For background colors, add the suffix `Background` onto a supported color.

```javascript
console.error(colors.redBackground('ERROR'));
```

## License

MIT © Jesse Youngblood
