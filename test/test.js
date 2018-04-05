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

  it('product description should return a description list', () => {
    let obj = {
      price: '$5',
      colors: ['blue','red'],
      sizes: ['large','small'],
      title: 'The Slow Feeder'
    };
    expect(mod.productDescription(obj,false)).to.be.an('array');
  });

});
