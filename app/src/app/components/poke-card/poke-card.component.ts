import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../types/types';

@Component({
  selector: 'app-poke-card',
  standalone: true,
  imports: [],
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.scss'
})
export class PokeCardComponent {
  @Input({required: true}) pokemon!: Pokemon;
  constructor() {
  }
  goToDetails(): void {
    window.location.href = `/pokemon/${this.pokemon.name}`;
  }
}
