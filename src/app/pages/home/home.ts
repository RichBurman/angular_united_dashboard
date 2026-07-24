import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = 'Manchester United Dashboard'
  welcomeMessage = "Welcome to the home page!";
  isLive = true;

  showMessage() {
  this.welcomeMessage = 'Live scores are coming soon!';
}
}
