export interface Player {
  id: number;
  name: string;
  position: string;
  number?: number;
  nationality: string;
  age?: number;
  appearances?: number;
  goals?: number;
  assists?: number;
  photoUrl?: string;
}

export interface PlayersResponse {
  squad: ApiPlayer[];
}

export interface ApiPlayer {
  id: number;
  name: string;
  position: string;
  dateOfBirth?: string;
  nationality?: string;
  shirtNumber?: number;
}