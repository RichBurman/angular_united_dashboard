import { Component, inject } from '@angular/core';
import { PlayerCard } from '../../components/player-card/player-card';
import { PlayerService } from '../../services/player';

@Component({
  selector: 'app-players',
  imports: [PlayerCard],
  templateUrl: './players.html',
  styleUrl: './players.css',
})
export class Players {
  private playerService = inject(PlayerService);

  players = this.playerService.getPlayers();
}
