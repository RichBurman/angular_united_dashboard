import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LeagueTableResponse } from '../models/league-table';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  private http = inject(HttpClient);

  private apiUrl = '/api/v4/competitions/PL/standings';

  getLeagueTable() {
    const headers = new HttpHeaders({
      'X-Auth-Token': environment.apiToken,
    });

    return this.http.get<LeagueTableResponse>(this.apiUrl, { headers });
  }
}