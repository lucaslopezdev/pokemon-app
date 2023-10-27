import axios from 'axios'
import { Type } from './db.js'

export class TypesModel {
  static async getTypes() {
    let types = await Type.findAll()
    if (!types.length) {
      const { data } = await axios.get('https://pokeapi.co/api/v2/type')
      types = await Type.bulkCreate(data.results)
    }
    return types
  }
}
