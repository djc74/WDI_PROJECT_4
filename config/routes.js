const router = require('express').Router();
const uplifts = require('../controllers/uplifts');
const useruplifts = require('../controllers/useruplifts');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/uplifts')
  .get(uplifts.index);

router.route('/uplifts/:id')
  .get(uplifts.show);

router.route('/useruplifts')
  .get(secureRoute, useruplifts.index)
  .post(secureRoute, useruplifts.create);

router.route('useruplifts/:id')
  .get(secureRoute,useruplifts.show)
  .put(secureRoute,useruplifts.update)
  .delete(secureRoute,useruplifts.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;