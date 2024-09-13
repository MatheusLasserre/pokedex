import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSearchComponent } from './poke-search.component';
import { PokemonService } from '../../services/pokemon.services';
import { NgFor } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { Perform } from '../../classes/perform.class';
import { Pokemon } from '../../../types/types';

describe('PokeSearchComponent', () => {
  let component: PokeSearchComponent;
  let fixture: ComponentFixture<PokeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeSearchComponent, NgFor],
      providers: [PokemonService, provideHttpClient()],
      
    }).compileComponents();

    fixture = TestBed.createComponent(PokeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render search input', () => {
    const searchInput = fixture.debugElement.query(By.css('[data-testid="searchInput"]'));
    expect(searchInput).toBeTruthy();
  });

  it('render search results', () => {
    component.pokemons = new Perform<Pokemon[]>();
    component.pokemons.data = [
      {
        name: 'Pikachu',
        url: 'https://pokeapi.co/api/v2/pokemon/25/',
      },
      {
        name: 'Charmander',
        url: 'https://pokeapi.co/api/v2/pokemon/4/',
      },
    ]
    component.searchOpen.set(true);
    fixture.detectChanges();
    const searchResults = fixture.debugElement.query(By.css('[data-testid="searchResults"]'));
    expect(searchResults).toBeTruthy();
  })

  it('render correct number of search results', () => {
    component.pokemons = new Perform<Pokemon[]>();
    component.pokemons.data = [
      {
        name: 'Pikachu',
        url: 'https://pokeapi.co/api/v2/pokemon/25/',
      },
      {
        name: 'Charmander',
        url: 'https://pokeapi.co/api/v2/pokemon/4/',
      },
    ]
    component.searchOpen.set(true);
    fixture.detectChanges();
    const searchResults = fixture.debugElement.queryAll(By.css('[data-testid="searchResultItem"]'));
    expect(searchResults.length).toBe(2);
  })
});


