// this object creates the class names used by the CSS
const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById("todo-list");

// access the input box where the user types
var inputTextValue = document.getElementById("userInput");

// keeps track ot items + if they are unchecked or not
const itemCount = document.getElementById('item-count')
const uncheckedCount = document.getElementById('unchecked-count')

// take the input and place it into an LI element
function addTodo() {
  var thisIsWhereTheToDoGoes = document.getElementById("todo-list");
  thisIsWhereTheToDoGoes = inputTextValue.value;
  console.log("The text in the box is " + thisIsWhereTheToDoGoes);

  var node = document.createElement("LI");
  var textNode = document.createTextNode(thisIsWhereTheToDoGoes);
  // appends the toDo Text to the LI node
  node.appendChild(textNode);
  list.appendChild(node);
  // increase the count
  itemCount.innerHTML++;
  uncheckedCount.innerHTML++;
}

  