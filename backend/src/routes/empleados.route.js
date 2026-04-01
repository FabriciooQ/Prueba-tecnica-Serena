import empleadoController from "../controllers/empleado.controller.js";
import express from "express";


const empleadoRouter = express.Router()

empleadoRouter.get("/", empleadoController.getEmpleado)

export default empleadoRouter