// package: ULZProto
// file: StoreMod.proto

import * as jspb from "google-protobuf";
import * as Data_pb from "./Data_pb";
import * as EventHookPhase_pb from "./EventHookPhase_pb";

export class MovePhaseSnapMod extends jspb.Message {
  getTurns(): number;
  setTurns(value: number): void;

  getHostVal(): number;
  setHostVal(value: number): void;

  getDuelVal(): number;
  setDuelVal(value: number): void;

  getHostOpt(): Data_pb.MovePhaseOptMap[keyof Data_pb.MovePhaseOptMap];
  setHostOpt(value: Data_pb.MovePhaseOptMap[keyof Data_pb.MovePhaseOptMap]): void;

  getDuelOpt(): Data_pb.MovePhaseOptMap[keyof Data_pb.MovePhaseOptMap];
  setDuelOpt(value: Data_pb.MovePhaseOptMap[keyof Data_pb.MovePhaseOptMap]): void;

  clearHostCardList(): void;
  getHostCardList(): Array<Data_pb.EventCard>;
  setHostCardList(value: Array<Data_pb.EventCard>): void;
  addHostCard(value?: Data_pb.EventCard, index?: number): Data_pb.EventCard;

  clearDuelCardList(): void;
  getDuelCardList(): Array<Data_pb.EventCard>;
  setDuelCardList(value: Array<Data_pb.EventCard>): void;
  addDuelCard(value?: Data_pb.EventCard, index?: number): Data_pb.EventCard;

  clearHostTrigSklList(): void;
  getHostTrigSklList(): Array<Data_pb.SkillSet>;
  setHostTrigSklList(value: Array<Data_pb.SkillSet>): void;
  addHostTrigSkl(value?: Data_pb.SkillSet, index?: number): Data_pb.SkillSet;

  clearDuelTrigSklList(): void;
  getDuelTrigSklList(): Array<Data_pb.SkillSet>;
  setDuelTrigSklList(value: Array<Data_pb.SkillSet>): void;
  addDuelTrigSkl(value?: Data_pb.SkillSet, index?: number): Data_pb.SkillSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MovePhaseSnapMod.AsObject;
  static toObject(includeInstance: boolean, msg: MovePhaseSnapMod): MovePhaseSnapMod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MovePhaseSnapMod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MovePhaseSnapMod;
  static deserializeBinaryFromReader(message: MovePhaseSnapMod, reader: jspb.BinaryReader): MovePhaseSnapMod;
}

export namespace MovePhaseSnapMod {
  export type AsObject = {
    turns: number,
    hostVal: number,
    duelVal: number,
    hostOpt: Data_pb.MovePhaseOptMap[keyof Data_pb.MovePhaseOptMap],
    duelOpt: Data_pb.MovePhaseOptMap[keyof Data_pb.MovePhaseOptMap],
    hostCardList: Array<Data_pb.EventCard.AsObject>,
    duelCardList: Array<Data_pb.EventCard.AsObject>,
    hostTrigSklList: Array<Data_pb.SkillSet.AsObject>,
    duelTrigSklList: Array<Data_pb.SkillSet.AsObject>,
  }
}

export class ADPhaseSnapMod extends jspb.Message {
  getTurns(): number;
  setTurns(value: number): void;

  getFirstAttack(): Data_pb.PlayerSideMap[keyof Data_pb.PlayerSideMap];
  setFirstAttack(value: Data_pb.PlayerSideMap[keyof Data_pb.PlayerSideMap]): void;

  getCurrAttacker(): Data_pb.PlayerSideMap[keyof Data_pb.PlayerSideMap];
  setCurrAttacker(value: Data_pb.PlayerSideMap[keyof Data_pb.PlayerSideMap]): void;

  getEventPhase(): EventHookPhase_pb.EventHookPhaseMap[keyof EventHookPhase_pb.EventHookPhaseMap];
  setEventPhase(value: EventHookPhase_pb.EventHookPhaseMap[keyof EventHookPhase_pb.EventHookPhaseMap]): void;

  getAttackVal(): number;
  setAttackVal(value: number): void;

  getDefenceVal(): number;
  setDefenceVal(value: number): void;

  clearAttackCardList(): void;
  getAttackCardList(): Array<Data_pb.EventCard>;
  setAttackCardList(value: Array<Data_pb.EventCard>): void;
  addAttackCard(value?: Data_pb.EventCard, index?: number): Data_pb.EventCard;

  clearDefenceCardList(): void;
  getDefenceCardList(): Array<Data_pb.EventCard>;
  setDefenceCardList(value: Array<Data_pb.EventCard>): void;
  addDefenceCard(value?: Data_pb.EventCard, index?: number): Data_pb.EventCard;

  clearAttackTrigSklList(): void;
  getAttackTrigSklList(): Array<Data_pb.SkillSet>;
  setAttackTrigSklList(value: Array<Data_pb.SkillSet>): void;
  addAttackTrigSkl(value?: Data_pb.SkillSet, index?: number): Data_pb.SkillSet;

