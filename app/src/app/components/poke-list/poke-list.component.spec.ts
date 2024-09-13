import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeListComponent } from './poke-list.component';
import { By } from '@angular/platform-browser';

describe('PokeListComponent', () => {
  let component: PokeListComponent;
  let fixture: ComponentFixture<PokeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeListComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render pokemons', () => {
    component.pokemons = [
      {
        name: 'Pikachu',
        url: 'https://pokeapi.co/api/v2/pokemon/25/',
      },
      {
        name: 'Charmander',
        url: 'https://pokeapi.co/api/v2/pokemon/4/',
      },
    ];
    fixture.detectChanges();
    const pokeCards = fixture.debugElement.queryAll(By.css('[data-testid="listPokeCard"]'));
    expect(pokeCards.length).toBe(2);
  })
});
