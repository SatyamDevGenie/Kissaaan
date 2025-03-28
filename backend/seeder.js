import colors from "colors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import users from "./data/users.js";
import User from "./models/userModel.js";

dotenv.config();

connectDB();

const importUserData = async () => {
  try {
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    console.log("User data imported".green.inverse);

    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyUserData = async () => {
  try {
    await User.deleteMany();
    console.log("User data destroyed".red.inverse);

    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyUserData();
} else {
  importUserData();
}
