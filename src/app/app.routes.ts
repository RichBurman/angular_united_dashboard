import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { Fixtures } from './pages/fixtures/fixtures';
import { Results } from './pages/results/results';
import { Players } from './pages/players/players';
import { LeagueTable } from './pages/league-table/league-table';

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
    component: Fixtures
  },
  {
    path: 'results',
    component: Results
  },
  {
    path: 'players',
    component: Players
  },
  {
    path: 'league-table',
    component: LeagueTable
  },
  {
    path: '**',
    component: NotFound
  }
];
