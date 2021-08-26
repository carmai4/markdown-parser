const util = require('./util');

const openingTags = '<html><body>';
const closingTags = '</body></html>';

test('returns h1', () => {
  const h1 = '#I am a heading';
  const split = util.split(h1);
  expect(util.parse(split)).toBe(`${openingTags}<h1>I am a heading</h1>${closingTags}`);
});

test('returns h2', () => {
  const h2 = '##I am another heading';
  const split = util.split(h2);
  expect(util.parse(split)).toBe(`${openingTags}<h2>I am another heading</h2>${closingTags}`);
});

test('returns multiline paragraph', () => {
  const par = 'I am a paragraph.\nI have more than one line.\nI have three.';
  const split = util.split(par);
  expect(util.parse(split)).toBe(`${openingTags}<p>I am a paragraph.I have more than one line.I have three.</p>${closingTags}`);
});

test('returns multiple elements', () => {
  const someStr = 'I am a paragraph.\n\nI am another paragraph.\n#This is a heading.\n-one\n-two\n - three';
  const split = util.split(someStr);
  expect(util.parse(split)).toBe(`${openingTags}<p>I am a paragraph.</p><p>I am another paragraph.</p><h1>This is a heading.</h1><ul><li>one</li><li>two</li><li>three</li></ul>${closingTags}`);
});
