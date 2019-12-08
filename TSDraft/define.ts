// declare enum DuelPhase {
//   StartGame = 1
// }
// declare enum GameSetPhase {}

export enum Range {
  Short = 0,
  Middle = 1,
  Long = 2
}

export enum DeckPosition {
  Draw = 0,
  Hand = 1
}

export enum ACType {
  ATK = "Attack",
  DEF = "Defence",
  MOV = "Movement",
  STR = "Star",
  GUN = "Gun",
  NULL = "Null"
}

export class ActionCard {
  UpType: ACType;
  UpVal: number =  1;
  DownType: ACType;
  DownVal: number = 1;
  get cost() {
    return this.UpVal + this.DownVal / 2;
  }
  constructor(){
    this.UpType = ACType.ATK;
    this.DownType = ACType.NULL;
  }
}

export class ACInstant extends ActionCard {
  Id: number;
  IsInvert: boolean;
  Postion: DeckPosition;
}

export class CharacterCard {
  HP: number;
  ATK: number;
  DEF: number;
  SkillList: Skill | Skill[];
}
export class CCInstant extends CharacterCard {
  HP_instant: number;
  ATK_instant: number;
  DEF_instant: number;
  Status_instant: Status | Status[];
}

export class Player {
  CardList: ACInstant | ACInstant[];
  CCList: CCInstant | CCInstant[];
}
export class DiceResult {
  AtkDice: number;
  DefDice: number;
}
export class GameSet {
  id: string;
  EnvStatus: string;
  Turns: number;
  EventPhase: EventHookPhase;
  EventTriggerType: EventHookType;

  PlayerA: Player;
  PlayerB: Player;
  RollResult: DiceResult | DiceResult[];
  Range: Range;
}

// Status : Status Effect
// @remark interface cannot declare in wasm!
export interface Status {
  Name: string;
  Desp: string;
  Weight: number;
  Counter: number;
  EventTriggerPhase: EventHookPhase;
  EventTriggerType: EventHookType;
  TriggerFunc(before: GameSet): GameSet;
}

// Skill : Skill Effect
// @remark interface cannot declare in wasm!
export interface Skill {
  Naem: string;
  Desp: string;
  Weight: number;
  EventTriggerPhase: EventHookPhase;
  EventTriggerType: EventHookType;
  // TriggerCond: ?Object;
  TriggerFunc(before: GameSet): GameSet;
}
export class TriggerCond {
  EventTriggerPhase: EventHookPhase;
  CardRequire: CardReq[];
}
export class CardReq {
  type: ACType;
  value: number;
  operater: req_operater;
}
export enum req_operater {
  greater,
  equal,
  less,
  greater_equ,
  less_equ
}
export enum EventHookPhase {
  /// start gameset
  gameset_start = 0,
  /// -- turn lifecycle
  start_turn_phase = 10,
  /// ---- Draw phase (ddp)
  refill_action_card_phase = 20,
  refill_event_card_phase = 25,

  /// ---- Move phase
  move_card_drop_phase = 30,
  determine_move_phase = 40,
  finish_move_phase = 50,
  chara_change_phase = 60,
  determine_chara_change_phase = 70,

  /// ---- Atk/Def Phase A
  attack_card_drop_phase_pA = 80,
  defence_card_drop_phase_pA = 90,
  determine_battle_point_phase_pA = 100,
  battle_result_phase_pA = 110, //roll dice
  damage_phase_pA = 120,
  dead_chara_change_phase_pA = 125,
  determine_dead_chara_change_phase_pA = 130,

  // change_initiative_phase


  /// ---- Atk/Def Phase B
  attack_card_drop_phase_pB = 140,
  defence_card_drop_phase_pB = 150,
  determine_battle_point_phase_pB = 160,
  battle_result_phase_pB = 170, //roll dice
  damage_phase_pB = 180,
  // determine_dead_chara_change_phase_pB = 190,

  /// ------ change char when the charecter dead
  dead_chara_change_phase_pB = 200,
  determine_dead_chara_change_phase = 210,

  /// -- endof turn lifecycle
  finish_turn_phase = 220,

  /// endof game set
  gameset_end = 230
}

export enum EventHookType {
  Instant,
  Before,
  After,
  Proxy
}
