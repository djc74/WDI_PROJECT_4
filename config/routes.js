const router = require('express').Router();
const uplifts = require('../controllers/uplifts');
const auth = require('../controllers/auth');
// const secureRoute = require('../lib/secureRoute');

// require users controller
const users = require('../controllers/users')

router.route('/uplifts')
  .get(uplifts.index)
  .post(uplifts.create);

router.route('/uplifts/:id')
  .get(uplifts.show)
  .delete(uplifts.delete);

router.route('/users/:id')
  .get(users.show)

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
