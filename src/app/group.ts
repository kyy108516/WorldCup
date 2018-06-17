import {Team} from './team';

export class Group {
  group: {
    id: number;
    letter: string;
    teams: {
      team: Team;
    }[];
  };
}
