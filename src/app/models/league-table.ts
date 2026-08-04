export interface LeagueTableResponse {
    standings: Standing[];
}

export interface Standing {
    stage: string;
    type: string;
    table: TeamStanding[];
}

export interface TeamStanding {
    position: number;
    team: {
        id: number;
        name: string;
        shortName: string;
        crest: string;
    };
    playedGames: number;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
}