const todoItem = require("./models").todoItem;
const User = require("./models").user;

async function createSampleTodoItems() {
  try {
    const todo1 = await todoItem.create({
      task: "Clean bedroom",
      important: false,
    });
    const todo2 = await todoItem.create({
      task: "Learn to code",
      important: true,
    });
    const todo3 = await todoItem.create({
      task: "Have fun",
      important: true,
    });

    return [todo1, todo2, todo3].map((item) => item.toJSON());
  } catch (e) {
    console.error(e);
  }
}

createSampleTodoItems().then((todos) => console.log(todos));
