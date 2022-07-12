//const { where } = require("sequelize/types");

const User = require("./models").user;
const TodoItems = require("./models").todoItem;

//get all users from the use file
const getallUser = async () => {
  try {
    const users = await User.findAll();
    console.log("All the users", users.data);
  } catch (e) {
    console.log(e.message);
  }
};

// searches the user by primary key
const getUserByID = async (id) => {
  try {
    const user = await User.findByPk(id);
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
};

// trying to extract data from a todoItems file??
const importantTasks = async () => {
  try {
    const user = await TodoItems.findAll({
      where: { important: true },
    });
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
};

//create user using .create method
const createUser = async (name, email, phone, password) => {
  try {
    const newUser = await User.create({
      name: name,
      email: email,
      phome: phone,
      password: password,
    });
    console.log(newUser);
  } catch (e) {
    console.log(e.message);
  }
};
//createUser("Ana", "anah@gmail.com", 568321009, "djhfj#@12");
importantTasks();

//getUserByID(6);

//getallUser();
