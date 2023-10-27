import { Router } from "express";

export const pokemonsRouter = Router()

pokemonsRouter.get('/', (req, res) => {
  res.send('Devolvemos todos los pokemones')
})