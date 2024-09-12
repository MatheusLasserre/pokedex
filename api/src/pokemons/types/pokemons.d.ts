export type Pokemon = {
    name: string
    url: string
}

export type DetailedPokemon = {
  name: string
  weight: number
  height: number
  types: {
    type: {
      name: string
    }
  }[]
  moves: {
    move: {
      name: string
    }
  }[]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}

export type PokemonAPIResponse = {
    count: number
    next: string
    previous: string
    results: Pokemon[]
}