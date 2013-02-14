describe('Updating property value', function () {
  var samurai;
  beforeEach(function () {
    samurai = {
      name: 'Myamoto',
      address: {
        street: 'Samurai Way',
        postcode: '18+'
      }
    };
  });
  it('should know how to update primitive values', function () {
    var samurai2 = {
      name: samurai.name
    };
    samurai2.name = 'Hattori';
    expect(samurai2.name).toBe(__);
    expect(samurai.name).toBe(__);
  });
  it('should know how to update object values', function () {
    var samurai2 = {
      address: samurai.address
    };
    samurai2.address.street = 'Ninja Way';
    expect(samurai2.address.street).toBe(__);
    expect(samurai.address.street).toBe(__);
  });
  it('should understand references', function () {
    samurai.samurai = samurai;
    expect(samurai.samurai.samurai.samurai.samurai.name).toBe(__);
  });
});