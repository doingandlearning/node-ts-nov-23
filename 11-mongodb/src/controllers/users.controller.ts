import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user.model";
// C
export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { name, location, role } = req.body;
    if (!name || !location) {
      res
        .status(400)
        .json({ message: "You need to send the location and name." });
    }
    const newUser = new UserModel({ name, location, role });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    console.log(error);
  }
}

// R
export async function getAllUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const allUsers = await UserModel.find();
    res.send(allUsers);
  } catch (error) {
    console.log(error);
  }
}

export async function getUserById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ message: "Could not find user with that id" });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
}

// U
export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Could not find user with that id" });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
}

// D
export async function deleteUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ message: "Could not find user with that id" });
    }
    res.status(204).json();
  } catch (error) {
    next(error);
  }
}
