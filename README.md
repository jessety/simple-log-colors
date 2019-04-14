# simple-log-colors
> Extremely simple zero-dependency library for coloring Node terminal output

Not only does `simple-log-colors` have no dependencies, but it's also under 50 lines total.

## Install

```bash
$ npm install --save simple-log-colors
```

## Usage

```javascript
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

The following colors are supported

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`

## License

MIT © Jesse Youngblood
