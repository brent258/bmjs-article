const expect = require('chai').expect;
const mod = require('../index');

describe('article module', () => {

  it('should return an object', () => {
    expect(mod).to.be.an('object');
    expect(mod).to.not.be.undefined;
  });

  it('list should return printed string of list items', () => {
    let items = ['red','blue'];
    expect(mod.list(items)).to.equal('red and blue');
  });

});
