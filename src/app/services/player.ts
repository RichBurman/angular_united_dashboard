import { Injectable } from '@angular/core';
import { players } from '../data/players';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  getPlayers() {
    return players;
  }
}
