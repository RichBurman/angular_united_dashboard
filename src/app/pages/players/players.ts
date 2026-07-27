import { Component, computed, inject, signal } from '@angular/core';
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

  isLoading = signal(true);

  // players = this.playerService.getPlayers();

  players = signal<Player[]>([]);

  constructor() {
    this.playerService.getPlayers().subscribe((data) => {
      setTimeout(() => {
        this.players.set(data);
        this.isLoading.set(false);
      }, 1000);
    });
  }

  searchTerm = signal('');

  filteredPlayers = computed(() => {
    const search = this.searchTerm().toLowerCase();

    return this.players().filter(
      (player) =>
        player.name.toLowerCase().includes(search) ||
        player.position.toLowerCase().includes(search) ||
        player.nationality.toLowerCase().includes(search) ||
        player.goals.toString().includes(search),
    );
  });

  openProfile(player: Player) {
    this.router.navigate(['/players', player.id]);
  }
}
