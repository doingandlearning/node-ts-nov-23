import { Router } from "express";

import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/users.controller";
import header from "../middleware/header";
const router = Router();
router.use(header);

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUserById).patch(updateUser).delete(deleteUser);

export default router;
