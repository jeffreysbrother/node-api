$(document).ready(function () {
	$.getJSON("/api/todos")
	.then(addTodos)

	$('#todoInput').keypress(function (e) {
		if (e.which == 13) {
			createTodo();
		}
	});

	// interesting!
	// this is how you add an event listener to
	// dynamically-generated code.
	// the .list element already exists in the HTML
	// but the span is dynamic
	$('.list').on('click', 'span', function (e) {
		e.stopPropagation();
		removeTodo($(this).parent());
	});

	$('.list').on('click', 'li', function () {
		updateTodo($(this));
	});
});

function addTodos(todos) {
	todos.forEach(function(todo) {
		addTodo(todo);
	});
}

function addTodo(todo) {
	var newTodo = $('<li class="task">' + todo.name + '<span>x</span></li>');
	newTodo.data('id', todo._id);
	newTodo.data('completed', todo.completed);
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

function removeTodo(todo) {
	var clickedId = todo.data('id');
	var deleteUrl = 'api/todos/' + clickedId;
	$.ajax({
		method: 'DELETE',
		url: deleteUrl
	})
	.then(function (data) {
		todo.remove();
	})
	.catch(function (err) {
		console.log(err);
	});
}

function updateTodo(todo) {
	var updateUrl = 'api/todos/' + todo.data('id');
	var isDone = !todo.data('completed');
	var updateData = {completed: isDone}
	$.ajax({
		method: 'PUT',
		url: updateUrl,
		data: updateData
	})
	.then(function (updatedTodo) {
		todo.toggleClass('done');
		todo.data('completed', isDone);
	});
}
