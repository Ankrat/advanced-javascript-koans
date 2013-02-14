describe('Functions', function () {
  var createModel1 = function () {
    var result = {
      name: 'original name',
      setName: function (value) {
        this.name = value;
      }
    };
    return result;
  }, createModel2 = function () {
    //where do we use closure here? discuss with your pair...
    var result = {
      name: 'original name',
      setName: function (value) {
        result.name = value;
      }
    };
    return result;
  }, invokeCallback = function (callback) {
    callback('new name');
  };
  it('', function () {
    var model = createModel1();
    invokeCallback(model.setName);
    expect(model.name).toBe(__);
    expect(__).toBe('new name');
  });
  it('', function () {
    var model = createModel1();
    invokeCallback(function (name) {
      model.setName(name);
    });
    expect(model.name).toBe(__);
    expect(__).toBe('new name');
  });
  it('', function () {
    var model = createModel1();
    invokeCallback(model.setName.bind(model));
    expect(model.name).toBe(__);
    expect(__).toBe('new name');
  });
  it('', function () {
    var model = createModel2();
    invokeCallback(model.setName);
    expect(model.name).toBe(__);
    expect(__).toBe('new name');
  });
  /*
  discuss with your pair:
    - what are pros and cons of first and second approach (createModel1 and createModel2)?
    - for bonus points - try minimizing createModel1, createModel2 and the code using them with google closure compiler
   */
});
