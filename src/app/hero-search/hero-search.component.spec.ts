import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from '../hero.service';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(() => {
    const heroServiceSpy = jasmine.createSpy('HeroService');

    TestBed.configureTestingModule({
      declarations: [HeroSearchComponent],
      providers: [{ provide: HeroService, useValue: heroServiceSpy }],
    });

    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
