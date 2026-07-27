import { inject, Injectable } from '@angular/core';
import { players } from '../data/players';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/players';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private http = inject(HttpClient);

getPlayers() {
  return this.http.get<Player[]>('data/players.json');
}

  // getPlayers() {
  //   return players;
  // }

  getPlayerById(id: number) {
    return players.find((player) => player.id === id);
  }
}
