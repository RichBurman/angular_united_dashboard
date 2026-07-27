import { Injectable } from '@angular/core';
import { players } from '../data/players';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  getPlayers() {
    return players;
  }

  getPlayerById(id: number) {
  return players.find(player => player.id === id);
}
}
