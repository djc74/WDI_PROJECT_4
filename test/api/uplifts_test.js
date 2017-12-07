/* globals api, expect, describe, beforeEach, afterEach, it */

require('./helper');

describe('Uplifts Controller Test', () => {
  describe('GET /api/uplifts', () => {
    it('should return a 200 response', done => {
      api
        .get('/api/uplifts')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should return an array of uplifts', done => {
      api
        .get('/api/uplifts')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });


    it('uplift objects should have properties: body, category, id', done => {
      api
        .get('/api/uplifts')
        .set('Accept', 'application/json')
        .end((err, res) => {
          const firstUplift = res.body[0];

          expect(firstUplift)
            .to.have.property('body')
            .and.to.be.a('string');

          expect(firstUplift)
            .to.have.property('category')
            .and.to.be.a('string');

          expect(firstUplift)
            .to.have.property('id')
            .and.to.be.a('string');

          done();
        });
    });

    it('should return nine uplifts', done => {
      api
        .get('/api/uplifts')
        .set('Accept', 'application.json')
        .end((err, res) => {
          expect(res.body.length).to.equal(9);
          done();
        });
    });
  });
});
