const expect = require('chai').expect;
const scarlet = require('../');

describe('Scarlet', () => {
  it('should exist', () => {
    expect(scarlet).to.not.be.undefined;
  });

  describe('Create element', () => {
    it('should return string with an element', () => {
      const expected = '<p></p>';
      const actual = scarlet('p');
      expect(actual).to.be.equal(expected);
    });
  });
});

