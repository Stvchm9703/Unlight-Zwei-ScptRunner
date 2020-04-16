// package: ULZProto
// file: Data.proto

import * as jspb from "google-protobuf";
import * as EventHookPhase_pb from "./EventHookPhase_pb";
import DataPB from "./Data";
export class GameDataSet extends jspb.Message , DataPB.GameDataSet {
  getRoomKey(): string;
  setRoomKey(value: string): void;

  getHostId(): string;
  setHostId(value: string): void;

  getDuelId(): string;
  setDuelId(value: string): void;

  getGameTurn(): number;
  setGameTurn(value: number): void;

  clearHostCardDeckList(): void;
  getHostCardDeckList(): Array<CharCardSet>;
  setHostCardDeckList(value: Array<CharCardSet>): void;
  addHostCardDeck(value?: CharCardSet, index?: number): CharCardSet;

  clearDuelCardDeckList(): void;
  getDuelCardDeckList(): Array<CharCardSet>;
  setDuelCardDeckList(value: Array<CharCardSet>): void;
  addDuelCardDeck(value?: CharCardSet, index?: number): CharCardSet;

  getHostCurrCardKey(): number;
  setHostCurrCardKey(value: number): void;

  getDuelCurrCardKey(): number;
  setDuelCurrCardKey(value: number): void;

  clearHostEventCardDeckList(): void;
  getHostEventCardDeckList(): Array<EventCard>;
  setHostEventCardDeckList(value: Array<EventCard>): void;
  addHostEventCardDeck(value?: EventCard, index?: number): EventCard;

  clearDuelEventCardDeckList(): void;
  getDuelEventCardDeckList(): Array<EventCard>;
  setDuelEventCardDeckList(value: Array<EventCard>): void;
  addDuelEventCardDeck(value?: EventCard, index?: number): EventCard;

  getRange(): RangeTypeMap[keyof RangeTypeMap];
  setRange(value: RangeTypeMap[keyof RangeTypeMap]): void;

  getNvn(): number;
  setNvn(value: number): void;

  getFirstAttack(): PlayerSideMap[keyof PlayerSideMap];
  setFirstAttack(value: PlayerSideMap[keyof PlayerSideMap]): void;

  getCurrPhase(): PlayerSideMap[keyof PlayerSideMap];
  setCurrPhase(value: PlayerSideMap[keyof PlayerSideMap]): void;

  getEventPhase(): EventHookPhase_pb.EventHookPhaseMap[keyof EventHookPhase_pb.EventHookPhaseMap];
  setEventPhase(value: EventHookPhase_pb.EventHookPhaseMap[keyof EventHookPhase_pb.EventHookPhaseMap]): void;

  getHookType(): EventHookPhase_pb.EventHookTypeMap[keyof EventHookPhase_pb.EventHookTypeMap];
  setHookType(value: EventHookPhase_pb.EventHookTypeMap[keyof EventHookPhase_pb.EventHookTypeMap]): void;

  clearEffectCounterList(): void;
  getEffectCounterList(): Array<EffectResult>;
  setEffectCounterList(value: Array<EffectResult>): void;
  addEffectCounter(value?: EffectResult, index?: number): EffectResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameDataSet.AsObject;
  static toObject(includeInstance: boolean, msg: GameDataSet): GameDataSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GameDataSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameDataSet;
  static deserializeBinaryFromReader(message: GameDataSet, reader: jspb.BinaryReader): GameDataSet;
}

export namespace GameDataSet {
  export type AsObject = {
    roomKey: string,
    hostId: string,
    duelId: string,
    gameTurn: number,
    hostCardDeckList: Array<CharCardSet.AsObject>,
    duelCardDeckList: Array<CharCardSet.AsObject>,
    hostCurrCardKey: number,
    duelCurrCardKey: number,
    hostEventCardDeckList: Array<EventCard.AsObject>,
    duelEventCardDeckList: Array<EventCard.AsObject>,
    range: RangeTypeMap[keyof RangeTypeMap],
    nvn: number,
    firstAttack: PlayerSideMap[keyof PlayerSideMap],
    currPhase: PlayerSideMap[keyof PlayerSideMap],
    eventPhase: EventHookPhase_pb.EventHookPhaseMap[keyof EventHookPhase_pb.EventHookPhaseMap],
    hookType: EventHookPhase_pb.EventHookTypeMap[keyof EventHookPhase_pb.EventHookTypeMap],
    effectCounterList: Array<EffectResult.AsObject>,
  }
}

