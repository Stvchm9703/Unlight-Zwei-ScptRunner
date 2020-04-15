/* eslint-disable */
import { EventHookPhase, EventHookType } from './EventHookPhase';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  GameDataSet 
 *       the whole instance game-duel set 
 */
export interface GameDataSet {
  /**
   *   room_key, see also RoomService/message.proto : Room 
   */
  roomKey: string;
  /**
   *   host_id, the user-id of host player 
   */
  hostId: string;
  /**
   *   dueler_id, the user-id of dueler player
   */
  duelId: string;
  /**
   *   game_turn, the number of turns in game
   */
  gameTurn: number;
  /**
   *   host_card_deck, the character card  
   */
  hostCardDeck: CharCardSet[];
  /**
   *   duel_card_deck, the character card
   */
  duelCardDeck: CharCardSet[];
  /**
   *   host_curr_card, current on-used char-card 
   */
  hostCurrCardKey: number;
  /**
   *   dueler_curr_card, current on-used char-card 
   */
  duelCurrCardKey: number;
  /**
   *   host_event_card_deck
   */
  hostEventCardDeck: EventCard[];
  /**
   *   duel_event_card_deck
   */
  duelEventCardDeck: EventCard[];
  /**
   *   curr_range
   */
  range: RangeType;
  /**
   *  nvn 
   */
  nvn: number;
  firstAttack: PlayerSide;
  currPhase: PlayerSide;
  /**
   *   event_phase, the event hook phase 
   */
  eventPhase: EventHookPhase;
  /**
   *   hook_type, the event hook type
   */
  hookType: EventHookType;
  /**
   *   Effect-result
   */
  effectCounter: EffectResult[];
}

/**
 *  CharCardSet 
 *  
 */
export interface CharCardSet {
  charId: number;
  cardId: number;
  hpInst: number;
  apInst: number;
  dpInst: number;
  hpOrig: number;
  apOrig: number;
  dpOrig: number;
  level: number;
  statusInst: StatusSet[];
  equSet: CharCardEquSet | undefined;
}

export interface CharCardEquSet {
  equId: number;
  hp: number;
  ap: number;
  dp: number;
}

export interface EventCard {
  id: number;
  upOption: EventCardType;
  upVal: number;
  downOption: EventCardType;
  downVal: number;
  position: EventCardPos;
  isInvert: boolean;
  funcMount: EventCardFunc;
  mountVal: number;
}

export interface SkillSet {
  id: number;
  featNo: number;
  pow: number;
  condString: string;
  condCard: SkillCardCond[];
  condRange: RangeType[];
}

export interface SkillCardCond {
  type: EventCardType;
  val: number;
  compare: SignEq;
}

/**
 *  sprite-display 
 */
export interface StatusSet {
  id: number;
  statusId: string;
  remainCd: number;
  featNo: number;
  pow: number;
}

export interface EffectResult {
  /**
   *  targer 
   */
  tarCard: number;
  tarSide: PlayerSide;
  /**
   *  trigger-time
   */
  triggerTime: EffectTiming | undefined;
  endTime: EffectTiming | undefined;
  /**
   *  effect
   */
  efOption: EffectOption;
  hp: number;
  ap: number;
  dp: number;
  mp: number;
  disableMove: boolean;
  disableAtk: boolean;
  disableDef: boolean;
  disableDraw: boolean;
  disableChange: boolean;
  bindingFunc: string;
  /**
   *  
   */
  remainCd: number;
  assignFrom: string;
  skillId: number;
  statusId: number;
}

export interface EffectTiming {
  eventPhase: EventHookPhase;
  hookType: EventHookType;
  subCount: number;
}

const baseGameDataSet: object = {
  roomKey: "",
  hostId: "",
  duelId: "",
  gameTurn: 0,
  hostCardDeck: undefined,
  duelCardDeck: undefined,
  hostCurrCardKey: 0,
  duelCurrCardKey: 0,
  hostEventCardDeck: undefined,
  duelEventCardDeck: undefined,
  range: 0,
  nvn: 0,
  firstAttack: 0,
  currPhase: 0,
  eventPhase: 0,
  hookType: 0,
  effectCounter: undefined,
};

const baseCharCardSet: object = {
  charId: 0,
  cardId: 0,
  hpInst: 0,
  apInst: 0,
  dpInst: 0,
  hpOrig: 0,
  apOrig: 0,
  dpOrig: 0,
  level: 0,
  statusInst: undefined,
  equSet: undefined,
};

const baseCharCardEquSet: object = {
  equId: 0,
  hp: 0,
  ap: 0,
  dp: 0,
};

const baseEventCard: object = {
  id: 0,
  upOption: 0,
  upVal: 0,
  downOption: 0,
  downVal: 0,
  position: 0,
  isInvert: false,
  funcMount: 0,
  mountVal: 0,
};

const baseSkillSet: object = {
  id: 0,
  featNo: 0,
  pow: 0,
  condString: "",
  condCard: undefined,
  condRange: 0,
};

const baseSkillCardCond: object = {
  type: 0,
  val: 0,
  compare: 0,
};

const baseStatusSet: object = {
  id: 0,
  statusId: "",
  remainCd: 0,
  featNo: 0,
  pow: 0,
};

const baseEffectResult: object = {
  tarCard: 0,
  tarSide: 0,
  triggerTime: undefined,
  endTime: undefined,
  efOption: 0,
  hp: 0,
  ap: 0,
  dp: 0,
  mp: 0,
  disableMove: false,
  disableAtk: false,
  disableDef: false,
  disableDraw: false,
  disableChange: false,
  bindingFunc: "",
  remainCd: 0,
  assignFrom: "",
  skillId: 0,
  statusId: 0,
};

const baseEffectTiming: object = {
  eventPhase: 0,
  hookType: 0,
  subCount: 0,
};

/**  -------------------------------------------------------------
 ANCHOR: data-struct for all game struct
 SECTION: Data.proto
 */
export const PlayerSide = {
  HOST: 0 as const,
  DUELER: 1 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): PlayerSide {
    switch (object) {
      case 0:
      case "HOST":
        return PlayerSide.HOST;
      case 1:
      case "DUELER":
        return PlayerSide.DUELER;
      case -1:
      case "UNRECOGNIZED":
      default:
        return PlayerSide.UNRECOGNIZED;
    }
  },
  toJSON(object: PlayerSide): string {
    switch (object) {
      case PlayerSide.HOST:
        return "HOST";
      case PlayerSide.DUELER:
        return "DUELER";
      default:
        return "UNKNOWN";
    }
  },
}

export type PlayerSide = 0 | 1 | -1;

