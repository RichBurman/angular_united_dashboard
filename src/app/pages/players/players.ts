import { Component } from '@angular/core';
import { PlayerCard } from '../../components/player-card/player-card';
import { players } from '../../data/players'

@Component({
  selector: 'app-players',
  imports: [PlayerCard],
  templateUrl: './players.html',
  styleUrl: './players.css',
})
export class Players {
  players = players;
}
