describe('Arrays - accessor methods', function () {
  it('should understand concat', function () {
    var first = [1, 2, 3], second = [4, 5, 6];
    expect(first.concat(second)).toEqual(__);
    expect(first).toEqual(__);
    expect(second).toEqual(__);
  });
  it('should understand join', function () {
    var array = [1, 2, 3, 4, 5];
    expect(array.join('-')).toBe(__);
  });
  it('should understand join', function () {
    var array = new Array(10);
    expect(array.join('.-')).toBe(__);
  });
  it('should understand split', function () {
    expect('1-2-3-4-5-6-7-8-9-10'.split('-')).toEqual(__);
  });
  it('should understand split', function () {
    expect('.-.-.-.-.-.-.-.-.-.'.split('-')).toEqual(__);
  });
  it('should understand join and split', function () {
    expect(new Array(10).join('._').split('-')).toEqual(__);
  });
  it('should understand slice', function () {
    var array = [1, 2, 3, 4, 5];
    expect(array.slice(1, 4)).toEqual(__);
    expect(array).toEqual(__);
    expect(array.slice(1)).toEqual(__);
    expect(array.slice(1, -1)).toEqual(__);
    expect(array.slice(-3, -1)).toEqual(__);
  });
  it('should understand toString', function () {
    var array = [1, 3, 5, 'hello', 9];
    expect(array.toString()).toBe(__);
  });
  it('should understand indexOf', function () {
    var array = [1, 1, 3, 3, 5, 5, 7, 7];
    expect(array.indexOf(3)).toBe(__);
    expect(array.indexOf(2)).toBe(__);
  });
  it('should understand lastIndexOf', function () {
    var array = [1, 1, 3, 3, 5, 5, 7, 7];
    expect(array.lastIndexOf(3)).toBe(__);
    expect(array.lastIndexOf(2)).toBe(__);
  });
});
