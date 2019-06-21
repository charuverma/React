
const models=require('../models');
exports.save = function(req) {
  if (req.body.id) {
    return models.Register.update(
      {
        username: req.body.username
      },
      {
        where: {
          id: req.body.id
        }
      }
    );
  } else {
    return models.Register.create({
      username: req.body.username,
      emailid: req.body.emailid,
      mobileno: req.body.mobileno,
      password: req.body.password
    });
  }
};
exports.get = function(req) {
  return models.Register.findOne({
    where: {
      id: req.body.id
    }
  });
};
