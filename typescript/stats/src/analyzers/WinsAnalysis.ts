import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === "H") {
        wins++;
      } else if (match[2] === this.team && match[5] === "A") {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}
