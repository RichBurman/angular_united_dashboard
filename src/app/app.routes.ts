import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { Fixtures } from './pages/fixtures/fixtures';
import { Results } from './pages/results/results';
import { Players } from './pages/players/players';
import { LeagueTable } from './pages/league-table/league-table';
import { PlayerProfile } from './pages/player-profile/player-profile';
import { Blog } from './pages/blog/blog';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'fixtures',
    component: Fixtures,
  },
  {
    path: 'results',
    component: Results,
  },
  {
    path: 'players',
    component: Players,
  },
  {
    path: 'players/:id',
    component: PlayerProfile,
  },
  {
    path: 'league-table',
    component: LeagueTable,
  },
  {
    path: 'blog',
    component: Blog,
  },
  {
    path: '**',
    component: NotFound,
  },
];
