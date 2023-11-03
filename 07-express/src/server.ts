import express from "express";

import userRoutes from "./routes/users.routes";
import taskRoutes from "./routes/tasks.routes";

export const app: express.Application = express();
export const port = 3000;

app.use(express.json());
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

// /api/v1/users

// GET, POST

// GET, PATCH, DELETE /api/v1/users/:id
