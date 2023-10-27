import express, { json } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { pokemonsRouter } from './src/routes/pokemonsRouter.js'
import { typesRouter } from './src/routes/typesRouter.js'
import 'dotenv/config'
import { sequelize } from './src/models/db.js'

const app = express()
app.use(json())
app.use(morgan('dev'))
app.use(cors())
app.disable('x-powered-by')

app.use('/pokemons', pokemonsRouter)
app.use('/types', typesRouter)

const PORT = process.env.PORT

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
  })
})
