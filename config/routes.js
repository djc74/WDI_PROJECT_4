const router = require('express').Router();
const uplifts = require('../controllers/uplifts');
const users = require('../controllers/users');
const auth = require('../controllers/auth');
// const secureRoute = require('../lib/secureRoute');

router.route('/uplifts')
  .get(uplifts.index);

router.route('/uplifts/:id')
  .get(uplifts.show);

router.route('/useruplifts')
  .get(users.index)
  .post(users.create);

router.route('useruplifts/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
