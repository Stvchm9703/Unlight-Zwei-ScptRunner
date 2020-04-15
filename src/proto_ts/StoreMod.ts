/* eslint-disable */
import { MovePhaseOpt, EventCard, SkillSet, PlayerSide, EffectResult } from './Data';
import { EventHookPhase, EventHookType } from './EventHookPhase';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  Move-Phase-SnapMod
 */
export interface MovePhaseSnapMod {
  /**
   *   flaging 
   */
  turns: number;
  hostVal: number;
  duelVal: number;
  hostOpt: MovePhaseOpt;
  duelOpt: MovePhaseOpt;
  hostCard: EventCard[];
  duelCard: EventCard[];
  hostTrigSkl: SkillSet[];
  duelTrigSkl: SkillSet[];
}

/**
 *  AD-Phase-SnapMod
 */
export interface ADPhaseSnapMod {
  turns: number;
  firstAttack: PlayerSide;
  currAttacker: PlayerSide;
  eventPhase: EventHookPhase;
  attackVal: number;
  defenceVal: number;
  attackCard: EventCard[];
  defenceCard: EventCard[];
  attackTrigSkl: SkillSet[];
  defenceTrigSkl: SkillSet[];
  isProcessed: boolean;
}

/**
 *  // Effect-Status-SnapMod
 */
export interface EffectNodeSnapMod {
  turns: number;
  pendingEf: EffectResult[];
}

/**
 *  PhaseInstance-SnapMod
 */
export interface PhaseSnapMod {
  turns: number;
  eventPhase: EventHookPhase;
  hookType: EventHookType;
  isHostReady: boolean;
  isDuelReady: boolean;
  firstAttack: PlayerSide;
  /**
   *  EventHookType               hook_type               = 16;
   */
  currAttack: PlayerSide;
}

const baseMovePhaseSnapMod: object = {
  turns: 0,
  hostVal: 0,
  duelVal: 0,
  hostOpt: 0,
  duelOpt: 0,
  hostCard: undefined,
  duelCard: undefined,
  hostTrigSkl: undefined,
  duelTrigSkl: undefined,
};

const baseADPhaseSnapMod: object = {
  turns: 0,
  firstAttack: 0,
  currAttacker: 0,
  eventPhase: 0,
  attackVal: 0,
  defenceVal: 0,
  attackCard: undefined,
  defenceCard: undefined,
  attackTrigSkl: undefined,
  defenceTrigSkl: undefined,
  isProcessed: false,
};

const baseEffectNodeSnapMod: object = {
  turns: 0,
  pendingEf: undefined,
};

const basePhaseSnapMod: object = {
  turns: 0,
  eventPhase: 0,
  hookType: 0,
  isHostReady: false,
  isDuelReady: false,
  firstAttack: 0,
  currAttack: 0,
};

