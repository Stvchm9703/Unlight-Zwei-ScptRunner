declare enum DuelPhase {
  StartGame =1,
}
declare enum GameSetPhase {

}
declare enum Range {}

declare class Player {
  // phase : DuelPhase;
  AtkDice: number;
  DefDice: number;
  Dmg: number;
  Statuses: Status[];

  // function
}
declare class DiceResult {
  AtkDice: number;
  DefDice: number;
}
declare class GameSet {
  phase: DuelPhase;
  Host: Player;
  Duel: Player;
  RollResult: DiceResult[]; 
  Range : Range;
}

// Status : Status Effect
declare interface Status {
  Name: string;
  Desp: string;
  Weight: number;
  Counter : number;
  EventTrigger: DuelPhase;
  TriggerFunc(before: GameSet): GameSet;
}


// Skill : Skill Effect
declare interface Skill {
  Naem : string;
  Desp  :   string;
  EventTrigger : GameSetPhase;
  TriggerFunc(before: GameSet): GameSet;
}

// Example
// 
class ArmUp implements Status {
  get Name(): string {
    return "ArmUp";
  }
  get Desp(): string{
    return "";
  }
  get Weight(): number {return 1;};
  Counter : 3;
  EventTrigger : DuelPhase.StartGame;
  TriggerFunc(before: GameSet): GameSet {
    before.Duel.AtkDice += 12;
    return before;
  }
}
