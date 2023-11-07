import { Router } from "express";
import { createUser, deleteUser, findAllUsers, findOneUser, updateUser } from "../controllers/User-Controller.js";

const router = Router()

router.post("/users", createUser)
router.get("/users", findAllUsers)
router.get("/users/:id", findOneUser)
router.put("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)


export default router