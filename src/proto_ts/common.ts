/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  ----------------------------------------------------
 *  ANCHOR: common.proto
 */
export interface ErrorMsg {
  msgInfo: string;
  msgDesp: string;
}

export interface Empty {
}

const baseErrorMsg: object = {
  msgInfo: "",
  msgDesp: "",
};

const baseEmpty: object = {
};

export const ErrorMsg = {
  encode(message: ErrorMsg, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.msgInfo);
    writer.uint32(18).string(message.msgDesp);
    return writer;
  },
  decode(reader: Reader, length?: number): ErrorMsg {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseErrorMsg) as ErrorMsg;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgInfo = reader.string();
          break;
        case 2:
          message.msgDesp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ErrorMsg {
    const message = Object.create(baseErrorMsg) as ErrorMsg;
    if (object.msgInfo !== undefined && object.msgInfo !== null) {
      message.msgInfo = String(object.msgInfo);
    } else {
      message.msgInfo = "";
    }
    if (object.msgDesp !== undefined && object.msgDesp !== null) {
      message.msgDesp = String(object.msgDesp);
    } else {
      message.msgDesp = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<ErrorMsg>): ErrorMsg {
    const message = Object.create(baseErrorMsg) as ErrorMsg;
    if (object.msgInfo !== undefined && object.msgInfo !== null) {
      message.msgInfo = object.msgInfo;
    } else {
      message.msgInfo = "";
    }
    if (object.msgDesp !== undefined && object.msgDesp !== null) {
      message.msgDesp = object.msgDesp;
    } else {
      message.msgDesp = "";
    }
    return message;
  },
  toJSON(message: ErrorMsg): unknown {
    const obj: any = {};
    obj.msgInfo = message.msgInfo || "";
    obj.msgDesp = message.msgDesp || "";
    return obj;
  },
};

export const Empty = {
  encode(_: Empty, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(reader: Reader, length?: number): Empty {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseEmpty) as Empty;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): Empty {
    const message = Object.create(baseEmpty) as Empty;
    return message;
  },
  fromPartial(_: DeepPartial<Empty>): Empty {
    const message = Object.create(baseEmpty) as Empty;
    return message;
  },
  toJSON(_: Empty): unknown {
    const obj: any = {};
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