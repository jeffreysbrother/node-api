let express = require('express');
let router = express.Router();
let db = require('../models');
let helpers = require('../helpers/todos');

router.route('/')
	.get(helpers.getTodos)
	.post(helpers.createTodo);

router.route('/:todoId')
	.get(helpers.getTodo)
	.put(helpers.updateTodo)
	.delete(helpers.deleteTodo)

module.exports = router;
