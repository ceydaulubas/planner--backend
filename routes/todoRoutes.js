const { Router } = require('express');
const todoController = require('../controllers/todoController');
const router = Router();

router.get('/getAll', todoController.getAll);
module.exports = router;
