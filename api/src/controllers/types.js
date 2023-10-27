import { TypesModel } from '../models/types.js'

export class TypesController {
  static async getAll(_req, res) {
    try {
      const types = await TypesModel.getTypes()
      return res.status(200).json(types)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
