import { Component, Input } from '@angular/core';
import { DetailedPokemon } from '../../../types/types';

@Component({
  selector: 'app-poke-detail',
  standalone: true,
  imports: [],
  templateUrl: './poke-detail.component.html',
  styleUrl: './poke-detail.component.scss'
})
export class PokeDetailComponent {
  @Input({required: true}) pokemon!: DetailedPokemon;
  constructor() {
  }
  ngOnInit(): void {}

 
}
