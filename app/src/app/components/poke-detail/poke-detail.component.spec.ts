import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDetailComponent } from './poke-detail.component';
import { By } from '@angular/platform-browser';

describe('PokeDetailComponent', () => {
  let component: PokeDetailComponent;
  let fixture: ComponentFixture<PokeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeDetailComponent);
    component = fixture.componentInstance;
    component.pokemon = {
      name: 'Pikachu',
      height: 0.4,
      weight: 6.9,
      types: [
        {
          type: {
            name: 'Electric',
          },
        },
        {
          type: {
            name: 'Flying',
          },
        },
      ],
      moves: [
        {
          move: {
            name: 'Thunder Shock',
          },
        },
      ],
      sprites: {
        other: {
          'official-artwork': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
          },
        },
      },
    };
    fixture.detectChanges();
  });

  it('render component', () => {
    const detailComponent = fixture.debugElement.query(By.css('[data-testid="pokeDetail"]'));
    expect(detailComponent).toBeTruthy();
  });
});
