export class Match {
  venue: string;
  location: string;
  status: string;
  time: string | null;
  fifa_id: string;
  datetime: string;
  last_event_update_at: string | null;
  last_score_update_at: string | null;
  home_team_statistics: Statistics | null;
  away_team_statistics: Statistics | null;
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
  home_team_events: Event[] | null;
  away_team_events: Event[] | null;
}

class Event {
  id: number;
  type_of_event: string;
  player: string;
  time: string;
}

class Statistics {
  attempts_on_goal: number;
  on_target: number;
  off_target: number;
  blocked: number;
  woodwork: number;
  corners: number;
  offsides: number;
  ball_possession: number;
  pass_accuracy: number;
  num_passes: number;
  passes_completed: number;
  distance_covered: number;
  balls_recovered: number;
  tackles: number;
  clearances: number;
  yellow_cards: number;
  red_cards: number;
  fouls_committed: number;
  country: string;
}
