export class Team {
  id: number;
  country: string;
  fifa_code: string;
  group_id: number | null;
  group_letter: string | null;
  points: number | null;
  wins: number | null;
  draws: number | null;
  losses: number | null;
  games_played: number | null;
  goals_for: number | null;
  goals_against: number | null;
  goal_differential: number | null;
}
