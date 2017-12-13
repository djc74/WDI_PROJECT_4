const User = require('../models/user');
const Uplift = require('../models/uplift');

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .then(user => {
      if (!user) return res.notFound();

      Uplift
        .find({ createdBy: user.id })
        .then(uplifts => {
          return res.status(200).json({ user, uplifts });
        })
    })
}

module.exports = {
  show: usersShow
}
