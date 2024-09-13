import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../types/types';
import { PokeCardComponent } from '../poke-card/poke-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [PokeCardComponent, NgFor],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss',
})
export class PokeListComponent {
  @Input({ required: true }) pokemons!: Pokemon[] | undefined;
  constructor() {}
  ngOnInit(): void {}
}
