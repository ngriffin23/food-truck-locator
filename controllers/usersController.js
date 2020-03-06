const db = require('../models');

const index = (req, res) => {
  db.User.find({}, (err, allUsers) => {
    if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

    res.json(allUsers);
  });
};

const show = (req, res) => {
  db.User.findById(req.params.id, (err, findUser) => {
    if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

    res.json(findUser);
  });
}


const create = (req, res) => {
  db.User.create(req.body, (err, newUser) => {
    if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

    res.json(newUser);
  });
};

module.exports = {
  index,
  show,
  create
};