let mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');
mongoose.Promise = Promise;

let todoSchema  = new mongoose.Schema({
	name: {
		type: String,
		required: 'Name cannot be blank'
	},
	completed: {
		type: Boolean,
		default: false
	},
	created_date: {
		type: Date,
		default: Date.now
	}
});

let Todo = mongoose.model('Todo', todoSchema);
module.exports.Todo = Todo;
