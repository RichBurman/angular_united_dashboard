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

  errorMessage = signal('');


constructor() {
  this.playerService.getPlayers().subscribe({
    next: (data) => {
      setTimeout(() => {
        this.players.set(data);
        this.isLoading.set(false);
      }, 1000);
    },

    error: () => {
      this.errorMessage.set('Failed to load players.');
      this.isLoading.set(false);
    },
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
        (player.number?.toString() ?? '').includes(search),
    );
  });

  groupedPlayers = computed(() => {
    const players = this.filteredPlayers();

    return [
      { label: 'Goalkeepers', players: players.filter((player) => player.position === 'Goalkeeper') },
      { label: 'Defenders', players: players.filter((player) => player.position === 'Defender') },
      { label: 'Midfielders', players: players.filter((player) => player.position === 'Midfielder') },
      { label: 'Forwards', players: players.filter((player) => player.position === 'Forward') },
    ];
  });

  openProfile(player: Player) {
    this.router.navigate(['/players', player.id]);
  }
}
