import { NextFunction, Request, Response } from "express";

interface User {
  name: string;
  location: string;
  role?: string;
  id: number;
}

let id = 0;

let users: User[] = [];

class User {
  public role?: string;
  public name = "";
  public location = "";
  constructor({ name, location, role }: User) {
    if (role) {
      this.role = role;
    }
    this.name = name;
    this.location = location;
  }
}

// C
export function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user = req.body;
    if (!user.name || !user.location) {
      res
        .status(400)
        .json({ message: "You need to send the location and name." });
    }

    // // const { name, role, location } = req.body;

    // const user = new User(req.body);

    user.id = ++id;
    users.push(user);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
}

// R
export function getAllUsers(req, res) {
  res.json(users);
}

export function getUserById(req, res) {
  // find gets the first, filter will find all
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
  res.json(user);
}

// U
export function updateUser(req, res) {
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const newUsers = users.filter((u) => u.id !== parseInt(req.params.id));
  const updatedUser = { ...user, ...req.body };
  newUsers.push(updatedUser);
  users = newUsers;
  res.json(updatedUser);
}

// D
export function deleteUser(req, res) {
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const newUsers = users.filter((u) => u.id !== parseInt(req.params.id));
  users = newUsers;
  res.status(204).send();
}
