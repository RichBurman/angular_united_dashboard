import { Component, computed, effect, signal } from '@angular/core';
import { NextMatch } from '../../components/next-match/next-match';
import { LastResult } from '../../components/last-result/last-result';
import { MiniLeagueTable } from '../../components/mini-league-table/mini-league-table';
import { LatestPosts } from '../../components/latest-posts/latest-posts';
@Component({
  selector: 'app-home',
  imports: [NextMatch, LastResult, MiniLeagueTable, LatestPosts],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