export class CharCardSet extends jspb.Message {
  getCharId(): number;
  setCharId(value: number): void;

  getCardId(): number;
  setCardId(value: number): void;

  getHpInst(): number;
  setHpInst(value: number): void;

  getApInst(): number;
  setApInst(value: number): void;

  getDpInst(): number;
  setDpInst(value: number): void;

  getHpOrig(): number;
  setHpOrig(value: number): void;

  getApOrig(): number;
  setApOrig(value: number): void;

  getDpOrig(): number;
  setDpOrig(value: number): void;

  getLevel(): number;
  setLevel(value: number): void;

  clearStatusInstList(): void;
  getStatusInstList(): Array<StatusSet>;
  setStatusInstList(value: Array<StatusSet>): void;
  addStatusInst(value?: StatusSet, index?: number): StatusSet;

  hasEquSet(): boolean;
  clearEquSet(): void;
  getEquSet(): CharCardEquSet | undefined;
  setEquSet(value?: CharCardEquSet): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharCardSet.AsObject;
  static toObject(includeInstance: boolean, msg: CharCardSet): CharCardSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CharCardSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharCardSet;
  static deserializeBinaryFromReader(message: CharCardSet, reader: jspb.BinaryReader): CharCardSet;
}

export namespace CharCardSet {
  export type AsObject = {
    charId: number,
    cardId: number,
    hpInst: number,
    apInst: number,
    dpInst: number,
    hpOrig: number,
    apOrig: number,
    dpOrig: number,
    level: number,
    statusInstList: Array<StatusSet.AsObject>,
    equSet?: CharCardEquSet.AsObject,
  }
}

export class CharCardEquSet extends jspb.Message {
  getEquId(): number;
  setEquId(value: number): void;

  getHp(): number;
  setHp(value: number): void;

  getAp(): number;
  setAp(value: number): void;

  getDp(): number;
  setDp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharCardEquSet.AsObject;
  static toObject(includeInstance: boolean, msg: CharCardEquSet): CharCardEquSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CharCardEquSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharCardEquSet;
  static deserializeBinaryFromReader(message: CharCardEquSet, reader: jspb.BinaryReader): CharCardEquSet;
}

export namespace CharCardEquSet {
  export type AsObject = {
    equId: number,
    hp: number,
    ap: number,
    dp: number,
  }
}

export class EventCard extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUpOption(): EventCardTypeMap[keyof EventCardTypeMap];
  setUpOption(value: EventCardTypeMap[keyof EventCardTypeMap]): void;

  getUpVal(): number;
  setUpVal(value: number): void;

  getDownOption(): EventCardTypeMap[keyof EventCardTypeMap];
  setDownOption(value: EventCardTypeMap[keyof EventCardTypeMap]): void;

  getDownVal(): number;
  setDownVal(value: number): void;

  getPosition(): EventCardPosMap[keyof EventCardPosMap];
  setPosition(value: EventCardPosMap[keyof EventCardPosMap]): void;

  getIsInvert(): boolean;
  setIsInvert(value: boolean): void;

  getFuncMount(): EventCardFuncMap[keyof EventCardFuncMap];
  setFuncMount(value: EventCardFuncMap[keyof EventCardFuncMap]): void;

  getMountVal(): number;
  setMountVal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventCard.AsObject;
  static toObject(includeInstance: boolean, msg: EventCard): EventCard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventCard;
  static deserializeBinaryFromReader(message: EventCard, reader: jspb.BinaryReader): EventCard;
}

export namespace EventCard {
  export type AsObject = {
    id: number,
    upOption: EventCardTypeMap[keyof EventCardTypeMap],
    upVal: number,
    downOption: EventCardTypeMap[keyof EventCardTypeMap],
    downVal: number,
    position: EventCardPosMap[keyof EventCardPosMap],
    isInvert: boolean,
    funcMount: EventCardFuncMap[keyof EventCardFuncMap],
    mountVal: number,
  }
}

