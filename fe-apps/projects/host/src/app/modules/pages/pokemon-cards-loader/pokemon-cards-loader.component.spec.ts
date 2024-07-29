import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardsLoaderComponent } from './pokemon-cards-loader.component';

describe('PokemonCardsLoaderComponent', () => {
  let component: PokemonCardsLoaderComponent;
  let fixture: ComponentFixture<PokemonCardsLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardsLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