export const EventCardType = {
  NULL: 0 as const,
  ATTACK: 1 as const,
  DEFENCE: 2 as const,
  GUN: 3 as const,
  MOVE: 4 as const,
  STAR: 5 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): EventCardType {
    switch (object) {
      case 0:
      case "NULL":
        return EventCardType.NULL;
      case 1:
      case "ATTACK":
        return EventCardType.ATTACK;
      case 2:
      case "DEFENCE":
        return EventCardType.DEFENCE;
      case 3:
      case "GUN":
        return EventCardType.GUN;
      case 4:
      case "MOVE":
        return EventCardType.MOVE;
      case 5:
      case "STAR":
        return EventCardType.STAR;
      case -1:
      case "UNRECOGNIZED":
      default:
        return EventCardType.UNRECOGNIZED;
    }
  },
  toJSON(object: EventCardType): string {
    switch (object) {
      case EventCardType.NULL:
        return "NULL";
      case EventCardType.ATTACK:
        return "ATTACK";
      case EventCardType.DEFENCE:
        return "DEFENCE";
      case EventCardType.GUN:
        return "GUN";
      case EventCardType.MOVE:
        return "MOVE";
      case EventCardType.STAR:
        return "STAR";
      default:
        return "UNKNOWN";
    }
  },
}

export type EventCardType = 0 | 1 | 2 | 3 | 4 | 5 | -1;

export const EventCardPos = {
  BLOCK: 0 as const,
  INSIDE: 1 as const,
  OUTSIDE: 2 as const,
  DESTROY: 3 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): EventCardPos {
    switch (object) {
      case 0:
      case "BLOCK":
        return EventCardPos.BLOCK;
      case 1:
      case "INSIDE":
        return EventCardPos.INSIDE;
      case 2:
      case "OUTSIDE":
        return EventCardPos.OUTSIDE;
      case 3:
      case "DESTROY":
        return EventCardPos.DESTROY;
      case -1:
      case "UNRECOGNIZED":
      default:
        return EventCardPos.UNRECOGNIZED;
    }
  },
  toJSON(object: EventCardPos): string {
    switch (object) {
      case EventCardPos.BLOCK:
        return "BLOCK";
      case EventCardPos.INSIDE:
        return "INSIDE";
      case EventCardPos.OUTSIDE:
        return "OUTSIDE";
      case EventCardPos.DESTROY:
        return "DESTROY";
      default:
        return "UNKNOWN";
    }
  },
}

export type EventCardPos = 0 | 1 | 2 | 3 | -1;

export const RangeType = {
  SHORT: 0 as const,
  MIDDLE: 1 as const,
  LONG: 2 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): RangeType {
    switch (object) {
      case 0:
      case "SHORT":
        return RangeType.SHORT;
      case 1:
      case "MIDDLE":
        return RangeType.MIDDLE;
      case 2:
      case "LONG":
        return RangeType.LONG;
      case -1:
      case "UNRECOGNIZED":
      default:
        return RangeType.UNRECOGNIZED;
    }
  },
  toJSON(object: RangeType): string {
    switch (object) {
      case RangeType.SHORT:
        return "SHORT";
      case RangeType.MIDDLE:
        return "MIDDLE";
      case RangeType.LONG:
        return "LONG";
      default:
        return "UNKNOWN";
    }
  },
}

export type RangeType = 0 | 1 | 2 | -1;

export const MovePhaseOpt = {
  NO_MOVE: 0 as const,
  FORWARD: 1 as const,
  BACKWARD: 2 as const,
  STAY: 3 as const,
  CHANGE: 4 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): MovePhaseOpt {
    switch (object) {
      case 0:
      case "NO_MOVE":
        return MovePhaseOpt.NO_MOVE;
      case 1:
      case "FORWARD":
        return MovePhaseOpt.FORWARD;
      case 2:
      case "BACKWARD":
        return MovePhaseOpt.BACKWARD;
      case 3:
      case "STAY":
        return MovePhaseOpt.STAY;
      case 4:
      case "CHANGE":
        return MovePhaseOpt.CHANGE;
      case -1:
      case "UNRECOGNIZED":
      default:
        return MovePhaseOpt.UNRECOGNIZED;
    }
  },
  toJSON(object: MovePhaseOpt): string {
    switch (object) {
      case MovePhaseOpt.NO_MOVE:
        return "NO_MOVE";
      case MovePhaseOpt.FORWARD:
        return "FORWARD";
      case MovePhaseOpt.BACKWARD:
        return "BACKWARD";
      case MovePhaseOpt.STAY:
        return "STAY";
      case MovePhaseOpt.CHANGE:
        return "CHANGE";
      default:
        return "UNKNOWN";
    }
  },
}

export type MovePhaseOpt = 0 | 1 | 2 | 3 | 4 | -1;

export const EventCardFunc = {
  null: 0 as const,
  occur_chance_event: 1 as const,
  occur_heal_event: 2 as const,
  occur_cure_event: 3 as const,
  occur_quick_event: 4 as const,
  occur_curse_event: 5 as const,
  occur_chalice_event: 6 as const,
  occur_poison_event: 7 as const,
  occur_damage_event: 8 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): EventCardFunc {
    switch (object) {
      case 0:
      case "null":
        return EventCardFunc.null;
      case 1:
      case "occur_chance_event":
        return EventCardFunc.occur_chance_event;
      case 2:
      case "occur_heal_event":
        return EventCardFunc.occur_heal_event;
      case 3:
      case "occur_cure_event":
        return EventCardFunc.occur_cure_event;
      case 4:
      case "occur_quick_event":
        return EventCardFunc.occur_quick_event;
      case 5:
      case "occur_curse_event":
        return EventCardFunc.occur_curse_event;
      case 6:
      case "occur_chalice_event":
        return EventCardFunc.occur_chalice_event;
      case 7:
      case "occur_poison_event":
        return EventCardFunc.occur_poison_event;
      case 8:
      case "occur_damage_event":
        return EventCardFunc.occur_damage_event;
      case -1:
      case "UNRECOGNIZED":
      default:
        return EventCardFunc.UNRECOGNIZED;
    }
  },
  toJSON(object: EventCardFunc): string {
    switch (object) {
      case EventCardFunc.null:
        return "null";
      case EventCardFunc.occur_chance_event:
        return "occur_chance_event";
      case EventCardFunc.occur_heal_event:
        return "occur_heal_event";
      case EventCardFunc.occur_cure_event:
        return "occur_cure_event";
      case EventCardFunc.occur_quick_event:
        return "occur_quick_event";
      case EventCardFunc.occur_curse_event:
        return "occur_curse_event";
      case EventCardFunc.occur_chalice_event:
        return "occur_chalice_event";
      case EventCardFunc.occur_poison_event:
        return "occur_poison_event";
      case EventCardFunc.occur_damage_event:
        return "occur_damage_event";
      default:
        return "UNKNOWN";
    }
  },
}

export type EventCardFunc = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | -1;

export const SignEq = {
  EQUAL: 0 as const,
  GREATER: 1 as const,
  LESSER: 2 as const,
  ANY: 3 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): SignEq {
    switch (object) {
      case 0:
      case "EQUAL":
        return SignEq.EQUAL;
      case 1:
      case "GREATER":
        return SignEq.GREATER;
      case 2:
      case "LESSER":
        return SignEq.LESSER;
      case 3:
      case "ANY":
        return SignEq.ANY;
      case -1:
      case "UNRECOGNIZED":
      default:
        return SignEq.UNRECOGNIZED;
    }
  },
  toJSON(object: SignEq): string {
    switch (object) {
      case SignEq.EQUAL:
        return "EQUAL";
      case SignEq.GREATER:
        return "GREATER";
      case SignEq.LESSER:
        return "LESSER";
      case SignEq.ANY:
        return "ANY";
      default:
        return "UNKNOWN";
    }
  },
}

