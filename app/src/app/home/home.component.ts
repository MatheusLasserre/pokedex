import { Component, OnInit } from '@angular/core';
import { PokeListComponent } from '../components/poke-list/poke-list.component';
import { PokeSearchComponent } from '../components/poke-search/poke-search.component';
import { Pokemon } from '../../types/types';
import { Perform } from '../classes/perform.class';
import { PokemonService } from '../services/pokemon.services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PokeListComponent, PokeSearchComponent],
  providers: [PokemonService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  data = new Perform<Pokemon[]>();
  limit = 10;
  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.data.load(this.pokemonService.getAll());
  }

  loadMore(): void {
    this.limit += 10;
    this.data.load(this.pokemonService.getAll(this.limit));
  }
}
