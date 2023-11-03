import { Task } from "../models/task.model";

let tasks: Task[] = [];
let taskId = 0;

function getNewId() {
  return ++taskId;
}
export { tasks, getNewId };
