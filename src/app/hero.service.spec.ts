import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HeroService } from './hero.service';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

describe('HeroService', () => {
  let service: HeroService;
  let httpTestingController: HttpTestingController;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService, MessageService],
    });

    service = TestBed.inject(HeroService);
    httpTestingController = TestBed.inject(HttpTestingController);
    messageService = TestBed.inject(MessageService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('#getHeroes should return heroes', () => {
    const expectedHeroes: Hero[] = HEROES;

    const messageServiceSpy = spyOn(messageService, 'add');

    service.getHeroes().subscribe({
      next: heroes => {
        expect(heroes)
          .withContext('should return expected heroes')
          .toEqual(expectedHeroes);
        expect(messageServiceSpy.calls.count()).toBe(1);
        expect(messageServiceSpy.calls.mostRecent().args).toEqual([
          'HeroService: fetched heroes',
        ]);
      },
      error: fail,
    });

    const req = httpTestingController.expectOne('api/heroes');
    expect(req.request.method).toEqual('GET');

    req.flush(expectedHeroes);
  });

  it('#getHeroes should return hero', () => {
    const id = 13;
    const expectedHero: Hero = HEROES[1];

    service.getHero(id).subscribe({
      next: hero =>
        expect(hero)
          .withContext('should return hero with id: ' + id)
          .toEqual(expectedHero),
      error: fail,
    });

    const req = httpTestingController.expectOne('api/heroes/' + id);
    expect(req.request.method).toEqual('GET');

    req.flush(expectedHero);
  });
});
