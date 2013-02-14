describe('Arrays - basics', function () {
  var array, isArray = function (value) {
    return value && typeof value === 'object' && value.constructor === Array;
  };
  beforeEach(function () {
    array = [1, 2, 3];
  });
  it('should understand array literals', function () {
    var array = [1, "2", [3], false], returnArguments, args;
    expect(isArray(array)).toBe(__);
    expect(isArray(array[0])).toBe(__);
    expect(isArray(array[1])).toBe(__);
    expect(isArray(array[2])).toBe(__);
    expect(isArray(array[3])).toBe(__);
    returnArguments = function () {
      return arguments;
    };
    args = returnArguments(1, 2, 3);
    expect(isArray(args)).toBe(__);
  });
  it('arguments recap', function () {
    var returnArguments = function () {
      return arguments;
    }, args;
    args = returnArguments(1, 2, 3);
    expect(args).toEqual(__);
    expect(isArray(args)).toBe(__);
  });
  it('should understand [] operator', function () {
    expect(array[1]).toBe(__);
    expect(array[3]).toBe(__);
  });
  it('should understand [] operator', function () {
    array[3] = 4;
    expect(array[3]).toBe(__);
  });
  it('should understand length property', function () {
    expect(array.length).toBe(__);
    array[2] = undefined;
    expect(array.length).toBe(__);
    array[99] = 100;
    expect(array.length).toBe(__);
    array[200] = undefined;
    expect(array.length).toBe(__);
  });
  it('should understand length property', function () {
    var array = [1, , , , 5, , , , ];
    expect(array.length).toBe(__);
    //Try it in IE and FF
  });
  it('should understand delete operator', function () {
    delete array[1];
    expect(array[1]).toBe(__);
    expect(array.length).toBe(__);
  });
  it('should understand delete operator', function () {
    delete array[2];
    expect(array.length).toBe(__);
  });
  it('should understand how for and for..in loops are used for iteration', function () {
    var array = [], i, iterationsFor = 0, name, iterationsForIn = 0;
    array[1000] = 1000;
    for (i = array.length - 1; i >= 0; i -= 1) {
      iterationsFor += 1;
    }
    for (name in array) {
      iterationsForIn += 1;
    }
    expect(iterationsFor).toBe(__);
    expect(iterationsForIn).toBe(__);
  });
});
