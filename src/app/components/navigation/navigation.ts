import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Navigation {
  private navigationService = inject(NavigationService);

  navigationItems = this.navigationService.getNavigationItems();
}
