import { Sequelize } from 'sequelize'
import 'dotenv/config'
import PokemonModel from './Pokemon.js'
import TypeModel from './Type.js'

const { DB_USER, DB_HOST, DB_PASSWORD, DB_PORT } = process.env

export const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/pokemon`,
  { logging: false }
)

PokemonModel(sequelize)
TypeModel(sequelize)

export const { Pokemon, Type } = sequelize.models

Pokemon.belongsToMany(Type, { through: 'PokemonTypes' })
Type.belongsToMany(Pokemon, { through: 'PokemonTypes' })
