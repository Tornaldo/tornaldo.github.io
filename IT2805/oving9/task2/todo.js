document.addEventListener('DOMContentLoaded', run);

function run() {

    var counter = 0;

    function addTodo() {
        var todo = document.getElementById("todo");
        var text = document.getElementById("todo-textfield").value;
        if(text != "") {
            todo.innerHTML = todo.innerHTML + "<li><input type='checkbox' name='todo-" + counter + "' id='todo-" + counter + "'>" + text + "</li>";
            counter++;
        }
        document.getElementById("todo-textfield").value = null;
    }

    function removeCompletedTodos() {
        var todo = document.getElementById("todo");
        for (var i = todo.children.length - 1; i > -1; i--) {
            if (todo.children[i].children[0].checked) {
                todo.removeChild(todo.children[i]);
            }
        }
    }

    document.getElementById('todo-add').addEventListener('click', addTodo, false);

    document.getElementById('todo-clear').addEventListener('click', removeCompletedTodos, false);

    document.getElementById('todo-textfield').addEventListener(
        'keypress',
        function(event) {
            try {
                if (event.keyCode == 13) {
                    todoAdd();
                }
            } catch (e)
                {}
        },
        false
    );

}