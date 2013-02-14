describe('Mutator methods', function () {
  it('should understand push', function () {
    var array = [1, 2, 3, 4, 5];
    expect(array.push(6, 7)).toBe(__);
    expect(array).toEqual(__);
    expect(array.length).toBe(__);
    array.length = 10;
    array.push(8, 9);
    expect(array).toEqual(__);
    expect(array.length).toBe(__);
  });
  it('should understand pop', function () {
    var array = [1, 2, 3, 4, 5];
    expect(array.pop()).toBe(__);
    expect(array).toEqual(__);
    array.length = 10;
    expect(array.pop()).toBe(__);
    expect(array).toEqual(__);//todo may require some more code to make the test pass
  });
  it('should understand shift', function () {
    var array = [1, 2, 3, 4, 5];
    expect(array.shift()).toBe(__);
    expect(array).toEqual(__);
    array = [, , , 3, 4, 5];
    expect(array.shift()).toBe(__);
    expect(array).toEqual(__);
  });
  it('should understand unshift', function () {
    var array = [1, 2, 3, 4, 5];
    expect(array.unshift(6, 7)).toBe(__);
    expect(array).toEqual(__);
    array = [, , , 3, 4, 5];
    expect(array.unshift(6, 7)).toBe(__);
    expect(array).toEqual(__);
  });
  it('should understand splice', function () {
    var array = [1, 2, 3, 4, 5];
    expect(__).toEqual(array.splice(1, 2));
    expect(__).toEqual(array);
  });
  it('should understand splice', function () {
    var array = [1, 2, 3, 4, 5];
    expect(array.splice(1, 2, 21, 31)).toEqual(__);
    expect(array).toEqual(__);
  });
  it('should understand reverse', function () {
    var array = [1, 2, 3, 4, 5];
    expect(array.reverse()).toBe(__);
    expect(array).toEqual(__);
  });
  it('should understand sort', function () {
    var array = [1, 3, 5, 7, 9, 11, 13, 15, 2, 4, 6, 8, 10, 12, 14, 16];
    expect(array.sort()).toEqual(__);
  });
  it('should understand sort', function () {
    var array = [1, 3, 5, 7, 9, 11, 13, 15, 2, 4, 6, 8, 10, 12, 14, 16],
    compareFunction = function (first, second) {
      //implement this so that test is passing
    };
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]).toEqual(array.sort(compareFunction));
  });
});
