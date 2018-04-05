module.exports = {

  imports: {
    price: {
      plural: require('./price-plural'),
      singular: require('./price-singular'),
    },
    brand: {
      plural: require('./brand-plural'),
      singular: require('./brand-singular'),
    },
    colors: {
      plural: require('./colors-plural'),
      singular: require('./colors-singular'),
    },
    colorsCount: {
      plural: require('./colorsCount-plural'),
      singular: require('./colorsCount-singular'),
    },
    sizes: {
      plural: require('./sizes-plural'),
      singular: require('./sizes-singular'),
    },
    sizesCount: {
      plural: require('./sizesCount-plural'),
      singular: require('./sizesCount-singular'),
    },
    rating: {
      plural: require('./rating-plural'),
      singular: require('./rating-singular'),
    }
  },

  property: function(name,variable,noun,plural) {
    if (!name || typeof name !== 'string' || !variable || !noun || typeof noun !== 'string') {
      throw new Error('Unable to generate text without input parameters.');
    }
    noun = '***' + noun + '***';
    if (plural === undefined) plural = false;
    if (plural) {
      return this.imports[name].plural(noun,variable);
    }
    else {
      return this.imports[name].singular(noun,variable);
    }
  }

};
