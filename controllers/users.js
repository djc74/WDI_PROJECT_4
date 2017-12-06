const Uplift = require('../models/uplift');

function upliftsUserIndex(req, res, next) {
  Uplift
    .find()
    .populate('createdBy')
    .exec()
    .then(uplifts => res.json(uplifts))
    .catch(next);
}

function upliftsUserCreate(req, res, next) {

  req.body.createdBy = req.currentUser;

  if(req.file) req.body.image = req.file.filename;

  Uplift
    .create(req.body)
    .then(uplift => res.status(201).json(uplift))
    .catch(next);
}

function upliftsUserShow(req, res, next) {
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

function upliftsUserUpdate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Uplift
    .findById(req.params.id)
    .exec()
    .then((uplift) => {
      if(!uplift) return res.notFound();
      uplift = Object.assign(uplift, req.body);
      return uplift.save();
    })
    .then(uplift => res.json(uplift))
    .catch(next);
}

function upliftsUserDelete(req, res, next) {
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
  userindex: upliftsUserIndex,
  usercreate: upliftsUserCreate,
  usershow: upliftsUserShow,
  userupdate: upliftsUserUpdate,
  userdelete: upliftsUserDelete
};
