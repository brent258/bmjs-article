const lib = require('./lib/imports.js');
const rand = require('bmjs-random');
const shuffle = require('bmjs-shuffle');

module.exports = {

  lib: lib,

  list: function(items,randomize) {
    if (!items || typeof items !== 'object' || !items.length) {
      return '';
    }
    if (randomize) items = shuffle(items);
    if (items.length === 1) {
      return items[0];
    }
    else if (items.length === 2) {
      return items[0] + ' and ' + items[1];
    }
    else {
      let lastItem = items.pop();
      let firstItems = items.join(', ');
      return firstItems + ' and ' + lastItem;
    }
  },

  join: function(lines,matchSubject) {
    if (!lines || typeof lines !== 'object' || !lines.length) {
      return '';
    }
    let merge = function(thisLine,previousLine) {
      let mergeLines = rand(true,false);
      if (!mergeLines || !previousLine) return thisLine.replace(/\*\*\*|\$\$\$/g,'');
      if (previousLine.match(/\$\$\$.+\$\$\$/g) && thisLine.match(/\$\$\$.+\$\$\$/g) && previousLine.match(/\$\$\$.+\$\$\$/g)[0] === thisLine.match(/\$\$\$.+\$\$\$/g)[0] && (matchSubject || previousLine.match(/\*\*\*.+\*\*\*/g) && thisLine.match(/\*\*\*.+\*\*\*/g) && previousLine.match(/\*\*\*.+\*\*\*/g)[0] === thisLine.match(/\*\*\*.+\*\*\*/g)[0])) {
        thisLine = thisLine.replace(/.+\$\$\$.+\$\$\$\s/g,'');
      }
      else if (matchSubject || previousLine.match(/\*\*\*.+\*\*\*/g) && thisLine.match(/\*\*\*.+\*\*\*/g) && previousLine.match(/\*\*\*.+\*\*\*/g)[0] === thisLine.match(/\*\*\*.+\*\*\*/g)[0]) {
        thisLine = thisLine.replace(/.*\*\*\*.+\*\*\*\s/g,'').replace(/\$\$\$/g,'');
      }
      return thisLine;
    };
    return merge(lines[1],lines[0]);
  },

  productDescription: function(obj,plural,singularKeywords,pluralKeywords) {
    if (!obj || typeof obj !== 'object') {
      return '';
    }
    if (plural === undefined) plural = false;
    let properties = [];
    let lines = [];
    if (obj.price) properties.push('price');
    if (obj.colors && obj.colors.length) properties.push('colors');
    if (obj.sizes && obj.sizes.length) properties.push('sizes');
    if (obj.features && obj.features.length) properties.push('features');
    if (obj.rating) properties.push('rating');
    if (obj.brand) properties.push('brand');
    properties = shuffle(properties);
    for (let i = 0; i < properties.length; i++) {
      let noun = obj.title;
      if (i > 0) {
        if (plural) {
          let nouns = ['products','items'];
          if (pluralKeywords) nouns = nouns.concat(pluralKeywords);
          nouns = nouns.map(el => 'these ' + el);
          noun = rand(...nouns);
        }
        else {
          let nouns = ['product','item'];
          if (singularKeywords) nouns = nouns.concat(singularKeywords);
          nouns = nouns.map(el => 'this ' + el);
          noun = rand(true,false) === true ? rand(...nouns) : 'it';
        }
      }
      if (properties[i] === 'price') {
        lines.push(this.lib.product.property('price',obj.price,noun,plural));
      }
      else if (properties[i] === 'colors') {
        let line = [];
        line.push(this.lib.product.property('colors',this.list(obj.colors),noun,plural));
        line.push(this.lib.product.property('colorsCount',obj.colors.length,noun,plural));
        lines.push(rand(...line));
      }
      else if (properties[i] === 'sizes') {
        let line = [];
        line.push(this.lib.product.property('sizes',this.list(obj.sizes),noun,plural));
        line.push(this.lib.product.property('sizesCount',obj.sizes.length,noun,plural));
        lines.push(rand(...line));
      }
      else if (properties[i] === 'features') {

      }
      else if (properties[i] === 'rating') {
        lines.push(this.lib.product.property('rating',obj.rating,noun,plural));
      }
      else if (properties[i] === 'brand') {
        lines.push(this.lib.product.property('brand',obj.brand,noun,plural));
      }
    }
    return lines;
  }

};
