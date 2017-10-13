$(document).ready(function () {
	$.getJSON("/api/todos")
	.then(addTodos)

	$('#todoInput').keypress(function (e) {
		if (e.which == 13) {
			createTodo();
		}
	});

	// interesting!
	$('.list').on('click', 'span', function () {
		console.log('clicked');
	});
});

function addTodos(todos) {
	todos.forEach(function(todo) {
		addTodo(todo);
	});
}

function addTodo(todo) {
	var newTodo = $('<li class="task">' + todo.name + '<span>x</span></li>');
	if (todo.completed) {
		newTodo.addClass('done');
	}
	$('.list').append(newTodo);
}

function createTodo() {
	// send request to create new todo
	var usrInput = $('#todoInput').val();
	$.post('/api/todos', {name: usrInput})
	.then(function (newTodo) {
		$('#todoInput').val('');
		addTodo(newTodo);
	})
	.catch(function (err) {
		console.log(err);
	})
}
