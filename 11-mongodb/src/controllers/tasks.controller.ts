import { NextFunction, Request, Response } from "express";
import { getNewId, tasks } from "../data/task.data";
import { Task } from "../models/task.model";

export function createTask(req: Request, res: Response, next: NextFunction) {
  try {
    const task: Task = req.body;
    if (!task.description) {
      res.status(400).json({ message: "You need to pass a description" });
    }

    // // const { name, role, location } = req.body;

    // const task = new task(req.body);

    task.id = getNewId();
    task.isComplete = false;
    tasks.push(task);
    res.json(task);
  } catch (error) {
    console.log(error);
  }
}

export function getAllTasks(req, res) {
  res.json(tasks);
}

export function getTaskById(req, res) {
  // find gets the first, filter will find all
  const task = tasks.find((u) => u.id === parseInt(req.params.id));

  if (!task) {
    res.status(404).json({ message: "Task not found" });
  }
  res.json(task);
}

export function updateTask(req, res) {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  // Update the task properties with new values from req.body
  tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };

  res.json(tasks[taskIndex]);
}

export function deleteTask(req, res) {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  // Remove the task at the found index
  tasks.splice(taskIndex, 1);

  // Respond with no content, but a successful status code
  res.status(204).send();
}
