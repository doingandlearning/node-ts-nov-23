import express from "express";

export const app: express.Application = express();
export const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});
