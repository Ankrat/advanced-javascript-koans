describe('return', function () {
  it('should understand return', function () {
    var Samurai = function (name) {
      this.name = name;
    }, samurai = new Samurai('Myamoto');
    expect(Samurai('Myamoto')).toBe(__);
    expect(samurai.name).toBe(__);
    expect(samurai instanceof Samurai).toBe(__);
    expect(samurai.constructor).toBe(__);
  });
  it('should understand return', function () {
    var Samurai = function (name) {
      this.name = name;
      return 1;//also try with 0, true, false, "string", null, undefined
    }, samurai = new Samurai('Myamoto');
    expect(samurai.name).toBe(__);
    expect(samurai instanceof Samurai).toBe(__);
    expect(samurai.constructor).toBe(__);
  });
  it('should understand return', function () {
    var Samurai = function (name) {
      return {
        name: name
      };
    }, samurai = new Samurai('Myamoto');
    expect(samurai.name).toBe(__);
    expect(samurai instanceof Samurai).toBe(__);
    expect(samurai.constructor).toBe(__);
  });
  it('should understand return', function () {
    var Samurai = function (name) {
      //todo - implement this so that test passes
      //for bonus points try and not use 'Samurai'
    }, samurai1 = Samurai('Myamoto'), samurai2 = new Samurai('Myamoto');
    expect(samurai1 instanceof Samurai).toBe(true);
    expect(samurai1.name).toBe('Myamoto');
    expect(samurai2 instanceof Samurai).toBe(true);
    expect(samurai2.name).toBe('Myamoto');
  });
});
