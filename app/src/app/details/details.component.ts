import { Component, OnInit } from '@angular/core';
import { PokeSearchComponent } from '../components/poke-search/poke-search.component';
import { Perform } from '../classes/perform.class';
import { DetailedPokemon } from '../../types/types';
import { PokemonService } from '../services/pokemon.services';
import { ActivatedRoute } from '@angular/router';
import { PokeDetailComponent } from '../components/poke-detail/poke-detail.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [PokeSearchComponent, PokeDetailComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  data = new Perform<DetailedPokemon>();
  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (!name) {
      this.data.hasError = true;
      return;
    }
    this.data.load(this.pokemonService.getByName(name));
  }

  goBack() {
    window.history.back();
  }

}
