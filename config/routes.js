const router = require('express').Router();
const uplifts = require('../controllers/uplifts');
// const useruplifts = require('../controllers/useruplifts');
const auth = require('../controllers/auth');
// const secureRoute = require('../lib/secureRoute');

router.route('/uplifts')
  .get(uplifts.index)
  .post(uplifts.create);

router.route('/uplifts/:id')
  .get(uplifts.show)
  .put(uplifts.update)
  .delete(uplifts.delete);

// router.route('/useruplifts')
//   .get(useruplifts.index)
//
// router.route('useruplifts/:id')
//   .get(useruplifts.show)
//   .put(useruplifts.update)
//   .delete(useruplifts.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
