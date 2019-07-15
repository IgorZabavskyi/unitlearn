

describe("pow", function() {

  it("vozvedenije v n stepen (will be error)", function() {
    assert.equal(pow(2, 3), 16);
  });
  it("vozvedenije v n stepen ", function() {
    assert.equal(pow(2, 3), 6);
  });

});

// пример сгруппированного describe

describe('Test of Array', function() {
  describe('#indexOf() search 4', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
  describe('#indexOf() search 3', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(2));
    });
  });
});

// Object

describe("Person Object", function() {

  it("item of array", function() {
    assert.equal(person(1).name, 'Dima');
  });


});

describe("From second file", function() {

  it("Expected true", function() {
    assert.equal(ifTest('mobile'), true);
  });

  it("Expected true", function() {
    assert.equal(ifTest('mobile'), false);
  });


});
