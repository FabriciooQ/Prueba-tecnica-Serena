import express from "express"
import PsicologoController from "../controllers/psicologo.controller.js"

const psicologoRouter = express.Router()

psicologoRouter.get("/", PsicologoController.getDisponibles)   // /psicologos

psicologoRouter.get("/:id/slots", PsicologoController.getTurnos)


export default psicologoRouter