import { Component, inject } from '@angular/core';
import { PlayerCard } from '../../components/player-card/player-card';
import { PlayerService } from '../../services/player';
import { Player } from '../../models/players';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  imports: [PlayerCard],
  templateUrl: './players.html',
  styleUrl: './players.css',
})
export class Players {
  private playerService = inject(PlayerService);
  private router = inject(Router);

  players = this.playerService.getPlayers();

  openProfile(player: Player) {
    this.router.navigate(['/players', player.id]);
  }
}
