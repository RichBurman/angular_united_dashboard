import { Location } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../services/player';

@Component({
  selector: 'app-player-profile',
  imports: [],
  templateUrl: './player-profile.html',
  styleUrl: './player-profile.css',
})
export class PlayerProfile {
  private route = inject(ActivatedRoute);
  private location = inject(Location);

  constructor() {
    effect(() => {
      localStorage.setItem(
        `player-${this.player?.id}-favorite`,
        JSON.stringify(this.favorite()),
      );
    });
  }

  id = this.route.snapshot.paramMap.get('id');

  private playerService = inject(PlayerService);

  player = this.playerService.getPlayerById(Number(this.id));

  favorite = signal(
    JSON.parse(
      localStorage.getItem(`player-${this.player?.id}-favorite`) ?? 'false',
    ),
  );

  goBack() {
    this.location.back();
  }

  toggleFavorite() {
    this.favorite.update((value) => !value);
  }
}
