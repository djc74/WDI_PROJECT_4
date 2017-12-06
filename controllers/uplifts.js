const Uplift = require('../models/uplift');

function upliftsIndex(req, res, next) {
  Uplift
    .find()
    .populate('createdBy')
    .exec()
    .then(uplifts => res.json(uplifts))
    .catch(next);
}

function upliftsShow(req, res, next) {
  Uplift
    .findById(req.params.id)
    .populate('createdBy')
    .exec()
    .then((uplift) => {
      if(!uplift) return res.notFound();
      res.json(uplift);
    })
    .catch(next);
}

module.exports = {
  index: upliftsIndex,
  show: upliftsShow
};