export type SignEq = 0 | 1 | 2 | 3 | -1;

export const EffectOption = {
  /** Status_Addition -  Status_Addition :
      like +3-Move, by cd to change the +/- value
   */
  Status_Addition: 0 as const,
  /** Instance_Change -   Instance_Change :
      like posion, it will -1 to inst_value in CC
   */
  Instance_Change: 1 as const,
  /** Status_FixValue -  Status_FixVal :
      like Ex Indomitable Spirit , it will last one blood
   */
  Status_FixValue: 2 as const,
  /** Hard_Instance_Change -  Hard_Status_FicValue,
   Somehow, Some Damage is 
   "whatever card is not current use, but still give the damn damage"
   */
  Hard_Instance_Change: 3 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): EffectOption {
    switch (object) {
      case 0:
      case "Status_Addition":
        return EffectOption.Status_Addition;
      case 1:
      case "Instance_Change":
        return EffectOption.Instance_Change;
      case 2:
      case "Status_FixValue":
        return EffectOption.Status_FixValue;
      case 3:
      case "Hard_Instance_Change":
        return EffectOption.Hard_Instance_Change;
      case -1:
      case "UNRECOGNIZED":
      default:
        return EffectOption.UNRECOGNIZED;
    }
  },
  toJSON(object: EffectOption): string {
    switch (object) {
      case EffectOption.Status_Addition:
        return "Status_Addition";
      case EffectOption.Instance_Change:
        return "Instance_Change";
      case EffectOption.Status_FixValue:
        return "Status_FixValue";
      case EffectOption.Hard_Instance_Change:
        return "Hard_Instance_Change";
      default:
        return "UNKNOWN";
    }
  },
}

export type EffectOption = 0 | 1 | 2 | 3 | -1;

