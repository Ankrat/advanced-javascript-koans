describe('Closure', function () {
  it('should understand loop and closure', function () {
    var i;
    jQuery('#debug').text('');
    for (i = 0; i < 3; i++) {
      setTimeout(function () {
        jQuery('#debug').append(i);
      }, 1000 * i);
    }
    waits(4000);
    runs(function () {
      expect(jQuery('#debug').text()).toBe(___);
      //discuss this with your pair
      //now change the code within setTimeout (and within setTimeout only) so that expected result is '123'
    });
  });
});
