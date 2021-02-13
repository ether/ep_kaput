'use strict';

describe('ep_kaput - Crash!', function () {
  beforeEach(function (cb) {
    this.timeout(60000);
    const i = 0;
    while (i < Infinity) {
      console.error('plz crash test');
    }
    cb();
  });

  it('Hangs for 60 seconds?', function (done) {
    this.timeout(60000);
    done();
  });
});
