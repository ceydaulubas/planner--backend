const { Router } = require('express');
const todoController = require('../controllers/toDo');
const router = Router();

router.get('/', todoController.getAll);
module.exports = router;