  clearDefenceTrigSklList(): void;
  getDefenceTrigSklList(): Array<Data_pb.SkillSet>;
  setDefenceTrigSklList(value: Array<Data_pb.SkillSet>): void;
  addDefenceTrigSkl(value?: Data_pb.SkillSet, index?: number): Data_pb.SkillSet;

  getIsProcessed(): boolean;
  setIsProcessed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ADPhaseSnapMod.AsObject;
  static toObject(includeInstance: boolean, msg: ADPhaseSnapMod): ADPhaseSnapMod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ADPhaseSnapMod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ADPhaseSnapMod;
  static deserializeBinaryFromReader(message: ADPhaseSnapMod, reader: jspb.BinaryReader): ADPhaseSnapMod;
}

export namespace ADPhaseSnapMod {
  export type AsObject = {
    turns: number,
    firstAttack: Data_pb.PlayerSideMap[keyof Data_pb.PlayerSideMap],
    currAttacker: Data_pb.PlayerSideMap[keyof Data_pb.PlayerSideMap],
    eventPhase: EventHookPhase_pb.EventHookPhaseMap[keyof EventHookPhase_pb.EventHookPhaseMap],
    attackVal: number,
    defenceVal: number,
    attackCardList: Array<Data_pb.EventCard.AsObject>,
    defenceCardList: Array<Data_pb.EventCard.AsObject>,
    attackTrigSklList: Array<Data_pb.SkillSet.AsObject>,
    defenceTrigSklList: Array<Data_pb.SkillSet.AsObject>,
    isProcessed: boolean,
  }
}

export class EffectNodeSnapMod extends jspb.Message {
  getTurns(): number;
  setTurns(value: number): void;

  clearPendingEfList(): void;
  getPendingEfList(): Array<Data_pb.EffectResult>;
  setPendingEfList(value: Array<Data_pb.EffectResult>): void;
  addPendingEf(value?: Data_pb.EffectResult, index?: number): Data_pb.EffectResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EffectNodeSnapMod.AsObject;
  static toObject(includeInstance: boolean, msg: EffectNodeSnapMod): EffectNodeSnapMod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EffectNodeSnapMod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EffectNodeSnapMod;
  static deserializeBinaryFromReader(message: EffectNodeSnapMod, reader: jspb.BinaryReader): EffectNodeSnapMod;
}

export namespace EffectNodeSnapMod {
  export type AsObject = {
    turns: number,
    pendingEfList: Array<Data_pb.EffectResult.AsObject>,
  }
}

export class PhaseSnapMod extends jspb.Message {
  getTurns(): number;
  setTurns(value: number): void;

  getEventPhase(): EventHookPhase_pb.EventHookPhaseMap[keyof EventHookPhase_pb.EventHookPhaseMap];
  setEventPhase(value: EventHookPhase_pb.EventHookPhaseMap[keyof EventHookPhase_pb.EventHookPhaseMap]): void;

  getHookType(): EventHookPhase_pb.EventHookTypeMap[keyof EventHookPhase_pb.EventHookTypeMap];
  setHookType(value: EventHookPhase_pb.EventHookTypeMap[keyof EventHookPhase_pb.EventHookTypeMap]): void;

  getIsHostReady(): boolean;
  setIsHostReady(value: boolean): void;

  getIsDuelReady(): boolean;
  setIsDuelReady(value: boolean): void;

  getFirstAttack(): Data_pb.PlayerSideMap[keyof Data_pb.PlayerSideMap];
  setFirstAttack(value: Data_pb.PlayerSideMap[keyof Data_pb.PlayerSideMap]): void;

  getCurrAttack(): Data_pb.PlayerSideMap[keyof Data_pb.PlayerSideMap];
  setCurrAttack(value: Data_pb.PlayerSideMap[keyof Data_pb.PlayerSideMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhaseSnapMod.AsObject;
  static toObject(includeInstance: boolean, msg: PhaseSnapMod): PhaseSnapMod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhaseSnapMod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhaseSnapMod;
  static deserializeBinaryFromReader(message: PhaseSnapMod, reader: jspb.BinaryReader): PhaseSnapMod;
}

export namespace PhaseSnapMod {
  export type AsObject = {
    turns: number,
    eventPhase: EventHookPhase_pb.EventHookPhaseMap[keyof EventHookPhase_pb.EventHookPhaseMap],
    hookType: EventHookPhase_pb.EventHookTypeMap[keyof EventHookPhase_pb.EventHookTypeMap],
    isHostReady: boolean,
    isDuelReady: boolean,
    firstAttack: Data_pb.PlayerSideMap[keyof Data_pb.PlayerSideMap],
    currAttack: Data_pb.PlayerSideMap[keyof Data_pb.PlayerSideMap],
  }
}

