import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Player } from '../../models/players';

@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.html',
  styleUrl: './player-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerCard {
  player = input.required<Player>();

  profileClicked = output<Player>();

  viewProfile() {
    this.profileClicked.emit(this.player());
  }
}
