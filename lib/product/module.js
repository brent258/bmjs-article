module.exports = {

  imports: {
    price: {
      plural: require('./price-plural'),
      singular: require('./price-singular'),
    },
    brand: {
      plural: require('./brand-plural'),
      singular: require('./brand-singular'),
    }
  },

  property: function(name,variable,noun,plural) {
    if (!name || typeof name !== 'string' || !variable || typeof variable !== 'string' || !noun || typeof noun !== 'string') {
      throw new Error('Unable to generate text without input parameters.');
    }
    if (plural === undefined) plural = false;
    if (plural) {
      return this.imports[name].plural(noun,variable);
    }
    else {
      return this.imports[name].singular(noun,variable);
    }
  }

};
