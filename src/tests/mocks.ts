import { of } from 'rxjs';

import { HEROES } from 'src/app/mock-heroes';

export class HeroServiceMock {
  getHeroes = () => of(HEROES);
  getHero = (id: number) => of(HEROES.find(hero => hero.id === id));
}

export class ActivatedRouteMock {
  snapshot = {
    paramMap: {
      get: jasmine.createSpy('get'),
    },
  };
}
