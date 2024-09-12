import { Controller, Get, Param, Query } from '@nestjs/common'
import { PokemonsService } from './pokemons.service'

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Get()
  async getAll(
    @Query('limit') limit: number | undefined,
    @Query('page') page: number | undefined,
    @Query('query') query: string | undefined,
  ) {
    if (query) {
      return this.pokemonsService.getAllSearch({
        limit,
        page,
        query,
      })
    }
    return this.pokemonsService.getAll({
      limit,
      page,
    })
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.pokemonsService.getByName(name)
  }
}
