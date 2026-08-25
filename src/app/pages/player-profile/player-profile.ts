import { Location } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../services/player';
import { Player } from '../../models/players';

@Component({
  selector: 'app-player-profile',
  imports: [],
  templateUrl: './player-profile.html',
  styleUrl: './player-profile.css',
})
export class PlayerProfile {
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private playerService = inject(PlayerService);

  id = this.route.snapshot.paramMap.get('id');
  player = signal<Player | null>(null);
  isLoading = signal(true);
  errorMessage = signal('');

  constructor() {
    this.playerService.getPlayerById(Number(this.id)).subscribe({
      next: (player) => {
        this.player.set(player);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Player profile unavailable.');
        this.isLoading.set(false);
      },
    });
  }

  goBack() {
    this.location.back();
  }
}
