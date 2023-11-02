import express from "express";

import userRoutes from "./routes/users.routes";

export const app: express.Application = express();
export const port = 3000;

app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

// /api/v1/users

// GET, POST

// GET, PATCH, DELETE /api/v1/users/:id
