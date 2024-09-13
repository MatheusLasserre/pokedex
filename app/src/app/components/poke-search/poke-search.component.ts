import {
  Component,
  EventEmitter,
  OnChanges,
  Output,
  signal,
  SimpleChanges,
} from '@angular/core';
import { Pokemon } from '../../../types/types';
import { NgFor } from '@angular/common';
import { PokemonService } from '../../services/pokemon.services';
import { Perform } from '../../classes/perform.class';

@Component({
  selector: 'app-poke-search',
  standalone: true,
  imports: [NgFor],
  providers: [PokemonService],
  templateUrl: './poke-search.component.html',
  styleUrl: './poke-search.component.scss',
})
export class PokeSearchComponent {
  pokemons = new Perform<Pokemon[]>();
  searchOpen = signal(false);
  @Output() queryString = new EventEmitter<string>();

  constructor(private pokemonService: PokemonService) {}


  updateQuery(queryEvent: Event): void {
    const target = queryEvent.target as HTMLInputElement;
    this.pokemons.load(this.pokemonService.Search(target.value));
    if(target.value.length === 0){
      this.searchOpen.set(false);
    } else {
      this.searchOpen.set(true);
    }
  }

  directSearch(event: Event): void {
    const target = event as KeyboardEvent;
    if (target.key === 'Enter') {
      const element = target.target as HTMLInputElement;
      window.location.href = `/pokemon/${element.value}`;
    }
  }

  onFocus(): void {
    console.log('focus');
    this.searchOpen.set(true);
  }

  closeSearch(): void {
    this.searchOpen.set(false);
  }
}
