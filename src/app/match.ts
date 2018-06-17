export class Match {
  venue: string;
  location: string;
  status: string;
  time: string | null;
  fifa_id: string;
  datetime: string;
  last_event_update_at: string | null;
  last_score_update_at: string | null;
  home_team: {
    country: string;
    code: string;
    goals: number;
  };
  away_team: {
    country: string;
    code: string;
    goals: number;
  };
  winner: string | null;
  winner_code: string | null;
  home_team_events: Event[];
  away_team_events: Event[];
}

class Event {
  id: number;
  type_of_event: string;
  player: string;
  time: string;
}
