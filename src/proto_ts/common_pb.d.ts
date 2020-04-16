// package: ULZProto
// file: common.proto

import * as jspb from "google-protobuf";

export class ErrorMsg extends jspb.Message {
  getMsgInfo(): string;
  setMsgInfo(value: string): void;

  getMsgDesp(): string;
  setMsgDesp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorMsg): ErrorMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorMsg;
  static deserializeBinaryFromReader(message: ErrorMsg, reader: jspb.BinaryReader): ErrorMsg;
}

export namespace ErrorMsg {
  export type AsObject = {
    msgInfo: string,
    msgDesp: string,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

