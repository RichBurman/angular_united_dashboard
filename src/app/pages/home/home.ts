import { Component, computed, effect, signal } from '@angular/core';
import { NextMatch } from '../../components/next-match/next-match';
import { LastResult } from '../../components/last-result/last-result';
import { SeasonForm } from '../../components/season-form/season-form';

@Component({
  selector: 'app-home',
  imports: [NextMatch, LastResult, SeasonForm],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
