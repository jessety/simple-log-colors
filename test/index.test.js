'use strict';

process.stdout.isTTY = true;

const colors = require('../');

test('colors text', () => {
  expect(colors.red('test')).toBe('\u001b[31mtest\u001b[0m');
});

test('colors background', () => {
  expect(colors.redBackground('test')).toBe('\u001b[41mtest\u001b[0m');
});

test('colors multiple parameters', () => {
  expect(colors.blue('test', true, 42)).toBe('\u001b[34mtest true 42\u001b[0m');
});
