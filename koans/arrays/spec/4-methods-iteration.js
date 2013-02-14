describe('Arrays - iteration methods', function () {
  it('should understand filter', function () {
    var array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    expect(array.filter(function (element, index, array) {
      return element <= 3;
    })).toEqual(__);
  });
  it('should understand filter with this', function () {
    var array = [1, 2, 3, 4, 5, 4, 3, 2, 1], THIS = {};
    expect(array.filter(function (element, index, array) {
      return this[element] ? false : this[element] = true;
    }, THIS)).toEqual(__);
    expect(THIS).toEqual(__);
  });
  it('should understand forEach', function () {
    var array = [1, 2, 3, 4, 5], result = 0;
    array.forEach(function (element, index, array) {
      result += element;
    });
    expect(result).toBe(__);
  });
  it('should understand forEach with this', function () {
    var array = [1, 2, 3, 4, 5, 4, 3, 2, 1], result = 0;
    array.forEach(function (element, index, array) {
      if (!this[element]) {
        result += element;
      }
    }, {});
    expect(result).toBe(__);
  });
  it('should understand every', function () {
    var array = [1, 2, 3, 4, 5];
    expect(array.every(function (element, index, array) {
      return element > index;
    })).toEqual(__);
  });
  it('should understand map', function () {
    var array = ['Myamoto', 'Hattori', 'Dave'];
    expect(array.map(function (element, index, array) {
      return '' + index + ' - ' + element;
    })).toEqual(__);
  });
  it('should understand some', function () {
    var array = [1, 2, 3, 4, 5], isNegative = function (element, index, array) {
      return element < 0;
    };
    expect(array.some(isNegative)).toBe(__);
    array[2] = -array[2];
    expect(array.some(isNegative)).toBe(__);
  });
  it('should understand reduce', function () {
    var array = [1, 2, 3, 4, 5], product = function (previousValue, currentValue, index, array) {
      return previousValue * currentValue;
    };
    expect(array.reduce(product, 1)).toBe(__);
  });
  it('should understand reduceRight', function () {
    var array = [1, 2, 3, 4, 5], product = function (previousValue, currentValue, index, array) {
      return previousValue * currentValue;
    };
    expect(array.reduceRight(product, 1)).toBe(__);
  });
  it('should understand map and reduce', function () {
    var result = new Array(10).join(',.').split(',')
      .map(function (value, index, array) {
        return index;
      })
      .reduce(function (previousValue, value, index, array) {
        return previousValue + value * value;
      }, 0);
    expect(result).toBe(__);
  });
  it('should understand map and parseInt', function () {
    var result = ['1', '2', '3'].map(parseInt);
    expect(result).toEqual(__);
    //discuss with your pair
  });
});
