import { start } from "repl";
import { app, port } from "./server";
import mongoose from "mongoose";

async function startup() {
  try {
    await mongoose.connect(
      "mongodb+srv://kevin:kevin@training.1ptmm9u.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("I've connected!");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startup();
