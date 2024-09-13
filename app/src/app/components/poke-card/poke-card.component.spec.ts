import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCardComponent } from './poke-card.component';
import { By } from '@angular/platform-browser';

describe('PokeCardComponent', () => {
  let component: PokeCardComponent;
  let fixture: ComponentFixture<PokeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokeCardComponent);
    component = fixture.componentInstance;
    component.pokemon = {
      name: 'Pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/25/',
    };
    fixture.detectChanges();
    component.goToDetails = jest.fn();
  });

  it('render component', () => {
    const cardComponent = fixture.debugElement.query(By.css('[data-testid="pokeCard"]'));
    expect(cardComponent).toBeTruthy();
  });
});
