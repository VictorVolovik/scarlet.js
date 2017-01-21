const expect = require('chai').expect;
const scarlet = require('../');

describe('Scarlet', () => {
  it('should exist', () => {
    expect(scarlet).to.not.be.undefined;
  });

  describe('Create element', () => {
    it('should create an element', () => {
      const expected = '<p></p>';
      const actual = scarlet('p');
      expect(actual).to.be.equal(expected);
    });
    it('should create another element', () => {
      const expected = '<div></div>';
      const actual = scarlet('div');
      expect(actual).to.be.equal(expected);
    });
  });

  describe('Render string', () => {
    it('should render string inside element', () => {
      const expected = '<div>Test</div>';
      const actual = scarlet('div', 'Test');
      expect(actual).to.be.equal(expected);
    });
  });

  describe('Render props', () => {
    it('should render props inside string', () => {
      const user = {
        name: 'Alfred'
      };
      const expected = '<p>My name is Alfred.</p>';
      const actual = scarlet('p', 'My name is {name}.', user);
      expect(actual).to.be.equal(expected);
    });
  });

  describe('Render children', () => {
    it('should render children elements', () => {
      const dogs = [
        {
          name: 'Guffy',
          age: 4
        },
        {
          name: 'Pluto',
          age: 2
        }
      ];
      const expected = '<ul><li>Guffy is 4 years old.</li><li>Pluto is 2 years old.</li></ul>';
      const dogsList = dogs.map(dog => scarlet('li', '{name} is {age} years old.', dog));
      const actual = scarlet('ul', "", {}, dogsList);
      expect(actual).to.be.equal(expected);
    });
  });
});

