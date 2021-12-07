
//variables for program
let input = prompt("What would you like to do?");
const toDos = [];

// loops to add, delete, and list array
while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    console.log('********************')
    for (let i = 0; i < toDos.length; i++) {
      console.log(`${i}: ${toDos[i]}`);
    }
    console.log('********************')
  }
  else if (input === 'new') {
    const newToDo = prompt('What is the new item?');
    toDos.push(newToDo);
    console.log(`${newToDo} has been added to the list.`);
  }
  else if (input === 'delete') {
    const index = parseInt(prompt("Enter an index # to delete:"));
    if (!Number.isNaN(index)) {
      const deleted = toDos.splice(index, 1);
      console.log(`${deleted} has been deleted.`)
    }
    else {
      console.log("Unknown index #");
    }
  }
  input = prompt("What would you like to do?")
}

// statement for when they choose quit and leave the loop
console.log("Ok you quit the app.")

