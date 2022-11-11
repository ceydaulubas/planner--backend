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
module.exports.getAllTodoList = async (req, res) => {
  const { user_id } = req.user || {};
  User.findById(user_id)
    .populate('todos')
    .then((result) => {
      const response = new Response();
      ///fonksiyonu yukari al
      response.statusCode = 200;
      response.status = true;
      response.message = 'TodoList fetched successfully.';
      response.data = [
        {
          count: result.todos.length,
          todoList: result.todos,
        },
      ];
      res.status(200).json(response);
    })
    .catch((error) => {
      const response = new Response();
      response.statusCode = 500;
      response.status = false;
      response.message = 'Todo List could not be fetched.';
      response.data = error;
      res.status(500).json(response);
    });
};

// METHOD : POST
// DETAIL : Creates a new ToDo.
module.exports.create = async (req, res) => {
  const { user_id } = req.user;
  const newToDo = new ToDo({
    task: req.body.task,
    importancy: req.body.importancy,
    user: user_id,
  });

  newToDo.save().then(() => {
    ToDo.populate(newToDo, { path: 'user' })
      .then((todo) => {
        responsData(200, true, 'ToDo created.');
        response.data = todo;
        res.status(200).json(response);
      })
      .catch((err) => {
        console.log(err);
        responsData(500, false, 'ToDo could not be created.');
        response.data = err;
        res.status(500).json(response);
      });
  });
};
