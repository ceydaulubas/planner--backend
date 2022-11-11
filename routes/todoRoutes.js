const { Router } = require('express');
const todoController = require('../controllers/todoController');
const verifyToken = require('../middlewares/auth');
const router = Router();

router.get('/getAllTodoList', todoController.getAllTodoList);
router.post('/create', verifyToken, todoController.create);
// router.post('/create', todoController.create);

module.exports = router;
