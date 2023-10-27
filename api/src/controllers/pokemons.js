// import model
// import validations

export class PokemonController {
  static async getAll(req, res) {
    try {
      const { name } = req.query
      const allPokemons = name
        ? dadada // await PokemonModel.getAll({name})
        : dedede // await PokemonModel.getAll()
        res.status(200).json(allPokemons)
    } catch (error) {
      res.status(404).json({error: error.message})
    }
  }

  static async getById(req, res) {
    try {
    const { idPokemon } = req.params
      const pokemon = dadada // await PokemonModel.getById({ idPokemon })
      res.status(200).json(pokemon)  
    } catch (error) {
      res.status(404).json({ error: error.message })
    }    
  }

  static async createPokemon(req, res) {
    try {
      // const result = validate(req.body)
      if(!result.success) return res.status(400).json({error: JSON.parse(result.error.message )})
      
      const newPokemon = await PokemonModel.create({input: result.data})

      res.status(201).json(newPokemon)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
}

-// GET /pokemons Obtain an array where each object is a pokemon with its information.
-// GET /pokemons/:idPokemon This route gets the detail of a specific pokemon.
-// GET /pokemons/name?='...' This route should obtain all pokemons that are equal to the name received by query.
-// POST /pokemons ..
-// GET /types
