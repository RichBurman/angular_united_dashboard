import { Component, computed, effect, signal } from '@angular/core';
import { NextMatch } from '../../components/next-match/next-match';
import { LastResult } from '../../components/last-result/last-result';

@Component({
  selector: 'app-home',
  imports: [NextMatch, LastResult],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
