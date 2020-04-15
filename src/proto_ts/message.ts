/* eslint-disable */
import { EventCard, SkillSet, EffectResult } from './Data';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  ANCHOR: message-struct for game-service
 *  SECTION: message.proto
 *  -------------------------------------------------------------
 */
export interface SESkillCalReq {
  incomeCard: EventCard[];
  feat: SkillSet[];
  fromCli: string;
}

export interface SESkillCalResp {
  resultVal: number;
  effectResult: EffectResult[];
}

export interface SEDiceCalReq {
  incomeDice: number;
  act: number;
}

export interface SEDiceCalResp {
  diceResult: DiceResultSet[];
}

export interface DiceResultSet {
  value: number[];
}

const baseSESkillCalReq: object = {
  incomeCard: undefined,
  feat: undefined,
  fromCli: "",
};

const baseSESkillCalResp: object = {
  resultVal: 0,
  effectResult: undefined,
};

const baseSEDiceCalReq: object = {
  incomeDice: 0,
  act: 0,
};

const baseSEDiceCalResp: object = {
  diceResult: undefined,
};

const baseDiceResultSet: object = {
  value: 0,
};

export const SESkillCalReq = {
  encode(message: SESkillCalReq, writer: Writer = Writer.create()): Writer {
    for (const v of message.incomeCard) {
      EventCard.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feat) {
      SkillSet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.fromCli);
    return writer;
  },
  decode(reader: Reader, length?: number): SESkillCalReq {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseSESkillCalReq) as SESkillCalReq;
    message.incomeCard = [];
    message.feat = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incomeCard.push(EventCard.decode(reader, reader.uint32()));
          break;
        case 2:
          message.feat.push(SkillSet.decode(reader, reader.uint32()));
          break;
        case 3:
          message.fromCli = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SESkillCalReq {
    const message = Object.create(baseSESkillCalReq) as SESkillCalReq;
    message.incomeCard = [];
    message.feat = [];
    if (object.incomeCard !== undefined && object.incomeCard !== null) {
      for (const e of object.incomeCard) {
        message.incomeCard.push(EventCard.fromJSON(e));
      }
    }
    if (object.feat !== undefined && object.feat !== null) {
      for (const e of object.feat) {
        message.feat.push(SkillSet.fromJSON(e));
      }
    }
    if (object.fromCli !== undefined && object.fromCli !== null) {
      message.fromCli = String(object.fromCli);
    } else {
      message.fromCli = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<SESkillCalReq>): SESkillCalReq {
    const message = Object.create(baseSESkillCalReq) as SESkillCalReq;
    message.incomeCard = [];
    message.feat = [];
    if (object.incomeCard !== undefined && object.incomeCard !== null) {
      for (const e of object.incomeCard) {
        message.incomeCard.push(EventCard.fromPartial(e));
      }
    }
    if (object.feat !== undefined && object.feat !== null) {
      for (const e of object.feat) {
        message.feat.push(SkillSet.fromPartial(e));
      }
    }
    if (object.fromCli !== undefined && object.fromCli !== null) {
      message.fromCli = object.fromCli;
    } else {
      message.fromCli = "";
    }
    return message;
  },
  toJSON(message: SESkillCalReq): unknown {
    const obj: any = {};
    if (message.incomeCard) {
      obj.incomeCard = message.incomeCard.map(e => e ? EventCard.toJSON(e) : undefined);
    } else {
      obj.incomeCard = [];
    }
    if (message.feat) {
      obj.feat = message.feat.map(e => e ? SkillSet.toJSON(e) : undefined);
    } else {
      obj.feat = [];
    }
    obj.fromCli = message.fromCli || "";
    return obj;
  },
};

export const SESkillCalResp = {
  encode(message: SESkillCalResp, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.resultVal);
    for (const v of message.effectResult) {
      EffectResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): SESkillCalResp {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseSESkillCalResp) as SESkillCalResp;
    message.effectResult = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resultVal = reader.int32();
          break;
        case 2:
          message.effectResult.push(EffectResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SESkillCalResp {
    const message = Object.create(baseSESkillCalResp) as SESkillCalResp;
    message.effectResult = [];
    if (object.resultVal !== undefined && object.resultVal !== null) {
      message.resultVal = Number(object.resultVal);
    } else {
      message.resultVal = 0;
    }
    if (object.effectResult !== undefined && object.effectResult !== null) {
      for (const e of object.effectResult) {
        message.effectResult.push(EffectResult.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SESkillCalResp>): SESkillCalResp {
    const message = Object.create(baseSESkillCalResp) as SESkillCalResp;
    message.effectResult = [];
    if (object.resultVal !== undefined && object.resultVal !== null) {
      message.resultVal = object.resultVal;
    } else {
      message.resultVal = 0;
    }
    if (object.effectResult !== undefined && object.effectResult !== null) {
      for (const e of object.effectResult) {
        message.effectResult.push(EffectResult.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: SESkillCalResp): unknown {
    const obj: any = {};
    obj.resultVal = message.resultVal || 0;
    if (message.effectResult) {
      obj.effectResult = message.effectResult.map(e => e ? EffectResult.toJSON(e) : undefined);
    } else {
      obj.effectResult = [];
    }
    return obj;
  },
};

export const SEDiceCalReq = {
  encode(message: SEDiceCalReq, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.incomeDice);
    writer.uint32(16).int32(message.act);
    return writer;
  },
  decode(reader: Reader, length?: number): SEDiceCalReq {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseSEDiceCalReq) as SEDiceCalReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incomeDice = reader.int32();
          break;
        case 2:
          message.act = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SEDiceCalReq {
    const message = Object.create(baseSEDiceCalReq) as SEDiceCalReq;
    if (object.incomeDice !== undefined && object.incomeDice !== null) {
      message.incomeDice = Number(object.incomeDice);
    } else {
      message.incomeDice = 0;
    }
    if (object.act !== undefined && object.act !== null) {
      message.act = Number(object.act);
    } else {
      message.act = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<SEDiceCalReq>): SEDiceCalReq {
    const message = Object.create(baseSEDiceCalReq) as SEDiceCalReq;
    if (object.incomeDice !== undefined && object.incomeDice !== null) {
      message.incomeDice = object.incomeDice;
    } else {
      message.incomeDice = 0;
    }
    if (object.act !== undefined && object.act !== null) {
      message.act = object.act;
    } else {
      message.act = 0;
    }
    return message;
  },
  toJSON(message: SEDiceCalReq): unknown {
    const obj: any = {};
    obj.incomeDice = message.incomeDice || 0;
    obj.act = message.act || 0;
    return obj;
  },
};

export const SEDiceCalResp = {
  encode(message: SEDiceCalResp, writer: Writer = Writer.create()): Writer {
    for (const v of message.diceResult) {
      DiceResultSet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): SEDiceCalResp {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseSEDiceCalResp) as SEDiceCalResp;
    message.diceResult = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diceResult.push(DiceResultSet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SEDiceCalResp {
    const message = Object.create(baseSEDiceCalResp) as SEDiceCalResp;
    message.diceResult = [];
    if (object.diceResult !== undefined && object.diceResult !== null) {
      for (const e of object.diceResult) {
        message.diceResult.push(DiceResultSet.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SEDiceCalResp>): SEDiceCalResp {
    const message = Object.create(baseSEDiceCalResp) as SEDiceCalResp;
    message.diceResult = [];
    if (object.diceResult !== undefined && object.diceResult !== null) {
      for (const e of object.diceResult) {
        message.diceResult.push(DiceResultSet.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: SEDiceCalResp): unknown {
    const obj: any = {};
    if (message.diceResult) {
      obj.diceResult = message.diceResult.map(e => e ? DiceResultSet.toJSON(e) : undefined);
    } else {
      obj.diceResult = [];
    }
    return obj;
  },
};

export const DiceResultSet = {
  encode(message: DiceResultSet, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).fork();
    for (const v of message.value) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(reader: Reader, length?: number): DiceResultSet {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseDiceResultSet) as DiceResultSet;
    message.value = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.value.push(reader.int32());
            }
          } else {
            message.value.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DiceResultSet {
    const message = Object.create(baseDiceResultSet) as DiceResultSet;
    message.value = [];
    if (object.value !== undefined && object.value !== null) {
      for (const e of object.value) {
        message.value.push(Number(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DiceResultSet>): DiceResultSet {
    const message = Object.create(baseDiceResultSet) as DiceResultSet;
    message.value = [];
    if (object.value !== undefined && object.value !== null) {
      for (const e of object.value) {
        message.value.push(e);
      }
    }
    return message;
  },
  toJSON(message: DiceResultSet): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map(e => e || 0);
    } else {
      obj.value = [];
    }
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