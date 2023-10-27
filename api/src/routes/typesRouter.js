import { Router } from "express";
import { TypesController } from "../controllers/types.js";

export const typesRouter = Router()

typesRouter.get('/', TypesController.getAll)