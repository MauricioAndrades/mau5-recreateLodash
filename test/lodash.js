var assert = require('assert');

var _ = require('../lodash');
 
describe('#first(array)', function() {
  it('should return null when the first argument is not an array', function() {
    assert.equal(_.first({}) === null, true);
  });
  
  it('should return undefined when the first argument is an empty array', function() {
    assert.equal(_.first([]), undefined);
  });
  
  it('should return the first element of a non-empty array', function() {
    assert.equal(_.first(['first', 'second']), 'first');
  });
});

describe('#take(array, int)', function() {
  it('should assign a default value of 1 to int', function() {
    assert.equal(_.take(['first', 'second']), 'first');
  });

  it('should return null when the first argument is not an array', function() {
    assert.equal(_.take({}) === null, true);
  });

  it('should return int elements from the beginning of the array', function() {
    assert.equal(_.take(['one', 'two'], 0), undefined);
    assert.equal(_.take(['one', 'two'], 1), ['one']);
    assert.equal(_.take(['one', 'two'], 3), ['one', 'two']);
  });
});

describe('#last(array)', function() {
  it('returns null when the argument is not an array', function() {
    assert.equal(_.last({}) === null, true);
  });
  
  it('should return undefined when an argument is an empty array', function() {
    assert.equal(_.last([]), undefined);
  });
  
  it('should return the last element of a non-empty array', function() {
    assert.equal(_.last(['first', 'second']), 'second');
  });
});

describe('#takeRight(array, int)', function() {
  it('should assign int a default value of 1', function() {
    assert.equal(_.takeRight(['first', 'second']), 'second');
  });

  it('should return null when the first argument is not an array', function() {
    assert.equal(_.takeRight({}) === null, true);
  });

  it('should return int elements from the end of the array', function() {
    assert.equal(_.takeRight(['one', 'two'], 0), undefined);
    assert.equal(_.takeRight(['one', 'two'], 1), ['two']);
    assert.equal(_.takeRight(['one', 'two'], 3), ['one', 'two']);
  });
});
