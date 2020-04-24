// package: ULZProto
// file: message.proto

import * as jspb from "google-protobuf";
import * as Data_pb from "./Data_pb";

export class SESkillCalReq extends jspb.Message {
  clearIncomeCardList(): void;
  getIncomeCardList(): Array<Data_pb.EventCard>;
  setIncomeCardList(value: Array<Data_pb.EventCard>): void;
  addIncomeCard(value?: Data_pb.EventCard, index?: number): Data_pb.EventCard;

  clearFeatList(): void;
  getFeatList(): Array<Data_pb.SkillSet>;
  setFeatList(value: Array<Data_pb.SkillSet>): void;
  addFeat(value?: Data_pb.SkillSet, index?: number): Data_pb.SkillSet;

  getFromCli(): string;
  setFromCli(value: string): void;

  getTargType(): Data_pb.EventCardTypeMap[keyof Data_pb.EventCardTypeMap];
  setTargType(value: Data_pb.EventCardTypeMap[keyof Data_pb.EventCardTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SESkillCalReq.AsObject;
  static toObject(includeInstance: boolean, msg: SESkillCalReq): SESkillCalReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SESkillCalReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SESkillCalReq;
  static deserializeBinaryFromReader(message: SESkillCalReq, reader: jspb.BinaryReader): SESkillCalReq;
}

export namespace SESkillCalReq {
  export type AsObject = {
    incomeCardList: Array<Data_pb.EventCard.AsObject>,
    featList: Array<Data_pb.SkillSet.AsObject>,
    fromCli: string,
    targType: Data_pb.EventCardTypeMap[keyof Data_pb.EventCardTypeMap],
  }
}

export class SESkillCalResp extends jspb.Message {
  getResultVal(): number;
  setResultVal(value: number): void;

  clearEffectResultList(): void;
  getEffectResultList(): Array<Data_pb.EffectResult>;
  setEffectResultList(value: Array<Data_pb.EffectResult>): void;
  addEffectResult(value?: Data_pb.EffectResult, index?: number): Data_pb.EffectResult;

  getTargType(): Data_pb.EventCardTypeMap[keyof Data_pb.EventCardTypeMap];
  setTargType(value: Data_pb.EventCardTypeMap[keyof Data_pb.EventCardTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SESkillCalResp.AsObject;
  static toObject(includeInstance: boolean, msg: SESkillCalResp): SESkillCalResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SESkillCalResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SESkillCalResp;
  static deserializeBinaryFromReader(message: SESkillCalResp, reader: jspb.BinaryReader): SESkillCalResp;
}

export namespace SESkillCalResp {
  export type AsObject = {
    resultVal: number,
    effectResultList: Array<Data_pb.EffectResult.AsObject>,
    targType: Data_pb.EventCardTypeMap[keyof Data_pb.EventCardTypeMap],
  }
}

export class SEDiceCalReq extends jspb.Message {
  getIncomeDice(): number;
  setIncomeDice(value: number): void;

  getAct(): number;
  setAct(value: number): void;

  clearEffectResultList(): void;
  getEffectResultList(): Array<Data_pb.EffectResult>;
  setEffectResultList(value: Array<Data_pb.EffectResult>): void;
  addEffectResult(value?: Data_pb.EffectResult, index?: number): Data_pb.EffectResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SEDiceCalReq.AsObject;
  static toObject(includeInstance: boolean, msg: SEDiceCalReq): SEDiceCalReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SEDiceCalReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SEDiceCalReq;
  static deserializeBinaryFromReader(message: SEDiceCalReq, reader: jspb.BinaryReader): SEDiceCalReq;
}

export namespace SEDiceCalReq {
  export type AsObject = {
    incomeDice: number,
    act: number,
    effectResultList: Array<Data_pb.EffectResult.AsObject>,
  }
}

export class SEDiceCalResp extends jspb.Message {
  clearDiceResultList(): void;
  getDiceResultList(): Array<DiceResultSet>;
  setDiceResultList(value: Array<DiceResultSet>): void;
  addDiceResult(value?: DiceResultSet, index?: number): DiceResultSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SEDiceCalResp.AsObject;
  static toObject(includeInstance: boolean, msg: SEDiceCalResp): SEDiceCalResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SEDiceCalResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SEDiceCalResp;
  static deserializeBinaryFromReader(message: SEDiceCalResp, reader: jspb.BinaryReader): SEDiceCalResp;
}

export namespace SEDiceCalResp {
  export type AsObject = {
    diceResultList: Array<DiceResultSet.AsObject>,
  }
}

export class DiceResultSet extends jspb.Message {
  clearValueList(): void;
  getValueList(): Array<number>;
  setValueList(value: Array<number>): void;
  addValue(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiceResultSet.AsObject;
  static toObject(includeInstance: boolean, msg: DiceResultSet): DiceResultSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiceResultSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiceResultSet;
  static deserializeBinaryFromReader(message: DiceResultSet, reader: jspb.BinaryReader): DiceResultSet;
}

export namespace DiceResultSet {
  export type AsObject = {
    valueList: Array<number>,
  }
}

export class SEEffectCalReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasFromTime(): boolean;
  clearFromTime(): void;
  getFromTime(): Data_pb.EffectTiming | undefined;
  setFromTime(value?: Data_pb.EffectTiming): void;

  hasToTime(): boolean;
  clearToTime(): void;
  getToTime(): Data_pb.EffectTiming | undefined;
  setToTime(value?: Data_pb.EffectTiming): void;

  hasGamesetInstant(): boolean;
  clearGamesetInstant(): void;
  getGamesetInstant(): Data_pb.GameDataSet | undefined;
  setGamesetInstant(value?: Data_pb.GameDataSet): void;

  getFromCli(): string;
  setFromCli(value: string): void;

  getRemark(): string;
  setRemark(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SEEffectCalReq.AsObject;
  static toObject(includeInstance: boolean, msg: SEEffectCalReq): SEEffectCalReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SEEffectCalReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SEEffectCalReq;
  static deserializeBinaryFromReader(message: SEEffectCalReq, reader: jspb.BinaryReader): SEEffectCalReq;
}

export namespace SEEffectCalReq {
  export type AsObject = {
    id: string,
    fromTime?: Data_pb.EffectTiming.AsObject,
    toTime?: Data_pb.EffectTiming.AsObject,
    gamesetInstant?: Data_pb.GameDataSet.AsObject,
    fromCli: string,
    remark: string,
  }
}

export class SEEffectCalResp extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getFromCli(): string;
  setFromCli(value: string): void;

  hasGamesetResult(): boolean;
  clearGamesetResult(): void;
  getGamesetResult(): Data_pb.GameDataSet | undefined;
  setGamesetResult(value?: Data_pb.GameDataSet): void;

  clearResultInfoList(): void;
  getResultInfoList(): Array<string>;
  setResultInfoList(value: Array<string>): void;
  addResultInfo(value: string, index?: number): string;

  hasFromTime(): boolean;
  clearFromTime(): void;
  getFromTime(): Data_pb.EffectTiming | undefined;
  setFromTime(value?: Data_pb.EffectTiming): void;

  hasToTime(): boolean;
  clearToTime(): void;
  getToTime(): Data_pb.EffectTiming | undefined;
  setToTime(value?: Data_pb.EffectTiming): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SEEffectCalResp.AsObject;
  static toObject(includeInstance: boolean, msg: SEEffectCalResp): SEEffectCalResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SEEffectCalResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SEEffectCalResp;
  static deserializeBinaryFromReader(message: SEEffectCalResp, reader: jspb.BinaryReader): SEEffectCalResp;
}

export namespace SEEffectCalResp {
  export type AsObject = {
    id: string,
    fromCli: string,
    gamesetResult?: Data_pb.GameDataSet.AsObject,
    resultInfoList: Array<string>,
    fromTime?: Data_pb.EffectTiming.AsObject,
    toTime?: Data_pb.EffectTiming.AsObject,
  }
}

