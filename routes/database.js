var Models = require("../models");
var sequelize = require("sequelize");

exports.getList = (req, res, callback) => {
  Models.Boards.findAll({offset:(req.query.offset||0)*10,limit:10,order:[['id','DESC']]})
    .then(list => {
      console.log(list)
      return callback(null, list);
    })
    .catch(err => {
      return callback(err, false);
    });
};

exports.newPost = (req, res, callback) => {
  Models.Boards.create({
    contents: req.body.contents||"아무것도 안 적었음",
    author: req.body.author||"익명"
  })
    .then(result => {
      if (result) {
        return callback(null, true);
      } else {
        return callback(null, false);
      }
    })
    .catch(err => {
      return callback(err, false);
    });
};

exports.getPost = (req, res, callback) => {
  Models.Boards.findOne({
    where: { id: req.params.id }
  })
    .then(list => {
      if (!list) {
        throw new Error('존재하지 않는 게시글입니다.');
      } else {
        return callback(null, list);
      }
    })
    .catch(err => {
      return callback(err, null);
    });
};
