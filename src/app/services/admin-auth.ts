import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  private readonly username = 'admin';
  private readonly password = 'united123';

  isAuthenticated = signal(
    sessionStorage.getItem('united-hub-admin') === 'true',
  );

  login(username: string, password: string): boolean {
    const valid = username === this.username && password === this.password;

    if (valid) {
      sessionStorage.setItem('united-hub-admin', 'true');
      this.isAuthenticated.set(true);
    }

    return valid;
  }

  logout(): void {
    sessionStorage.removeItem('united-hub-admin');
    this.isAuthenticated.set(false);
  }
}