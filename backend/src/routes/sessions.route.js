import express from "express";
import sessionController from "../controllers/session.controller.js";

const sessionRouter = express.Router()

sessionRouter.get("/:employeeId", sessionController.getSesiones)

sessionRouter.use(express.json())
sessionRouter.post("/", sessionController.saveSession)

export default sessionRouter