export class SkillSet extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getFeatNo(): number;
  setFeatNo(value: number): void;

  getPow(): number;
  setPow(value: number): void;

  getCondString(): string;
  setCondString(value: string): void;

  clearCondCardList(): void;
  getCondCardList(): Array<SkillCardCond>;
  setCondCardList(value: Array<SkillCardCond>): void;
  addCondCard(value?: SkillCardCond, index?: number): SkillCardCond;

  clearCondRangeList(): void;
  getCondRangeList(): Array<RangeTypeMap[keyof RangeTypeMap]>;
  setCondRangeList(value: Array<RangeTypeMap[keyof RangeTypeMap]>): void;
  addCondRange(value: RangeTypeMap[keyof RangeTypeMap], index?: number): RangeTypeMap[keyof RangeTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillSet.AsObject;
  static toObject(includeInstance: boolean, msg: SkillSet): SkillSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SkillSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillSet;
  static deserializeBinaryFromReader(message: SkillSet, reader: jspb.BinaryReader): SkillSet;
}

export namespace SkillSet {
  export type AsObject = {
    id: number,
    featNo: number,
    pow: number,
    condString: string,
    condCardList: Array<SkillCardCond.AsObject>,
    condRangeList: Array<RangeTypeMap[keyof RangeTypeMap]>,
  }
}

export class SkillCardCond extends jspb.Message {
  getType(): EventCardTypeMap[keyof EventCardTypeMap];
  setType(value: EventCardTypeMap[keyof EventCardTypeMap]): void;

  getVal(): number;
  setVal(value: number): void;

  getCompare(): SignEqMap[keyof SignEqMap];
  setCompare(value: SignEqMap[keyof SignEqMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillCardCond.AsObject;
  static toObject(includeInstance: boolean, msg: SkillCardCond): SkillCardCond.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SkillCardCond, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillCardCond;
  static deserializeBinaryFromReader(message: SkillCardCond, reader: jspb.BinaryReader): SkillCardCond;
}

export namespace SkillCardCond {
  export type AsObject = {
    type: EventCardTypeMap[keyof EventCardTypeMap],
    val: number,
    compare: SignEqMap[keyof SignEqMap],
  }
}

export class StatusSet extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getStatusId(): string;
  setStatusId(value: string): void;

  getRemainCd(): number;
  setRemainCd(value: number): void;

  getFeatNo(): number;
  setFeatNo(value: number): void;

  getPow(): number;
  setPow(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusSet.AsObject;
  static toObject(includeInstance: boolean, msg: StatusSet): StatusSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusSet;
  static deserializeBinaryFromReader(message: StatusSet, reader: jspb.BinaryReader): StatusSet;
}

export namespace StatusSet {
  export type AsObject = {
    id: number,
    statusId: string,
    remainCd: number,
    featNo: number,
    pow: number,
  }
}

export class EffectResult extends jspb.Message {
  getTarCard(): number;
  setTarCard(value: number): void;

  getTarSide(): PlayerSideMap[keyof PlayerSideMap];
  setTarSide(value: PlayerSideMap[keyof PlayerSideMap]): void;

  hasTriggerTime(): boolean;
  clearTriggerTime(): void;
  getTriggerTime(): EffectTiming | undefined;
  setTriggerTime(value?: EffectTiming): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): EffectTiming | undefined;
  setEndTime(value?: EffectTiming): void;

  getEfOption(): EffectOptionMap[keyof EffectOptionMap];
  setEfOption(value: EffectOptionMap[keyof EffectOptionMap]): void;

  getHp(): number;
  setHp(value: number): void;

  getAp(): number;
  setAp(value: number): void;

  getDp(): number;
  setDp(value: number): void;

  getMp(): number;
  setMp(value: number): void;

  getDisableMove(): boolean;
  setDisableMove(value: boolean): void;

  getDisableAtk(): boolean;
  setDisableAtk(value: boolean): void;

  getDisableDef(): boolean;
  setDisableDef(value: boolean): void;

  getDisableDraw(): boolean;
  setDisableDraw(value: boolean): void;

  getDisableChange(): boolean;
  setDisableChange(value: boolean): void;

  getBindingFunc(): string;
  setBindingFunc(value: string): void;

  getRemainCd(): number;
  setRemainCd(value: number): void;

  getAssignFrom(): string;
  setAssignFrom(value: string): void;

  getSkillId(): number;
  setSkillId(value: number): void;

  getStatusId(): number;
  setStatusId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EffectResult.AsObject;
  static toObject(includeInstance: boolean, msg: EffectResult): EffectResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EffectResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EffectResult;
  static deserializeBinaryFromReader(message: EffectResult, reader: jspb.BinaryReader): EffectResult;
}

export namespace EffectResult {
  export type AsObject = {
    tarCard: number,
    tarSide: PlayerSideMap[keyof PlayerSideMap],
    triggerTime?: EffectTiming.AsObject,
    endTime?: EffectTiming.AsObject,
    efOption: EffectOptionMap[keyof EffectOptionMap],
    hp: number,
    ap: number,
    dp: number,
    mp: number,
    disableMove: boolean,
    disableAtk: boolean,
    disableDef: boolean,
    disableDraw: boolean,
    disableChange: boolean,
    bindingFunc: string,
    remainCd: number,
    assignFrom: string,
    skillId: number,
    statusId: number,
  }
}

export class EffectTiming extends jspb.Message {
  getEventPhase(): EventHookPhase_pb.EventHookPhaseMap[keyof EventHookPhase_pb.EventHookPhaseMap];
  setEventPhase(value: EventHookPhase_pb.EventHookPhaseMap[keyof EventHookPhase_pb.EventHookPhaseMap]): void;

