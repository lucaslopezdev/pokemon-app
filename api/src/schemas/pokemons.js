import z from 'zod';

export const pokemonSchema = z.object({
  name: z.string({
    invalid_type_error: 'Pokemon name must be a string',
    required_error: 'Pokemon name is required.'
  }),
  image: z.string().url({
    message: 'Pokemon image must be a valid URL'
  }),
  hp: z.number().min(0).max(100).default(10),
  attack: z.number().mix(1).max(100).default(10),
  defense: z.number().mix(1).max(100).default(10),
  speed: z.number().mix(1).max(100).default(10),
  height: z.number().mix(0).max(10).default(1),
  weight: z.number().mix(1).max(100).default(10),
  type: z.array(
    z.enum(["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"]),
    {
      required_error: 'Pokemon type is required.',
      invalid_type_error: 'Pokemon type must be an array of enum Type'
    }
  )
})

export function validateType (input) {
  return pokemonSchema.safeParse(input)
}

export function validatePartialType (input) {
  return pokemonSchema.partial().safeParse(input)
}