import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { DetailedPokemon, Pokemon, PokemonAPIResponse } from './types/pokemons';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class PokemonsService {
  private readonly pokeAPI = 'https://pokeapi.co/api/v2/pokemon';
  private readonly LIMIT_DEFAULT = 10;
  private readonly PAGE_DEFAULT = 1;
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly httpService: HttpService
  ) {}
  async getAll(paging: {
    limit?: number,
    page?: number,
  }) {
    const limitParam = `limit=${paging.limit && paging.limit > 0 ? paging.limit : this.LIMIT_DEFAULT}`;
    const pageParam = `offset=${paging.page && paging.page > 0 ? paging.page : this.PAGE_DEFAULT}`;
    const url = `${this.pokeAPI}?${limitParam}&${pageParam}`;
    const {data} = await firstValueFrom(
      this.httpService.get<PokemonAPIResponse>(url).pipe(
        catchError((error) => {
          throw new Error(error);
        })
      )
    )
    return data;
  }
 
  async getAllSearch(params: {
    limit?: number,
    page?: number,
    query: string,
  }) {
    const url = `${this.pokeAPI}/?limit=10000`;
    // This query is expensive, so we cache it for a week, since it's unlikely to change and to provent abuse of the poke API
    // and to increase response time, since it's going to be used as a input suggestion.
    let pokemons = await this.cacheManager.get<PokemonAPIResponse>('pokemons');
    if (!pokemons) {
      const {data} = await firstValueFrom(
        this.httpService.get<PokemonAPIResponse>(url).pipe(
          catchError((error) => {
            throw new Error(error);
          })
        )
      )
      pokemons = data;
      this.cacheManager.set('pokemons', pokemons, 60 * 60 * 24 * 7);
    }

    const limit = params.limit && params.limit > 0 ? params.limit : this.LIMIT_DEFAULT;
    const page = params.page && params.page > 0 ? params.page : this.PAGE_DEFAULT;
    const filteredPokemons = pokemons.results.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(params.query.toLowerCase());
    }).slice((page - 1) * limit, page * limit);
    return filteredPokemons;
  }

  async getByName(name: string) {
    return await firstValueFrom(
      this.httpService.get<DetailedPokemon>(`${this.pokeAPI}/${name.toLowerCase()}`).pipe(
        catchError((error) => {
          throw new Error(error);
        })
      )
    ).then((res) => {
      return res.data;
    })
  }
}
