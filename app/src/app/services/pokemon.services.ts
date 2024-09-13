import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DetailedPokemon, Pokemon } from '../../types/types';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly pokeAPI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getAll(limit?: number): Observable<Pokemon[]> {
    const limitParam = limit ? `limit=${limit}` : '';
    return this.http.get<Pokemon[]>(`${this.pokeAPI}/pokemons?${limitParam}`);
  }

  Search(query: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.pokeAPI}/pokemons?query=${query}`);
  }

  getByName(name: string): Observable<DetailedPokemon> {
    return this.http.get<DetailedPokemon>(`${this.pokeAPI}/pokemons/${name}`);
  }
}