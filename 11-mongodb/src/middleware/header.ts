import { NextFunction, Response } from "express";

export default function removePoweredByHeader(
  req,
  res: Response,
  next: NextFunction
) {
  res.setHeader("x-powered-by", "Genius");
  next();
}
