import { Router } from "express";

import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "../controllers/tasks.controller";

const router = Router();

// Task routes
router
  .route("/tasks")
  .get(getAllTasks) // GET /tasks
  .post(createTask); // POST /tasks

router
  .route("/tasks/:id")
  .get(getTaskById) // GET /tasks/:id
  .patch(updateTask) // PATCH /tasks/:id
  .delete(deleteTask); // DELETE /tasks/:id

export default router;
