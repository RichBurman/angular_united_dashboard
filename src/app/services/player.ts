import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPlayer, Player, PlayersResponse } from '../models/players';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private http = inject(HttpClient);

  private apiUrl = '/api/v4/teams/66';

  getPlayers(): Observable<Player[]> {
    return this.http.get<PlayersResponse>(this.apiUrl, {
      headers: { 'X-Auth-Token': environment.apiToken },
    }).pipe(
      map((response) => response.squad.map((player) => this.mapPlayer(player))),
    );
}

  getPlayerById(id: number): Observable<Player> {
    return this.getPlayers().pipe(
      map((players) => players.find((player) => player.id === id)),
      map((player) => {
        if (!player) {
          throw new Error('Player not found');
        }

        return player;
      }),
    );
  }

  private mapPlayer(player: ApiPlayer): Player {
    return {
      id: player.id,
      name: player.name,
      position: this.normalisePosition(player.position),
      number: player.shirtNumber,
      nationality: player.nationality ?? 'Unknown',
      photoUrl: undefined,
    };
  }

  private normalisePosition(position: string): string {
    switch (position.toLowerCase()) {
      case 'goalkeeper':
        return 'Goalkeeper';
      case 'defence':
      case 'defender':
        return 'Defender';
      case 'midfield':
      case 'midfielder':
        return 'Midfielder';
      case 'offence':
      case 'forward':
        return 'Forward';
      default:
        return position;
    }
  }
}