  getHookType(): EventHookPhase_pb.EventHookTypeMap[keyof EventHookPhase_pb.EventHookTypeMap];
  setHookType(value: EventHookPhase_pb.EventHookTypeMap[keyof EventHookPhase_pb.EventHookTypeMap]): void;

  getSubCount(): number;
  setSubCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EffectTiming.AsObject;
  static toObject(includeInstance: boolean, msg: EffectTiming): EffectTiming.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EffectTiming, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EffectTiming;
  static deserializeBinaryFromReader(message: EffectTiming, reader: jspb.BinaryReader): EffectTiming;
}

export namespace EffectTiming {
  export type AsObject = {
    eventPhase: EventHookPhase_pb.EventHookPhaseMap[keyof EventHookPhase_pb.EventHookPhaseMap],
    hookType: EventHookPhase_pb.EventHookTypeMap[keyof EventHookPhase_pb.EventHookTypeMap],
    subCount: number,
  }
}

export interface PlayerSideMap {
  HOST: 0;
  DUELER: 1;
}

export const PlayerSide: PlayerSideMap;

export interface EventCardTypeMap {
  NULL: 0;
  ATTACK: 1;
  DEFENCE: 2;
  GUN: 3;
  MOVE: 4;
  STAR: 5;
}

export const EventCardType: EventCardTypeMap;

export interface EventCardPosMap {
  BLOCK: 0;
  INSIDE: 1;
  OUTSIDE: 2;
  DESTROY: 3;
}

export const EventCardPos: EventCardPosMap;

export interface RangeTypeMap {
  SHORT: 0;
  MIDDLE: 1;
  LONG: 2;
}

export const RangeType: RangeTypeMap;

export interface MovePhaseOptMap {
  NO_MOVE: 0;
  FORWARD: 1;
  BACKWARD: 2;
  STAY: 3;
  CHANGE: 4;
}

export const MovePhaseOpt: MovePhaseOptMap;

export interface EventCardFuncMap {
  NULL: 0;
  OCCUR_CHANCE_EVENT: 1;
  OCCUR_HEAL_EVENT: 2;
  OCCUR_CURE_EVENT: 3;
  OCCUR_QUICK_EVENT: 4;
  OCCUR_CURSE_EVENT: 5;
  OCCUR_CHALICE_EVENT: 6;
  OCCUR_POISON_EVENT: 7;
  OCCUR_DAMAGE_EVENT: 8;
}

export const EventCardFunc: EventCardFuncMap;

export interface SignEqMap {
  EQUAL: 0;
  GREATER: 1;
  LESSER: 2;
  ANY: 3;
}

export const SignEq: SignEqMap;

export interface EffectOptionMap {
  STATUS_ADDITION: 0;
  INSTANCE_CHANGE: 1;
  STATUS_FIXVALUE: 2;
  HARD_INSTANCE_CHANGE: 3;
}

export const EffectOption: EffectOptionMap;

