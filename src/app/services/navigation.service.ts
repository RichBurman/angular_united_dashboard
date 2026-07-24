import { inject, Injectable } from '@angular/core';
import { navigationItems } from '../data/navigation';
@Injectable({
  providedIn: 'root',
})
export class NavigationService {

  getNavigationItems() {
    return navigationItems;
  }
}
