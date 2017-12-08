const Uplift = require('../models/uplift');

function upliftsIndex(req, res, next) {
  Uplift
    .find()
    .populate('createdBy')
    .exec()
    .then(uplifts => res.json(uplifts))
    .catch(next);
}

function upliftsCreate(req, res, next) {

  req.body.createdBy = req.currentUser;

  if(req.file) req.body.image = req.file.filename;

  Uplift
    .create(req.body)
    .then(uplift => res.status(201).json(uplift))
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

function upliftsDelete(req, res, next) {
  Uplift
    .findById(req.params.id)
    .exec()
    .then((uplift) => {
      if(!uplift) return res.notFound();
      return uplift.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: upliftsIndex,
  create: upliftsCreate,
  show: upliftsShow,
  delete: upliftsDelete
};
