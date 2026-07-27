import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = 'Manchester United Dashboard'
  welcomeMessage = signal("Welcome to the home page!");
  isLive = signal(true);

  showMessage() {
  this.welcomeMessage.set('Live scores are coming soon!');
  this.isLive.set(false);
}
}