export const GameDataSet = {
  encode(message: GameDataSet, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.roomKey);
    writer.uint32(18).string(message.hostId);
    writer.uint32(26).string(message.duelId);
    writer.uint32(32).int32(message.gameTurn);
    for (const v of message.hostCardDeck) {
      CharCardSet.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.duelCardDeck) {
      CharCardSet.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(56).int32(message.hostCurrCardKey);
    writer.uint32(64).int32(message.duelCurrCardKey);
    for (const v of message.hostEventCardDeck) {
      EventCard.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.duelEventCardDeck) {
      EventCard.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    writer.uint32(88).int32(message.range);
    writer.uint32(96).int32(message.nvn);
    writer.uint32(104).int32(message.firstAttack);
    writer.uint32(112).int32(message.currPhase);
    writer.uint32(120).int32(message.eventPhase);
    writer.uint32(128).int32(message.hookType);
    for (const v of message.effectCounter) {
      EffectResult.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): GameDataSet {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseGameDataSet) as GameDataSet;
    message.hostCardDeck = [];
    message.duelCardDeck = [];
    message.hostEventCardDeck = [];
    message.duelEventCardDeck = [];
    message.effectCounter = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roomKey = reader.string();
          break;
        case 2:
          message.hostId = reader.string();
          break;
        case 3:
          message.duelId = reader.string();
          break;
        case 4:
          message.gameTurn = reader.int32();
          break;
        case 5:
          message.hostCardDeck.push(CharCardSet.decode(reader, reader.uint32()));
          break;
        case 6:
          message.duelCardDeck.push(CharCardSet.decode(reader, reader.uint32()));
          break;
        case 7:
          message.hostCurrCardKey = reader.int32();
          break;
        case 8:
          message.duelCurrCardKey = reader.int32();
          break;
        case 9:
          message.hostEventCardDeck.push(EventCard.decode(reader, reader.uint32()));
          break;
        case 10:
          message.duelEventCardDeck.push(EventCard.decode(reader, reader.uint32()));
          break;
        case 11:
          message.range = reader.int32() as any;
          break;
        case 12:
          message.nvn = reader.int32();
          break;
        case 13:
          message.firstAttack = reader.int32() as any;
          break;
        case 14:
          message.currPhase = reader.int32() as any;
          break;
        case 15:
          message.eventPhase = reader.int32() as any;
          break;
        case 16:
          message.hookType = reader.int32() as any;
          break;
        case 17:
          message.effectCounter.push(EffectResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GameDataSet {
    const message = Object.create(baseGameDataSet) as GameDataSet;
    message.hostCardDeck = [];
    message.duelCardDeck = [];
    message.hostEventCardDeck = [];
    message.duelEventCardDeck = [];
    message.effectCounter = [];
    if (object.roomKey !== undefined && object.roomKey !== null) {
      message.roomKey = String(object.roomKey);
    } else {
      message.roomKey = "";
    }
    if (object.hostId !== undefined && object.hostId !== null) {
      message.hostId = String(object.hostId);
    } else {
      message.hostId = "";
    }
    if (object.duelId !== undefined && object.duelId !== null) {
      message.duelId = String(object.duelId);
    } else {
      message.duelId = "";
    }
    if (object.gameTurn !== undefined && object.gameTurn !== null) {
      message.gameTurn = Number(object.gameTurn);
    } else {
      message.gameTurn = 0;
    }
    if (object.hostCardDeck !== undefined && object.hostCardDeck !== null) {
      for (const e of object.hostCardDeck) {
        message.hostCardDeck.push(CharCardSet.fromJSON(e));
      }
    }
    if (object.duelCardDeck !== undefined && object.duelCardDeck !== null) {
      for (const e of object.duelCardDeck) {
        message.duelCardDeck.push(CharCardSet.fromJSON(e));
      }
    }
    if (object.hostCurrCardKey !== undefined && object.hostCurrCardKey !== null) {
      message.hostCurrCardKey = Number(object.hostCurrCardKey);
    } else {
      message.hostCurrCardKey = 0;
    }
    if (object.duelCurrCardKey !== undefined && object.duelCurrCardKey !== null) {
      message.duelCurrCardKey = Number(object.duelCurrCardKey);
    } else {
      message.duelCurrCardKey = 0;
    }
    if (object.hostEventCardDeck !== undefined && object.hostEventCardDeck !== null) {
      for (const e of object.hostEventCardDeck) {
        message.hostEventCardDeck.push(EventCard.fromJSON(e));
      }
    }
    if (object.duelEventCardDeck !== undefined && object.duelEventCardDeck !== null) {
      for (const e of object.duelEventCardDeck) {
        message.duelEventCardDeck.push(EventCard.fromJSON(e));
      }
    }
    if (object.range !== undefined && object.range !== null) {
      message.range = RangeType.fromJSON(object.range);
    } else {
      message.range = 0;
    }
    if (object.nvn !== undefined && object.nvn !== null) {
      message.nvn = Number(object.nvn);
    } else {
      message.nvn = 0;
    }
    if (object.firstAttack !== undefined && object.firstAttack !== null) {
      message.firstAttack = PlayerSide.fromJSON(object.firstAttack);
    } else {
      message.firstAttack = 0;
    }
    if (object.currPhase !== undefined && object.currPhase !== null) {
      message.currPhase = PlayerSide.fromJSON(object.currPhase);
    } else {
      message.currPhase = 0;
    }
    if (object.eventPhase !== undefined && object.eventPhase !== null) {
      message.eventPhase = EventHookPhase.fromJSON(object.eventPhase);
    } else {
      message.eventPhase = 0;
    }
    if (object.hookType !== undefined && object.hookType !== null) {
      message.hookType = EventHookType.fromJSON(object.hookType);
    } else {
      message.hookType = 0;
    }
    if (object.effectCounter !== undefined && object.effectCounter !== null) {
      for (const e of object.effectCounter) {
        message.effectCounter.push(EffectResult.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GameDataSet>): GameDataSet {
    const message = Object.create(baseGameDataSet) as GameDataSet;
    message.hostCardDeck = [];
    message.duelCardDeck = [];
    message.hostEventCardDeck = [];
    message.duelEventCardDeck = [];
    message.effectCounter = [];
    if (object.roomKey !== undefined && object.roomKey !== null) {
      message.roomKey = object.roomKey;
    } else {
      message.roomKey = "";
    }
    if (object.hostId !== undefined && object.hostId !== null) {
      message.hostId = object.hostId;
    } else {
      message.hostId = "";
    }
    if (object.duelId !== undefined && object.duelId !== null) {
      message.duelId = object.duelId;
    } else {
      message.duelId = "";
    }
    if (object.gameTurn !== undefined && object.gameTurn !== null) {
      message.gameTurn = object.gameTurn;
    } else {
      message.gameTurn = 0;
    }
    if (object.hostCardDeck !== undefined && object.hostCardDeck !== null) {
      for (const e of object.hostCardDeck) {
        message.hostCardDeck.push(CharCardSet.fromPartial(e));
      }
    }
    if (object.duelCardDeck !== undefined && object.duelCardDeck !== null) {
      for (const e of object.duelCardDeck) {
        message.duelCardDeck.push(CharCardSet.fromPartial(e));
      }
    }
    if (object.hostCurrCardKey !== undefined && object.hostCurrCardKey !== null) {
      message.hostCurrCardKey = object.hostCurrCardKey;
    } else {
      message.hostCurrCardKey = 0;
    }
    if (object.duelCurrCardKey !== undefined && object.duelCurrCardKey !== null) {
      message.duelCurrCardKey = object.duelCurrCardKey;
    } else {
      message.duelCurrCardKey = 0;
    }
    if (object.hostEventCardDeck !== undefined && object.hostEventCardDeck !== null) {
      for (const e of object.hostEventCardDeck) {
        message.hostEventCardDeck.push(EventCard.fromPartial(e));
      }
    }
    if (object.duelEventCardDeck !== undefined && object.duelEventCardDeck !== null) {
      for (const e of object.duelEventCardDeck) {
        message.duelEventCardDeck.push(EventCard.fromPartial(e));
      }
    }
    if (object.range !== undefined && object.range !== null) {
      message.range = object.range;
    } else {
      message.range = 0;
    }
    if (object.nvn !== undefined && object.nvn !== null) {
      message.nvn = object.nvn;
    } else {
      message.nvn = 0;
    }
    if (object.firstAttack !== undefined && object.firstAttack !== null) {
      message.firstAttack = object.firstAttack;
    } else {
      message.firstAttack = 0;
    }
    if (object.currPhase !== undefined && object.currPhase !== null) {
      message.currPhase = object.currPhase;
    } else {
      message.currPhase = 0;
    }
    if (object.eventPhase !== undefined && object.eventPhase !== null) {
      message.eventPhase = object.eventPhase;
    } else {
      message.eventPhase = 0;
    }
    if (object.hookType !== undefined && object.hookType !== null) {
      message.hookType = object.hookType;
    } else {
      message.hookType = 0;
    }
    if (object.effectCounter !== undefined && object.effectCounter !== null) {
      for (const e of object.effectCounter) {
        message.effectCounter.push(EffectResult.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: GameDataSet): unknown {
    const obj: any = {};
    obj.roomKey = message.roomKey || "";
    obj.hostId = message.hostId || "";
    obj.duelId = message.duelId || "";
    obj.gameTurn = message.gameTurn || 0;
    if (message.hostCardDeck) {
      obj.hostCardDeck = message.hostCardDeck.map(e => e ? CharCardSet.toJSON(e) : undefined);
    } else {
      obj.hostCardDeck = [];
    }
    if (message.duelCardDeck) {
      obj.duelCardDeck = message.duelCardDeck.map(e => e ? CharCardSet.toJSON(e) : undefined);
    } else {
      obj.duelCardDeck = [];
    }
    obj.hostCurrCardKey = message.hostCurrCardKey || 0;
    obj.duelCurrCardKey = message.duelCurrCardKey || 0;
    if (message.hostEventCardDeck) {
      obj.hostEventCardDeck = message.hostEventCardDeck.map(e => e ? EventCard.toJSON(e) : undefined);
    } else {
      obj.hostEventCardDeck = [];
    }
    if (message.duelEventCardDeck) {
      obj.duelEventCardDeck = message.duelEventCardDeck.map(e => e ? EventCard.toJSON(e) : undefined);
    } else {
      obj.duelEventCardDeck = [];
    }
    obj.range = RangeType.toJSON(message.range);
    obj.nvn = message.nvn || 0;
    obj.firstAttack = PlayerSide.toJSON(message.firstAttack);
    obj.currPhase = PlayerSide.toJSON(message.currPhase);
    obj.eventPhase = EventHookPhase.toJSON(message.eventPhase);
    obj.hookType = EventHookType.toJSON(message.hookType);
    if (message.effectCounter) {
      obj.effectCounter = message.effectCounter.map(e => e ? EffectResult.toJSON(e) : undefined);
    } else {
      obj.effectCounter = [];
    }
    return obj;
  },
};

export const CharCardSet = {
  encode(message: CharCardSet, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.charId);
    writer.uint32(16).int32(message.cardId);
    writer.uint32(24).int32(message.hpInst);
    writer.uint32(32).int32(message.apInst);
    writer.uint32(40).int32(message.dpInst);
    writer.uint32(48).int32(message.hpOrig);
    writer.uint32(56).int32(message.apOrig);
    writer.uint32(64).int32(message.dpOrig);
    writer.uint32(72).int32(message.level);
    for (const v of message.statusInst) {
      StatusSet.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.equSet !== undefined && message.equSet !== undefined) {
      CharCardEquSet.encode(message.equSet, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): CharCardSet {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseCharCardSet) as CharCardSet;
    message.statusInst = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.charId = reader.int32();
          break;
        case 2:
          message.cardId = reader.int32();
          break;
        case 3:
          message.hpInst = reader.int32();
          break;
        case 4:
          message.apInst = reader.int32();
          break;
        case 5:
          message.dpInst = reader.int32();
          break;
        case 6:
          message.hpOrig = reader.int32();
          break;
        case 7:
          message.apOrig = reader.int32();
          break;
        case 8:
          message.dpOrig = reader.int32();
          break;
        case 9:
          message.level = reader.int32();
          break;
        case 10:
          message.statusInst.push(StatusSet.decode(reader, reader.uint32()));
          break;
        case 11:
          message.equSet = CharCardEquSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CharCardSet {
    const message = Object.create(baseCharCardSet) as CharCardSet;
    message.statusInst = [];
    if (object.charId !== undefined && object.charId !== null) {
      message.charId = Number(object.charId);
    } else {
      message.charId = 0;
    }
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = Number(object.cardId);
    } else {
      message.cardId = 0;
    }
    if (object.hpInst !== undefined && object.hpInst !== null) {
      message.hpInst = Number(object.hpInst);
    } else {
      message.hpInst = 0;
    }
    if (object.apInst !== undefined && object.apInst !== null) {
      message.apInst = Number(object.apInst);
    } else {
      message.apInst = 0;
    }
    if (object.dpInst !== undefined && object.dpInst !== null) {
      message.dpInst = Number(object.dpInst);
    } else {
      message.dpInst = 0;
    }
    if (object.hpOrig !== undefined && object.hpOrig !== null) {
      message.hpOrig = Number(object.hpOrig);
    } else {
      message.hpOrig = 0;
    }
    if (object.apOrig !== undefined && object.apOrig !== null) {
      message.apOrig = Number(object.apOrig);
    } else {
      message.apOrig = 0;
    }
    if (object.dpOrig !== undefined && object.dpOrig !== null) {
      message.dpOrig = Number(object.dpOrig);
    } else {
      message.dpOrig = 0;
    }
    if (object.level !== undefined && object.level !== null) {
      message.level = Number(object.level);
    } else {
      message.level = 0;
    }
    if (object.statusInst !== undefined && object.statusInst !== null) {
      for (const e of object.statusInst) {
        message.statusInst.push(StatusSet.fromJSON(e));
      }
    }
    if (object.equSet !== undefined && object.equSet !== null) {
      message.equSet = CharCardEquSet.fromJSON(object.equSet);
    } else {
      message.equSet = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<CharCardSet>): CharCardSet {
    const message = Object.create(baseCharCardSet) as CharCardSet;
    message.statusInst = [];
    if (object.charId !== undefined && object.charId !== null) {
      message.charId = object.charId;
    } else {
      message.charId = 0;
    }
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = object.cardId;
    } else {
      message.cardId = 0;
    }
    if (object.hpInst !== undefined && object.hpInst !== null) {
      message.hpInst = object.hpInst;
    } else {
      message.hpInst = 0;
    }
    if (object.apInst !== undefined && object.apInst !== null) {
      message.apInst = object.apInst;
    } else {
      message.apInst = 0;
    }
    if (object.dpInst !== undefined && object.dpInst !== null) {
      message.dpInst = object.dpInst;
    } else {
      message.dpInst = 0;
    }
    if (object.hpOrig !== undefined && object.hpOrig !== null) {
      message.hpOrig = object.hpOrig;
    } else {
      message.hpOrig = 0;
    }
    if (object.apOrig !== undefined && object.apOrig !== null) {
      message.apOrig = object.apOrig;
    } else {
      message.apOrig = 0;
    }
    if (object.dpOrig !== undefined && object.dpOrig !== null) {
      message.dpOrig = object.dpOrig;
    } else {
      message.dpOrig = 0;
    }
    if (object.level !== undefined && object.level !== null) {
      message.level = object.level;
    } else {
      message.level = 0;
    }
    if (object.statusInst !== undefined && object.statusInst !== null) {
      for (const e of object.statusInst) {
        message.statusInst.push(StatusSet.fromPartial(e));
      }
    }
    if (object.equSet !== undefined && object.equSet !== null) {
      message.equSet = CharCardEquSet.fromPartial(object.equSet);
    } else {
      message.equSet = undefined;
    }
    return message;
  },
  toJSON(message: CharCardSet): unknown {
    const obj: any = {};
    obj.charId = message.charId || 0;
    obj.cardId = message.cardId || 0;
    obj.hpInst = message.hpInst || 0;
    obj.apInst = message.apInst || 0;
    obj.dpInst = message.dpInst || 0;
    obj.hpOrig = message.hpOrig || 0;
    obj.apOrig = message.apOrig || 0;
    obj.dpOrig = message.dpOrig || 0;
    obj.level = message.level || 0;
    if (message.statusInst) {
      obj.statusInst = message.statusInst.map(e => e ? StatusSet.toJSON(e) : undefined);
    } else {
      obj.statusInst = [];
    }
    obj.equSet = message.equSet ? CharCardEquSet.toJSON(message.equSet) : undefined;
    return obj;
  },
};

export const CharCardEquSet = {
  encode(message: CharCardEquSet, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.equId);
    writer.uint32(16).int32(message.hp);
    writer.uint32(24).int32(message.ap);
    writer.uint32(32).int32(message.dp);
    return writer;
  },
  decode(reader: Reader, length?: number): CharCardEquSet {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseCharCardEquSet) as CharCardEquSet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.equId = reader.int32();
          break;
        case 2:
          message.hp = reader.int32();
          break;
        case 3:
          message.ap = reader.int32();
          break;
        case 4:
          message.dp = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CharCardEquSet {
    const message = Object.create(baseCharCardEquSet) as CharCardEquSet;
    if (object.equId !== undefined && object.equId !== null) {
      message.equId = Number(object.equId);
    } else {
      message.equId = 0;
    }
    if (object.hp !== undefined && object.hp !== null) {
      message.hp = Number(object.hp);
    } else {
      message.hp = 0;
    }
    if (object.ap !== undefined && object.ap !== null) {
      message.ap = Number(object.ap);
    } else {
      message.ap = 0;
    }
    if (object.dp !== undefined && object.dp !== null) {
      message.dp = Number(object.dp);
    } else {
      message.dp = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<CharCardEquSet>): CharCardEquSet {
    const message = Object.create(baseCharCardEquSet) as CharCardEquSet;
    if (object.equId !== undefined && object.equId !== null) {
      message.equId = object.equId;
    } else {
      message.equId = 0;
    }
    if (object.hp !== undefined && object.hp !== null) {
      message.hp = object.hp;
    } else {
      message.hp = 0;
    }
    if (object.ap !== undefined && object.ap !== null) {
      message.ap = object.ap;
    } else {
      message.ap = 0;
    }
    if (object.dp !== undefined && object.dp !== null) {
      message.dp = object.dp;
    } else {
      message.dp = 0;
    }
    return message;
  },
  toJSON(message: CharCardEquSet): unknown {
    const obj: any = {};
    obj.equId = message.equId || 0;
    obj.hp = message.hp || 0;
    obj.ap = message.ap || 0;
    obj.dp = message.dp || 0;
    return obj;
  },
};

export const EventCard = {
  encode(message: EventCard, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.id);
    writer.uint32(16).int32(message.upOption);
    writer.uint32(24).int32(message.upVal);
    writer.uint32(32).int32(message.downOption);
    writer.uint32(40).int32(message.downVal);
    writer.uint32(48).int32(message.position);
    writer.uint32(56).bool(message.isInvert);
    writer.uint32(64).int32(message.funcMount);
    writer.uint32(72).int32(message.mountVal);
    return writer;
  },
  decode(reader: Reader, length?: number): EventCard {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseEventCard) as EventCard;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.upOption = reader.int32() as any;
          break;
        case 3:
          message.upVal = reader.int32();
          break;
        case 4:
          message.downOption = reader.int32() as any;
          break;
        case 5:
          message.downVal = reader.int32();
          break;
        case 6:
          message.position = reader.int32() as any;
          break;
        case 7:
          message.isInvert = reader.bool();
          break;
        case 8:
          message.funcMount = reader.int32() as any;
          break;
        case 9:
          message.mountVal = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCard {
    const message = Object.create(baseEventCard) as EventCard;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.upOption !== undefined && object.upOption !== null) {
      message.upOption = EventCardType.fromJSON(object.upOption);
    } else {
      message.upOption = 0;
    }
    if (object.upVal !== undefined && object.upVal !== null) {
      message.upVal = Number(object.upVal);
    } else {
      message.upVal = 0;
    }
    if (object.downOption !== undefined && object.downOption !== null) {
      message.downOption = EventCardType.fromJSON(object.downOption);
    } else {
      message.downOption = 0;
    }
    if (object.downVal !== undefined && object.downVal !== null) {
      message.downVal = Number(object.downVal);
    } else {
      message.downVal = 0;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = EventCardPos.fromJSON(object.position);
    } else {
      message.position = 0;
    }
    if (object.isInvert !== undefined && object.isInvert !== null) {
      message.isInvert = Boolean(object.isInvert);
    } else {
      message.isInvert = false;
    }
    if (object.funcMount !== undefined && object.funcMount !== null) {
      message.funcMount = EventCardFunc.fromJSON(object.funcMount);
    } else {
      message.funcMount = 0;
    }
    if (object.mountVal !== undefined && object.mountVal !== null) {
      message.mountVal = Number(object.mountVal);
    } else {
      message.mountVal = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCard>): EventCard {
    const message = Object.create(baseEventCard) as EventCard;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.upOption !== undefined && object.upOption !== null) {
      message.upOption = object.upOption;
    } else {
      message.upOption = 0;
    }
    if (object.upVal !== undefined && object.upVal !== null) {
      message.upVal = object.upVal;
    } else {
      message.upVal = 0;
    }
    if (object.downOption !== undefined && object.downOption !== null) {
      message.downOption = object.downOption;
    } else {
      message.downOption = 0;
    }
    if (object.downVal !== undefined && object.downVal !== null) {
      message.downVal = object.downVal;
    } else {
      message.downVal = 0;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    } else {
      message.position = 0;
    }
    if (object.isInvert !== undefined && object.isInvert !== null) {
      message.isInvert = object.isInvert;
    } else {
      message.isInvert = false;
    }
    if (object.funcMount !== undefined && object.funcMount !== null) {
      message.funcMount = object.funcMount;
    } else {
      message.funcMount = 0;
    }
    if (object.mountVal !== undefined && object.mountVal !== null) {
      message.mountVal = object.mountVal;
    } else {
      message.mountVal = 0;
    }
    return message;
  },
  toJSON(message: EventCard): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.upOption = EventCardType.toJSON(message.upOption);
    obj.upVal = message.upVal || 0;
    obj.downOption = EventCardType.toJSON(message.downOption);
    obj.downVal = message.downVal || 0;
    obj.position = EventCardPos.toJSON(message.position);
    obj.isInvert = message.isInvert || false;
    obj.funcMount = EventCardFunc.toJSON(message.funcMount);
    obj.mountVal = message.mountVal || 0;
    return obj;
  },
};

export const SkillSet = {
  encode(message: SkillSet, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.id);
    writer.uint32(16).int32(message.featNo);
    writer.uint32(24).int32(message.pow);
    writer.uint32(34).string(message.condString);
    for (const v of message.condCard) {
      SkillCardCond.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).fork();
    for (const v of message.condRange) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(reader: Reader, length?: number): SkillSet {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseSkillSet) as SkillSet;
    message.condCard = [];
    message.condRange = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.featNo = reader.int32();
          break;
        case 3:
          message.pow = reader.int32();
          break;
        case 4:
          message.condString = reader.string();
          break;
        case 5:
          message.condCard.push(SkillCardCond.decode(reader, reader.uint32()));
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.condRange.push(reader.int32() as any);
            }
          } else {
            message.condRange.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SkillSet {
    const message = Object.create(baseSkillSet) as SkillSet;
    message.condCard = [];
    message.condRange = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.featNo !== undefined && object.featNo !== null) {
      message.featNo = Number(object.featNo);
    } else {
      message.featNo = 0;
    }
    if (object.pow !== undefined && object.pow !== null) {
      message.pow = Number(object.pow);
    } else {
      message.pow = 0;
    }
    if (object.condString !== undefined && object.condString !== null) {
      message.condString = String(object.condString);
    } else {
      message.condString = "";
    }
    if (object.condCard !== undefined && object.condCard !== null) {
      for (const e of object.condCard) {
        message.condCard.push(SkillCardCond.fromJSON(e));
      }
    }
    if (object.condRange !== undefined && object.condRange !== null) {
      for (const e of object.condRange) {
        message.condRange.push(RangeType.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SkillSet>): SkillSet {
    const message = Object.create(baseSkillSet) as SkillSet;
    message.condCard = [];
    message.condRange = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.featNo !== undefined && object.featNo !== null) {
      message.featNo = object.featNo;
    } else {
      message.featNo = 0;
    }
    if (object.pow !== undefined && object.pow !== null) {
      message.pow = object.pow;
    } else {
      message.pow = 0;
    }
    if (object.condString !== undefined && object.condString !== null) {
      message.condString = object.condString;
    } else {
      message.condString = "";
    }
    if (object.condCard !== undefined && object.condCard !== null) {
      for (const e of object.condCard) {
        message.condCard.push(SkillCardCond.fromPartial(e));
      }
    }
    if (object.condRange !== undefined && object.condRange !== null) {
      for (const e of object.condRange) {
        message.condRange.push(e);
      }
    }
    return message;
  },
  toJSON(message: SkillSet): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.featNo = message.featNo || 0;
    obj.pow = message.pow || 0;
    obj.condString = message.condString || "";
    if (message.condCard) {
      obj.condCard = message.condCard.map(e => e ? SkillCardCond.toJSON(e) : undefined);
    } else {
      obj.condCard = [];
    }
    if (message.condRange) {
      obj.condRange = message.condRange.map(e => RangeType.toJSON(e));
    } else {
      obj.condRange = [];
    }
    return obj;
  },
};

export const SkillCardCond = {
  encode(message: SkillCardCond, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.type);
    writer.uint32(16).int32(message.val);
    writer.uint32(24).int32(message.compare);
    return writer;
  },
  decode(reader: Reader, length?: number): SkillCardCond {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseSkillCardCond) as SkillCardCond;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.val = reader.int32();
          break;
        case 3:
          message.compare = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SkillCardCond {
    const message = Object.create(baseSkillCardCond) as SkillCardCond;
    if (object.type !== undefined && object.type !== null) {
      message.type = EventCardType.fromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.val !== undefined && object.val !== null) {
      message.val = Number(object.val);
    } else {
      message.val = 0;
    }
    if (object.compare !== undefined && object.compare !== null) {
      message.compare = SignEq.fromJSON(object.compare);
    } else {
      message.compare = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<SkillCardCond>): SkillCardCond {
    const message = Object.create(baseSkillCardCond) as SkillCardCond;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.val !== undefined && object.val !== null) {
      message.val = object.val;
    } else {
      message.val = 0;
    }
    if (object.compare !== undefined && object.compare !== null) {
      message.compare = object.compare;
    } else {
      message.compare = 0;
    }
    return message;
  },
  toJSON(message: SkillCardCond): unknown {
    const obj: any = {};
    obj.type = EventCardType.toJSON(message.type);
    obj.val = message.val || 0;
    obj.compare = SignEq.toJSON(message.compare);
    return obj;
  },
};

export const StatusSet = {
  encode(message: StatusSet, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.id);
    writer.uint32(18).string(message.statusId);
    writer.uint32(24).int32(message.remainCd);
    writer.uint32(32).int32(message.featNo);
    writer.uint32(40).int32(message.pow);
    return writer;
  },
  decode(reader: Reader, length?: number): StatusSet {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseStatusSet) as StatusSet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.statusId = reader.string();
          break;
        case 3:
          message.remainCd = reader.int32();
          break;
        case 4:
          message.featNo = reader.int32();
          break;
        case 5:
          message.pow = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StatusSet {
    const message = Object.create(baseStatusSet) as StatusSet;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.statusId !== undefined && object.statusId !== null) {
      message.statusId = String(object.statusId);
    } else {
      message.statusId = "";
    }
    if (object.remainCd !== undefined && object.remainCd !== null) {
      message.remainCd = Number(object.remainCd);
    } else {
      message.remainCd = 0;
    }
    if (object.featNo !== undefined && object.featNo !== null) {
      message.featNo = Number(object.featNo);
    } else {
      message.featNo = 0;
    }
    if (object.pow !== undefined && object.pow !== null) {
      message.pow = Number(object.pow);
    } else {
      message.pow = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<StatusSet>): StatusSet {
    const message = Object.create(baseStatusSet) as StatusSet;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.statusId !== undefined && object.statusId !== null) {
      message.statusId = object.statusId;
    } else {
      message.statusId = "";
    }
    if (object.remainCd !== undefined && object.remainCd !== null) {
      message.remainCd = object.remainCd;
    } else {
      message.remainCd = 0;
    }
    if (object.featNo !== undefined && object.featNo !== null) {
      message.featNo = object.featNo;
    } else {
      message.featNo = 0;
    }
    if (object.pow !== undefined && object.pow !== null) {
      message.pow = object.pow;
    } else {
      message.pow = 0;
    }
    return message;
  },
  toJSON(message: StatusSet): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.statusId = message.statusId || "";
    obj.remainCd = message.remainCd || 0;
    obj.featNo = message.featNo || 0;
    obj.pow = message.pow || 0;
    return obj;
  },
};

export const EffectResult = {
  encode(message: EffectResult, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.tarCard);
    writer.uint32(16).int32(message.tarSide);
    if (message.triggerTime !== undefined && message.triggerTime !== undefined) {
      EffectTiming.encode(message.triggerTime, writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== undefined && message.endTime !== undefined) {
      EffectTiming.encode(message.endTime, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(40).int32(message.efOption);
    writer.uint32(48).int32(message.hp);
    writer.uint32(56).int32(message.ap);
    writer.uint32(64).int32(message.dp);
    writer.uint32(72).int32(message.mp);
    writer.uint32(80).bool(message.disableMove);
    writer.uint32(88).bool(message.disableAtk);
    writer.uint32(96).bool(message.disableDef);
    writer.uint32(104).bool(message.disableDraw);
    writer.uint32(112).bool(message.disableChange);
    writer.uint32(122).string(message.bindingFunc);
    writer.uint32(128).int32(message.remainCd);
    writer.uint32(138).string(message.assignFrom);
    writer.uint32(144).int32(message.skillId);
    writer.uint32(152).int32(message.statusId);
    return writer;
  },
  decode(reader: Reader, length?: number): EffectResult {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseEffectResult) as EffectResult;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tarCard = reader.int32();
          break;
        case 2:
          message.tarSide = reader.int32() as any;
          break;
        case 3:
          message.triggerTime = EffectTiming.decode(reader, reader.uint32());
          break;
        case 4:
          message.endTime = EffectTiming.decode(reader, reader.uint32());
          break;
        case 5:
          message.efOption = reader.int32() as any;
          break;
        case 6:
          message.hp = reader.int32();
          break;
        case 7:
          message.ap = reader.int32();
          break;
        case 8:
          message.dp = reader.int32();
          break;
        case 9:
          message.mp = reader.int32();
          break;
        case 10:
          message.disableMove = reader.bool();
          break;
        case 11:
          message.disableAtk = reader.bool();
          break;
        case 12:
          message.disableDef = reader.bool();
          break;
        case 13:
          message.disableDraw = reader.bool();
          break;
        case 14:
          message.disableChange = reader.bool();
          break;
        case 15:
          message.bindingFunc = reader.string();
          break;
        case 16:
          message.remainCd = reader.int32();
          break;
        case 17:
          message.assignFrom = reader.string();
          break;
        case 18:
          message.skillId = reader.int32();
          break;
        case 19:
          message.statusId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EffectResult {
    const message = Object.create(baseEffectResult) as EffectResult;
    if (object.tarCard !== undefined && object.tarCard !== null) {
      message.tarCard = Number(object.tarCard);
    } else {
      message.tarCard = 0;
    }
    if (object.tarSide !== undefined && object.tarSide !== null) {
      message.tarSide = PlayerSide.fromJSON(object.tarSide);
    } else {
      message.tarSide = 0;
    }
    if (object.triggerTime !== undefined && object.triggerTime !== null) {
      message.triggerTime = EffectTiming.fromJSON(object.triggerTime);
    } else {
      message.triggerTime = undefined;
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = EffectTiming.fromJSON(object.endTime);
    } else {
      message.endTime = undefined;
    }
    if (object.efOption !== undefined && object.efOption !== null) {
      message.efOption = EffectOption.fromJSON(object.efOption);
    } else {
      message.efOption = 0;
    }
    if (object.hp !== undefined && object.hp !== null) {
      message.hp = Number(object.hp);
    } else {
      message.hp = 0;
    }
    if (object.ap !== undefined && object.ap !== null) {
      message.ap = Number(object.ap);
    } else {
      message.ap = 0;
    }
    if (object.dp !== undefined && object.dp !== null) {
      message.dp = Number(object.dp);
    } else {
      message.dp = 0;
    }
    if (object.mp !== undefined && object.mp !== null) {
      message.mp = Number(object.mp);
    } else {
      message.mp = 0;
    }
    if (object.disableMove !== undefined && object.disableMove !== null) {
      message.disableMove = Boolean(object.disableMove);
    } else {
      message.disableMove = false;
    }
    if (object.disableAtk !== undefined && object.disableAtk !== null) {
      message.disableAtk = Boolean(object.disableAtk);
    } else {
      message.disableAtk = false;
    }
    if (object.disableDef !== undefined && object.disableDef !== null) {
      message.disableDef = Boolean(object.disableDef);
    } else {
      message.disableDef = false;
    }
    if (object.disableDraw !== undefined && object.disableDraw !== null) {
      message.disableDraw = Boolean(object.disableDraw);
    } else {
      message.disableDraw = false;
    }
    if (object.disableChange !== undefined && object.disableChange !== null) {
      message.disableChange = Boolean(object.disableChange);
    } else {
      message.disableChange = false;
    }
    if (object.bindingFunc !== undefined && object.bindingFunc !== null) {
      message.bindingFunc = String(object.bindingFunc);
    } else {
      message.bindingFunc = "";
    }
    if (object.remainCd !== undefined && object.remainCd !== null) {
      message.remainCd = Number(object.remainCd);
    } else {
      message.remainCd = 0;
    }
    if (object.assignFrom !== undefined && object.assignFrom !== null) {
      message.assignFrom = String(object.assignFrom);
    } else {
      message.assignFrom = "";
    }
    if (object.skillId !== undefined && object.skillId !== null) {
      message.skillId = Number(object.skillId);
    } else {
      message.skillId = 0;
    }
    if (object.statusId !== undefined && object.statusId !== null) {
      message.statusId = Number(object.statusId);
    } else {
      message.statusId = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<EffectResult>): EffectResult {
    const message = Object.create(baseEffectResult) as EffectResult;
    if (object.tarCard !== undefined && object.tarCard !== null) {
      message.tarCard = object.tarCard;
    } else {
      message.tarCard = 0;
    }
    if (object.tarSide !== undefined && object.tarSide !== null) {
      message.tarSide = object.tarSide;
    } else {
      message.tarSide = 0;
    }
    if (object.triggerTime !== undefined && object.triggerTime !== null) {
      message.triggerTime = EffectTiming.fromPartial(object.triggerTime);
    } else {
      message.triggerTime = undefined;
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = EffectTiming.fromPartial(object.endTime);
    } else {
      message.endTime = undefined;
    }
    if (object.efOption !== undefined && object.efOption !== null) {
      message.efOption = object.efOption;
    } else {
      message.efOption = 0;
    }
    if (object.hp !== undefined && object.hp !== null) {
      message.hp = object.hp;
    } else {
      message.hp = 0;
    }
    if (object.ap !== undefined && object.ap !== null) {
      message.ap = object.ap;
    } else {
      message.ap = 0;
    }
    if (object.dp !== undefined && object.dp !== null) {
      message.dp = object.dp;
    } else {
      message.dp = 0;
    }
    if (object.mp !== undefined && object.mp !== null) {
      message.mp = object.mp;
    } else {
      message.mp = 0;
    }
    if (object.disableMove !== undefined && object.disableMove !== null) {
      message.disableMove = object.disableMove;
    } else {
      message.disableMove = false;
    }
    if (object.disableAtk !== undefined && object.disableAtk !== null) {
      message.disableAtk = object.disableAtk;
    } else {
      message.disableAtk = false;
    }
    if (object.disableDef !== undefined && object.disableDef !== null) {
      message.disableDef = object.disableDef;
    } else {
      message.disableDef = false;
    }
    if (object.disableDraw !== undefined && object.disableDraw !== null) {
      message.disableDraw = object.disableDraw;
    } else {
      message.disableDraw = false;
    }
    if (object.disableChange !== undefined && object.disableChange !== null) {
      message.disableChange = object.disableChange;
    } else {
      message.disableChange = false;
    }
    if (object.bindingFunc !== undefined && object.bindingFunc !== null) {
      message.bindingFunc = object.bindingFunc;
    } else {
      message.bindingFunc = "";
    }
    if (object.remainCd !== undefined && object.remainCd !== null) {
      message.remainCd = object.remainCd;
    } else {
      message.remainCd = 0;
    }
    if (object.assignFrom !== undefined && object.assignFrom !== null) {
      message.assignFrom = object.assignFrom;
    } else {
      message.assignFrom = "";
    }
    if (object.skillId !== undefined && object.skillId !== null) {
      message.skillId = object.skillId;
    } else {
      message.skillId = 0;
    }
    if (object.statusId !== undefined && object.statusId !== null) {
      message.statusId = object.statusId;
    } else {
      message.statusId = 0;
    }
    return message;
  },
  toJSON(message: EffectResult): unknown {
    const obj: any = {};
    obj.tarCard = message.tarCard || 0;
    obj.tarSide = PlayerSide.toJSON(message.tarSide);
    obj.triggerTime = message.triggerTime ? EffectTiming.toJSON(message.triggerTime) : undefined;
    obj.endTime = message.endTime ? EffectTiming.toJSON(message.endTime) : undefined;
    obj.efOption = EffectOption.toJSON(message.efOption);
    obj.hp = message.hp || 0;
    obj.ap = message.ap || 0;
    obj.dp = message.dp || 0;
    obj.mp = message.mp || 0;
    obj.disableMove = message.disableMove || false;
    obj.disableAtk = message.disableAtk || false;
    obj.disableDef = message.disableDef || false;
    obj.disableDraw = message.disableDraw || false;
    obj.disableChange = message.disableChange || false;
    obj.bindingFunc = message.bindingFunc || "";
    obj.remainCd = message.remainCd || 0;
    obj.assignFrom = message.assignFrom || "";
    obj.skillId = message.skillId || 0;
    obj.statusId = message.statusId || 0;
    return obj;
  },
};

export const EffectTiming = {
  encode(message: EffectTiming, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.eventPhase);
    writer.uint32(16).int32(message.hookType);
    writer.uint32(24).int32(message.subCount);
    return writer;
  },
  decode(reader: Reader, length?: number): EffectTiming {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseEffectTiming) as EffectTiming;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventPhase = reader.int32() as any;
          break;
        case 2:
          message.hookType = reader.int32() as any;
          break;
        case 3:
          message.subCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EffectTiming {
    const message = Object.create(baseEffectTiming) as EffectTiming;
    if (object.eventPhase !== undefined && object.eventPhase !== null) {
      message.eventPhase = EventHookPhase.fromJSON(object.eventPhase);
    } else {
      message.eventPhase = 0;
    }
    if (object.hookType !== undefined && object.hookType !== null) {
      message.hookType = EventHookType.fromJSON(object.hookType);
    } else {
      message.hookType = 0;
    }
    if (object.subCount !== undefined && object.subCount !== null) {
      message.subCount = Number(object.subCount);
    } else {
      message.subCount = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<EffectTiming>): EffectTiming {
    const message = Object.create(baseEffectTiming) as EffectTiming;
    if (object.eventPhase !== undefined && object.eventPhase !== null) {
      message.eventPhase = object.eventPhase;
    } else {
      message.eventPhase = 0;
    }
    if (object.hookType !== undefined && object.hookType !== null) {
      message.hookType = object.hookType;
    } else {
      message.hookType = 0;
    }
    if (object.subCount !== undefined && object.subCount !== null) {
      message.subCount = object.subCount;
    } else {
      message.subCount = 0;
    }
    return message;
  },
  toJSON(message: EffectTiming): unknown {
    const obj: any = {};
    obj.eventPhase = EventHookPhase.toJSON(message.eventPhase);
    obj.hookType = EventHookType.toJSON(message.hookType);
    obj.subCount = message.subCount || 0;
    return obj;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;