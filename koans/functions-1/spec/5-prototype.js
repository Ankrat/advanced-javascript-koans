describe('prototype', function () {
  it('should understand prototype', function () {
    var Person = function () {
    }, instance;
    Person.prototype = {
      name: 'default name'
    };
    instance = new Person();
    expect(instance.name).toBe(__);
  });
  it('should understand prototype', function () {
    var Person = function () {
    }, instance;
    instance = new Person();
    Person.prototype = {
      name: 'default name'
    };
    expect(instance.name).toBe(__);
  });
  it('should understand prototype', function () {
    var Person = function () {
    }, firstInstance = new Person(), secondInstance, thirdInstance;
    expect(firstInstance.name).toBe(__);
    Person.prototype.name = 'before';
    secondInstance = new Person();
    expect(firstInstance.name).toBe(__);
    expect(secondInstance.name).toBe(__);
    Person.prototype = {
      name: 'after'
    };
    thirdInstance = new Person();
    expect(firstInstance.name).toBe(__);
    expect(secondInstance.name).toBe(__);
    expect(thirdInstance.name).toBe(__);
    Person.prototype.name = 'even more after';
    expect(firstInstance.name).toBe(__);
    expect(secondInstance.name).toBe(__);
    expect(thirdInstance.name).toBe(__);
  });
  it('should understand prototype & delete', function () {
    var Person = function () {
    }, instance;
    Person.prototype.name = 'default name';
    instance = new Person();
    expect(instance.name).toBe(__);
    delete Person.prototype.name;
    expect(instance.name).toBe(__);
  });
});