export const MovePhaseSnapMod = {
  encode(message: MovePhaseSnapMod, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.turns);
    writer.uint32(16).int32(message.hostVal);
    writer.uint32(24).int32(message.duelVal);
    writer.uint32(32).int32(message.hostOpt);
    writer.uint32(40).int32(message.duelOpt);
    for (const v of message.hostCard) {
      EventCard.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.duelCard) {
      EventCard.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.hostTrigSkl) {
      SkillSet.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.duelTrigSkl) {
      SkillSet.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): MovePhaseSnapMod {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseMovePhaseSnapMod) as MovePhaseSnapMod;
    message.hostCard = [];
    message.duelCard = [];
    message.hostTrigSkl = [];
    message.duelTrigSkl = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.turns = reader.int32();
          break;
        case 2:
          message.hostVal = reader.int32();
          break;
        case 3:
          message.duelVal = reader.int32();
          break;
        case 4:
          message.hostOpt = reader.int32() as any;
          break;
        case 5:
          message.duelOpt = reader.int32() as any;
          break;
        case 6:
          message.hostCard.push(EventCard.decode(reader, reader.uint32()));
          break;
        case 7:
          message.duelCard.push(EventCard.decode(reader, reader.uint32()));
          break;
        case 8:
          message.hostTrigSkl.push(SkillSet.decode(reader, reader.uint32()));
          break;
        case 9:
          message.duelTrigSkl.push(SkillSet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MovePhaseSnapMod {
    const message = Object.create(baseMovePhaseSnapMod) as MovePhaseSnapMod;
    message.hostCard = [];
    message.duelCard = [];
    message.hostTrigSkl = [];
    message.duelTrigSkl = [];
    if (object.turns !== undefined && object.turns !== null) {
      message.turns = Number(object.turns);
    } else {
      message.turns = 0;
    }
    if (object.hostVal !== undefined && object.hostVal !== null) {
      message.hostVal = Number(object.hostVal);
    } else {
      message.hostVal = 0;
    }
    if (object.duelVal !== undefined && object.duelVal !== null) {
      message.duelVal = Number(object.duelVal);
    } else {
      message.duelVal = 0;
    }
    if (object.hostOpt !== undefined && object.hostOpt !== null) {
      message.hostOpt = MovePhaseOpt.fromJSON(object.hostOpt);
    } else {
      message.hostOpt = 0;
    }
    if (object.duelOpt !== undefined && object.duelOpt !== null) {
      message.duelOpt = MovePhaseOpt.fromJSON(object.duelOpt);
    } else {
      message.duelOpt = 0;
    }
    if (object.hostCard !== undefined && object.hostCard !== null) {
      for (const e of object.hostCard) {
        message.hostCard.push(EventCard.fromJSON(e));
      }
    }
    if (object.duelCard !== undefined && object.duelCard !== null) {
      for (const e of object.duelCard) {
        message.duelCard.push(EventCard.fromJSON(e));
      }
    }
    if (object.hostTrigSkl !== undefined && object.hostTrigSkl !== null) {
      for (const e of object.hostTrigSkl) {
        message.hostTrigSkl.push(SkillSet.fromJSON(e));
      }
    }
    if (object.duelTrigSkl !== undefined && object.duelTrigSkl !== null) {
      for (const e of object.duelTrigSkl) {
        message.duelTrigSkl.push(SkillSet.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MovePhaseSnapMod>): MovePhaseSnapMod {
    const message = Object.create(baseMovePhaseSnapMod) as MovePhaseSnapMod;
    message.hostCard = [];
    message.duelCard = [];
    message.hostTrigSkl = [];
    message.duelTrigSkl = [];
    if (object.turns !== undefined && object.turns !== null) {
      message.turns = object.turns;
    } else {
      message.turns = 0;
    }
    if (object.hostVal !== undefined && object.hostVal !== null) {
      message.hostVal = object.hostVal;
    } else {
      message.hostVal = 0;
    }
    if (object.duelVal !== undefined && object.duelVal !== null) {
      message.duelVal = object.duelVal;
    } else {
      message.duelVal = 0;
    }
    if (object.hostOpt !== undefined && object.hostOpt !== null) {
      message.hostOpt = object.hostOpt;
    } else {
      message.hostOpt = 0;
    }
    if (object.duelOpt !== undefined && object.duelOpt !== null) {
      message.duelOpt = object.duelOpt;
    } else {
      message.duelOpt = 0;
    }
    if (object.hostCard !== undefined && object.hostCard !== null) {
      for (const e of object.hostCard) {
        message.hostCard.push(EventCard.fromPartial(e));
      }
    }
    if (object.duelCard !== undefined && object.duelCard !== null) {
      for (const e of object.duelCard) {
        message.duelCard.push(EventCard.fromPartial(e));
      }
    }
    if (object.hostTrigSkl !== undefined && object.hostTrigSkl !== null) {
      for (const e of object.hostTrigSkl) {
        message.hostTrigSkl.push(SkillSet.fromPartial(e));
      }
    }
    if (object.duelTrigSkl !== undefined && object.duelTrigSkl !== null) {
      for (const e of object.duelTrigSkl) {
        message.duelTrigSkl.push(SkillSet.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: MovePhaseSnapMod): unknown {
    const obj: any = {};
    obj.turns = message.turns || 0;
    obj.hostVal = message.hostVal || 0;
    obj.duelVal = message.duelVal || 0;
    obj.hostOpt = MovePhaseOpt.toJSON(message.hostOpt);
    obj.duelOpt = MovePhaseOpt.toJSON(message.duelOpt);
    if (message.hostCard) {
      obj.hostCard = message.hostCard.map(e => e ? EventCard.toJSON(e) : undefined);
    } else {
      obj.hostCard = [];
    }
    if (message.duelCard) {
      obj.duelCard = message.duelCard.map(e => e ? EventCard.toJSON(e) : undefined);
    } else {
      obj.duelCard = [];
    }
    if (message.hostTrigSkl) {
      obj.hostTrigSkl = message.hostTrigSkl.map(e => e ? SkillSet.toJSON(e) : undefined);
    } else {
      obj.hostTrigSkl = [];
    }
    if (message.duelTrigSkl) {
      obj.duelTrigSkl = message.duelTrigSkl.map(e => e ? SkillSet.toJSON(e) : undefined);
    } else {
      obj.duelTrigSkl = [];
    }
    return obj;
  },
};

export const ADPhaseSnapMod = {
  encode(message: ADPhaseSnapMod, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.turns);
    writer.uint32(16).int32(message.firstAttack);
    writer.uint32(24).int32(message.currAttacker);
    writer.uint32(32).int32(message.eventPhase);
    writer.uint32(40).int32(message.attackVal);
    writer.uint32(48).int32(message.defenceVal);
    for (const v of message.attackCard) {
      EventCard.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.defenceCard) {
      EventCard.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.attackTrigSkl) {
      SkillSet.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.defenceTrigSkl) {
      SkillSet.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    writer.uint32(88).bool(message.isProcessed);
    return writer;
  },
  decode(reader: Reader, length?: number): ADPhaseSnapMod {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseADPhaseSnapMod) as ADPhaseSnapMod;
    message.attackCard = [];
    message.defenceCard = [];
    message.attackTrigSkl = [];
    message.defenceTrigSkl = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.turns = reader.int32();
          break;
        case 2:
          message.firstAttack = reader.int32() as any;
          break;
        case 3:
          message.currAttacker = reader.int32() as any;
          break;
        case 4:
          message.eventPhase = reader.int32() as any;
          break;
        case 5:
          message.attackVal = reader.int32();
          break;
        case 6:
          message.defenceVal = reader.int32();
          break;
        case 7:
          message.attackCard.push(EventCard.decode(reader, reader.uint32()));
          break;
        case 8:
          message.defenceCard.push(EventCard.decode(reader, reader.uint32()));
          break;
        case 9:
          message.attackTrigSkl.push(SkillSet.decode(reader, reader.uint32()));
          break;
        case 10:
          message.defenceTrigSkl.push(SkillSet.decode(reader, reader.uint32()));
          break;
        case 11:
          message.isProcessed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ADPhaseSnapMod {
    const message = Object.create(baseADPhaseSnapMod) as ADPhaseSnapMod;
    message.attackCard = [];
    message.defenceCard = [];
    message.attackTrigSkl = [];
    message.defenceTrigSkl = [];
    if (object.turns !== undefined && object.turns !== null) {
      message.turns = Number(object.turns);
    } else {
      message.turns = 0;
    }
    if (object.firstAttack !== undefined && object.firstAttack !== null) {
      message.firstAttack = PlayerSide.fromJSON(object.firstAttack);
    } else {
      message.firstAttack = 0;
    }
    if (object.currAttacker !== undefined && object.currAttacker !== null) {
      message.currAttacker = PlayerSide.fromJSON(object.currAttacker);
    } else {
      message.currAttacker = 0;
    }
    if (object.eventPhase !== undefined && object.eventPhase !== null) {
      message.eventPhase = EventHookPhase.fromJSON(object.eventPhase);
    } else {
      message.eventPhase = 0;
    }
    if (object.attackVal !== undefined && object.attackVal !== null) {
      message.attackVal = Number(object.attackVal);
    } else {
      message.attackVal = 0;
    }
    if (object.defenceVal !== undefined && object.defenceVal !== null) {
      message.defenceVal = Number(object.defenceVal);
    } else {
      message.defenceVal = 0;
    }
    if (object.attackCard !== undefined && object.attackCard !== null) {
      for (const e of object.attackCard) {
        message.attackCard.push(EventCard.fromJSON(e));
      }
    }
    if (object.defenceCard !== undefined && object.defenceCard !== null) {
      for (const e of object.defenceCard) {
        message.defenceCard.push(EventCard.fromJSON(e));
      }
    }
    if (object.attackTrigSkl !== undefined && object.attackTrigSkl !== null) {
      for (const e of object.attackTrigSkl) {
        message.attackTrigSkl.push(SkillSet.fromJSON(e));
      }
    }
    if (object.defenceTrigSkl !== undefined && object.defenceTrigSkl !== null) {
      for (const e of object.defenceTrigSkl) {
        message.defenceTrigSkl.push(SkillSet.fromJSON(e));
      }
    }
    if (object.isProcessed !== undefined && object.isProcessed !== null) {
      message.isProcessed = Boolean(object.isProcessed);
    } else {
      message.isProcessed = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<ADPhaseSnapMod>): ADPhaseSnapMod {
    const message = Object.create(baseADPhaseSnapMod) as ADPhaseSnapMod;
    message.attackCard = [];
    message.defenceCard = [];
    message.attackTrigSkl = [];
    message.defenceTrigSkl = [];
    if (object.turns !== undefined && object.turns !== null) {
      message.turns = object.turns;
    } else {
      message.turns = 0;
    }
    if (object.firstAttack !== undefined && object.firstAttack !== null) {
      message.firstAttack = object.firstAttack;
    } else {
      message.firstAttack = 0;
    }
    if (object.currAttacker !== undefined && object.currAttacker !== null) {
      message.currAttacker = object.currAttacker;
    } else {
      message.currAttacker = 0;
    }
    if (object.eventPhase !== undefined && object.eventPhase !== null) {
      message.eventPhase = object.eventPhase;
    } else {
      message.eventPhase = 0;
    }
    if (object.attackVal !== undefined && object.attackVal !== null) {
      message.attackVal = object.attackVal;
    } else {
      message.attackVal = 0;
    }
    if (object.defenceVal !== undefined && object.defenceVal !== null) {
      message.defenceVal = object.defenceVal;
    } else {
      message.defenceVal = 0;
    }
    if (object.attackCard !== undefined && object.attackCard !== null) {
      for (const e of object.attackCard) {
        message.attackCard.push(EventCard.fromPartial(e));
      }
    }
    if (object.defenceCard !== undefined && object.defenceCard !== null) {
      for (const e of object.defenceCard) {
        message.defenceCard.push(EventCard.fromPartial(e));
      }
    }
    if (object.attackTrigSkl !== undefined && object.attackTrigSkl !== null) {
      for (const e of object.attackTrigSkl) {
        message.attackTrigSkl.push(SkillSet.fromPartial(e));
      }
    }
    if (object.defenceTrigSkl !== undefined && object.defenceTrigSkl !== null) {
      for (const e of object.defenceTrigSkl) {
        message.defenceTrigSkl.push(SkillSet.fromPartial(e));
      }
    }
    if (object.isProcessed !== undefined && object.isProcessed !== null) {
      message.isProcessed = object.isProcessed;
    } else {
      message.isProcessed = false;
    }
    return message;
  },
  toJSON(message: ADPhaseSnapMod): unknown {
    const obj: any = {};
    obj.turns = message.turns || 0;
    obj.firstAttack = PlayerSide.toJSON(message.firstAttack);
    obj.currAttacker = PlayerSide.toJSON(message.currAttacker);
    obj.eventPhase = EventHookPhase.toJSON(message.eventPhase);
    obj.attackVal = message.attackVal || 0;
    obj.defenceVal = message.defenceVal || 0;
    if (message.attackCard) {
      obj.attackCard = message.attackCard.map(e => e ? EventCard.toJSON(e) : undefined);
    } else {
      obj.attackCard = [];
    }
    if (message.defenceCard) {
      obj.defenceCard = message.defenceCard.map(e => e ? EventCard.toJSON(e) : undefined);
    } else {
      obj.defenceCard = [];
    }
    if (message.attackTrigSkl) {
      obj.attackTrigSkl = message.attackTrigSkl.map(e => e ? SkillSet.toJSON(e) : undefined);
    } else {
      obj.attackTrigSkl = [];
    }
    if (message.defenceTrigSkl) {
      obj.defenceTrigSkl = message.defenceTrigSkl.map(e => e ? SkillSet.toJSON(e) : undefined);
    } else {
      obj.defenceTrigSkl = [];
    }
    obj.isProcessed = message.isProcessed || false;
    return obj;
  },
};

export const EffectNodeSnapMod = {
  encode(message: EffectNodeSnapMod, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.turns);
    for (const v of message.pendingEf) {
      EffectResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): EffectNodeSnapMod {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseEffectNodeSnapMod) as EffectNodeSnapMod;
    message.pendingEf = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.turns = reader.int32();
          break;
        case 2:
          message.pendingEf.push(EffectResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EffectNodeSnapMod {
    const message = Object.create(baseEffectNodeSnapMod) as EffectNodeSnapMod;
    message.pendingEf = [];
    if (object.turns !== undefined && object.turns !== null) {
      message.turns = Number(object.turns);
    } else {
      message.turns = 0;
    }
    if (object.pendingEf !== undefined && object.pendingEf !== null) {
      for (const e of object.pendingEf) {
        message.pendingEf.push(EffectResult.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EffectNodeSnapMod>): EffectNodeSnapMod {
    const message = Object.create(baseEffectNodeSnapMod) as EffectNodeSnapMod;
    message.pendingEf = [];
    if (object.turns !== undefined && object.turns !== null) {
      message.turns = object.turns;
    } else {
      message.turns = 0;
    }
    if (object.pendingEf !== undefined && object.pendingEf !== null) {
      for (const e of object.pendingEf) {
        message.pendingEf.push(EffectResult.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: EffectNodeSnapMod): unknown {
    const obj: any = {};
    obj.turns = message.turns || 0;
    if (message.pendingEf) {
      obj.pendingEf = message.pendingEf.map(e => e ? EffectResult.toJSON(e) : undefined);
    } else {
      obj.pendingEf = [];
    }
    return obj;
  },
};

export const PhaseSnapMod = {
  encode(message: PhaseSnapMod, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.turns);
    writer.uint32(16).int32(message.eventPhase);
    writer.uint32(24).int32(message.hookType);
    writer.uint32(32).bool(message.isHostReady);
    writer.uint32(40).bool(message.isDuelReady);
    writer.uint32(48).int32(message.firstAttack);
    writer.uint32(56).int32(message.currAttack);
    return writer;
  },
  decode(reader: Reader, length?: number): PhaseSnapMod {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(basePhaseSnapMod) as PhaseSnapMod;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.turns = reader.int32();
          break;
        case 2:
          message.eventPhase = reader.int32() as any;
          break;
        case 3:
          message.hookType = reader.int32() as any;
          break;
        case 4:
          message.isHostReady = reader.bool();
          break;
        case 5:
          message.isDuelReady = reader.bool();
          break;
        case 6:
          message.firstAttack = reader.int32() as any;
          break;
        case 7:
          message.currAttack = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PhaseSnapMod {
    const message = Object.create(basePhaseSnapMod) as PhaseSnapMod;
    if (object.turns !== undefined && object.turns !== null) {
      message.turns = Number(object.turns);
    } else {
      message.turns = 0;
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
    if (object.isHostReady !== undefined && object.isHostReady !== null) {
      message.isHostReady = Boolean(object.isHostReady);
    } else {
      message.isHostReady = false;
    }
    if (object.isDuelReady !== undefined && object.isDuelReady !== null) {
      message.isDuelReady = Boolean(object.isDuelReady);
    } else {
      message.isDuelReady = false;
    }
    if (object.firstAttack !== undefined && object.firstAttack !== null) {
      message.firstAttack = PlayerSide.fromJSON(object.firstAttack);
    } else {
      message.firstAttack = 0;
    }
    if (object.currAttack !== undefined && object.currAttack !== null) {
      message.currAttack = PlayerSide.fromJSON(object.currAttack);
    } else {
      message.currAttack = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<PhaseSnapMod>): PhaseSnapMod {
    const message = Object.create(basePhaseSnapMod) as PhaseSnapMod;
    if (object.turns !== undefined && object.turns !== null) {
      message.turns = object.turns;
    } else {
      message.turns = 0;
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
    if (object.isHostReady !== undefined && object.isHostReady !== null) {
      message.isHostReady = object.isHostReady;
    } else {
      message.isHostReady = false;
    }
    if (object.isDuelReady !== undefined && object.isDuelReady !== null) {
      message.isDuelReady = object.isDuelReady;
    } else {
      message.isDuelReady = false;
    }
    if (object.firstAttack !== undefined && object.firstAttack !== null) {
      message.firstAttack = object.firstAttack;
    } else {
      message.firstAttack = 0;
    }
    if (object.currAttack !== undefined && object.currAttack !== null) {
      message.currAttack = object.currAttack;
    } else {
      message.currAttack = 0;
    }
    return message;
  },
  toJSON(message: PhaseSnapMod): unknown {
    const obj: any = {};
    obj.turns = message.turns || 0;
    obj.eventPhase = EventHookPhase.toJSON(message.eventPhase);
    obj.hookType = EventHookType.toJSON(message.hookType);
    obj.isHostReady = message.isHostReady || false;
    obj.isDuelReady = message.isDuelReady || false;
    obj.firstAttack = PlayerSide.toJSON(message.firstAttack);
    obj.currAttack = PlayerSide.toJSON(message.currAttack);
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