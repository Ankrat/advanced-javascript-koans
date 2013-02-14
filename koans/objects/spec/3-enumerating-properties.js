describe('Enumerating properties', function () {
  it('should understand for-in loop', function () {
    var samurai = {
      name: 'Myamoto',
      age: 32,
      address: {
        street: 'Samurai Way',
        postcode: '18+'
      },
      toString: function () {
        return "I'm a Samurai!";
      }
    }, name, properties = 0, ownProperties = 0, enumerableProperties = 0;
    for (name in samurai) {
      properties++;
      if (samurai.hasOwnProperty(name)) {
        ownProperties++;
      }
      if (samurai.propertyIsEnumerable(name)) {
        enumerableProperties++;
      }
    }
    expect(properties).toBe(__);
    expect(ownProperties).toBe(__);
    expect(enumerableProperties).toBe(__);
  });
});