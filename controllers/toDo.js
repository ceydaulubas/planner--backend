// const mongoose = require('mongoose');
// const { ToDo } = require('../models/ToDo');
// const Response = require('../Classes/APIServiceResponse');

// const response = new Response();
// const necessaryData = (response) => {
//     return {
//       _id: response._id,
//       name: response.name,
//       email: response.email,
//       password: response.password,
//     };
//   },
//   responsData = (code, status, message) => {
//     response.statusCode = code;
//     response.status = status;
//     response.message = message;
//   };

// // METHOD : GET ALL
// module.exports.getAll = async (req, res) => {
//   ToDo.find()
//     .then((result) => {
//       responsData(200, true, 'All ToDos successfully found!');
//       response.data = [
//         {
//           count: result.length,
//           ToDoList: result.map(necessaryData),
//         },
//       ];
//       res.status(200).json(response);
//     })
//     .catch(() => {
//       //500 Internal Server Error
//       responsData(500, false, 'ToDos could not be found!');
//       response.data = [];
//       res.status(500).json(response);
//     });
// };
// // METHOD : GET BY ID
// module.exports.getById = async (req, res) => {
//   const { id } = req.params;
//   ToDo.findById(id)
//     .then((result) => {
//       if (result) {
//         responsData(200, true, `The ToDo with ${id} id number successfully found!`);
//         response.data = necessaryData(result);
//         res.status(200).json(response);
//       } else {
//         responsData(200, false, `The ToDo with the id of ${id} could not be found.`);
//         response.data = [];
//         res.status(200).json(response);
//       }
//     })
//     .catch((err) => {
//       //500 Internal Server Error
//       responsData(500, false, `The ToDo with the id of ${id} could not be found.`);
//       response.data = err;
//       res.status(500).json(response);
//     });
// };

// // METHOD : POST
// // DETAIL : Creates a new ToDo.
// module.exports.create = async (req, res) => {
//   const ToDo = new ToDo({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//   });

//   ToDo.save()
//     .then((result) => {
//       responsData(200, true, 'ToDo created successfully.');
//       response.data = [
//         {
//           ToDoList: necessaryData(result),
//         },
//       ];
//       res.status(200).json(response);
//     })
//     .catch((err) => {
//       //500 The server encountered an unexpected condition which prevented it from fulfilling the request.
//       responsData(500, false, 'ToDo could not be created.');
//       response.data = err;
//       res.status(500).json(response);
//     });
// };

// // METHOD : PATCH
// module.exports.update = async (req, res) => {
//   const { id } = req.params;

//   // Check if the incoming id is a valid ObjectId type
//   // 400 The request could not be understood by the server due to malformed syntax.
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     responsData(400, false, `Specified id is not valid!`);
//     response.data = [];
//     res.status(400).json(response);
//   }

//   let ToDoWithId = await ToDo.findById(id);
//   //404 The server has not found anything matching the Request-URI.
//   if (!ToDoWithId) {
//     responsData(404, false, `There is no ToDo found!`);
//     response.data = [];
//     res.status(404).json(response);
//   }

//   ToDo.updateOne(
//     { _id: id },
//     {
//       $set: {
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//       },
//     }
//   )
//     .then((result) => {
//       if (result.matchedCount > 0 && result.modifiedCount > 0) {
//         responsData(200, true, `ToDo with ${id} is updated successfully.`);
//         response.data = result;
//         res.status(200).json(response);
//       } else {
//         responsData(200, false, `ToDo with ${id} could not be updated successfully.`);
//         response.data = [];
//         res.status(200).json(response);
//       }
//     })
//     .catch((err) => {
//       //500 The server encountered an unexpected condition which prevented it from fulfilling the request.
//       responsData(500, false);
//       response.message = err;
//       response.data = [];
//       res.status(500).json(response);
//     });
// };

// //METHOD : DELETE
// module.exports.delete = async (req, res) => {
//   const { id } = req.params;

//   // 400 The request could not be understood by the server due to malformed syntax.
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     responsData(400, false, `Specified id is not valid!`);
//     response.data = [];
//     res.status(400).json(response);
//   }
//   ToDo.deleteOne({ _id: id })
//     .then((result) => {
//       if (result.deletedCount > 0) {
//         responsData(200, true, `ToDo with ${id} is removed successfully.`);
//         response.data = [];
//         res.status(200).json(response);
//       } else {
//         responsData(200, false, `ToDo with ${id} could not removed successfully.`);
//         response.data = [];
//         res.status(200).json(response);
//       }
//     })
//     .catch((err) => {
//       //500 The server encountered an unexpected condition which prevented it from fulfilling the request.
//       responsData(500, false);
//       response.message = err;
//       response.data = [];
//       res.status(500).json(response);
//     });
// };
