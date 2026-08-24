import { Component, inject, OnInit, signal } from '@angular/core';
import { ResultService } from '../../services/results';
import { Match } from '../../models/match';
import { ResultCard } from '../../components/result-card/result-card';
@Component({
  selector: 'app-results',
  imports: [ResultCard],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results implements OnInit {
  private resultService = inject(ResultService);
  matches = signal<Match[]>([]);
  loading = signal(true);
  error = signal(false);

  ngOnInit() {
    this.resultService.getResults().subscribe({
      next: (data) => {
        this.matches.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      },
    });
  }
}
