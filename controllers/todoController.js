const mongoose = require('mongoose');
const { User } = require('../models/User');
const { ToDo } = require('../models/ToDo');
const Response = require('../Classes/APIServiceResponse');

const response = new Response(),
  todoData = (data) => {
    return {
      _id: data._id,
      task: data.task,
      importancy: data.importancy,
      user: data.user,
    };
  },
  responsData = (code, status, message) => {
    response.statusCode = code;
    response.status = status;
    response.message = message;
  };

// METHOD : GET ALL
module.exports.getAll = async (_, res) => {
  // ToDo.findOne({ user: User._id }).then((result) => {
  //   console.log('result', result);
  // });

  ToDo.findOne({ user: User._id })
    .populate('user')
    .then((todo) => {
      console.log(res.json(todo));
      res.json(todo);
    });
};
