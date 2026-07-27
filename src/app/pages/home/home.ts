import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = 'Manchester United Dashboard';
  // welcomeMessage = signal("Welcome to the home page!");
  isLive = signal(this.getLiveScorePreference());

  private getLiveScorePreference() {
    return JSON.parse(localStorage.getItem('liveScores') ?? 'true');
  }
  statusMessage = computed(() =>
    this.isLive()
      ? ' Live scores are available'
      : 'Live scores are coming soon!',
  );

  constructor() {
    effect(() => {
      localStorage.setItem('liveScores', JSON.stringify(this.isLive()));
    });
  }

  toggleLiveScores() {
    this.isLive.update((value) => !value);
  }

  //   showMessage() {
  //   // this.welcomeMessage.set('Live scores are coming soon!');
  //   // this.isLive.set(false);
  // }
}
