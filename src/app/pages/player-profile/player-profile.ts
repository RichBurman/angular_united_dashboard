import id from '@angular/common/locales/extra/id';
import { Component, inject } from '@angular/core';
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

  id = this.route.snapshot.paramMap.get('id');

  private playerService = inject(PlayerService);

  player = this.playerService.getPlayerById(Number(this.id));
}
