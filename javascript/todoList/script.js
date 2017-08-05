var todos = ["Buy New Turtle"];
var input = prompt("What would you like to do?");

while(input !== "quit") {
  if(input === "list") {
    listTodos();
  }
  else if(input === "new") {
      addTodo();
  }
  else if (input === "delete") {
    var index = prompt("Enter index of todo to delete");

  }
  var input = prompt("What would you like to do?");
}
console.log("QUITTING");

function listTodos() {
  todos.forEach(function(todo, i)){
    console.log(i + ": " + todo);
  }
}

function addTodo() {
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
}

function deleteTodo(index) {
  todos.splice(index, 1);
  console.log("Deleted Todo");
}
