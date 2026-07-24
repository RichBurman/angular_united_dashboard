import { Component, input } from '@angular/core';
import { Player } from '../../models/players'

@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.html',
  styleUrl: './player-card.css',
})
export class PlayerCard {
  player = input.required<Player>();
}
