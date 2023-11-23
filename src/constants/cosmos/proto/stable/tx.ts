/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "core.stable.v1beta1";

export const typeUrlMsgMint = "/core.stable.v1beta1.MsgMint";
export const typeUrlMsgBurn = "/core.stable.v1beta1.MsgBurn";

export interface MsgMint {
  creator: string;
  amountIn: string;
  denomOut: string;
}

export interface MsgMintResponse {
  creator: string;
  amountIn: string;
  amountOut: string;
}

export interface MsgBurn {
  creator: string;
  amountIn: string;
  denomOut: string;
}

export interface MsgBurnResponse {
  creator: string;
  amountIn: string;
  amountOut: string;
}

function createBaseMsgMint(): MsgMint {
  return { creator: "", amountIn: "", denomOut: "" };
}

export const MsgMint = {
  encode(message: MsgMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    if (message.denomOut !== "") {
      writer.uint32(26).string(message.denomOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountIn = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.denomOut = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgMint {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      denomOut: isSet(object.denomOut) ? String(object.denomOut) : "",
    };
  },

  toJSON(message: MsgMint): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.amountIn !== "") {
      obj.amountIn = message.amountIn;
    }
    if (message.denomOut !== "") {
      obj.denomOut = message.denomOut;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgMint>, I>>(base?: I): MsgMint {
    return MsgMint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgMint>, I>>(object: I): MsgMint {
    const message = createBaseMsgMint();
    message.creator = object.creator ?? "";
    message.amountIn = object.amountIn ?? "";
    message.denomOut = object.denomOut ?? "";
    return message;
  },
};

function createBaseMsgMintResponse(): MsgMintResponse {
  return { creator: "", amountIn: "", amountOut: "" };
}

export const MsgMintResponse = {
  encode(message: MsgMintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    if (message.amountOut !== "") {
      writer.uint32(26).string(message.amountOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountIn = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amountOut = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgMintResponse {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
    };
  },

  toJSON(message: MsgMintResponse): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.amountIn !== "") {
      obj.amountIn = message.amountIn;
    }
    if (message.amountOut !== "") {
      obj.amountOut = message.amountOut;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgMintResponse>, I>>(base?: I): MsgMintResponse {
    return MsgMintResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgMintResponse>, I>>(object: I): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    message.creator = object.creator ?? "";
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
    return message;
  },
};

function createBaseMsgBurn(): MsgBurn {
  return { creator: "", amountIn: "", denomOut: "" };
}

export const MsgBurn = {
  encode(message: MsgBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    if (message.denomOut !== "") {
      writer.uint32(26).string(message.denomOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountIn = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.denomOut = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgBurn {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      denomOut: isSet(object.denomOut) ? String(object.denomOut) : "",
    };
  },

  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.amountIn !== "") {
      obj.amountIn = message.amountIn;
    }
    if (message.denomOut !== "") {
      obj.denomOut = message.denomOut;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBurn>, I>>(base?: I): MsgBurn {
    return MsgBurn.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgBurn>, I>>(object: I): MsgBurn {
    const message = createBaseMsgBurn();
    message.creator = object.creator ?? "";
    message.amountIn = object.amountIn ?? "";
    message.denomOut = object.denomOut ?? "";
    return message;
  },
};

function createBaseMsgBurnResponse(): MsgBurnResponse {
  return { creator: "", amountIn: "", amountOut: "" };
}

export const MsgBurnResponse = {
  encode(message: MsgBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    if (message.amountOut !== "") {
      writer.uint32(26).string(message.amountOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountIn = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amountOut = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgBurnResponse {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
    };
  },

  toJSON(message: MsgBurnResponse): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.amountIn !== "") {
      obj.amountIn = message.amountIn;
    }
    if (message.amountOut !== "") {
      obj.amountOut = message.amountOut;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBurnResponse>, I>>(base?: I): MsgBurnResponse {
    return MsgBurnResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgBurnResponse>, I>>(object: I): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    message.creator = object.creator ?? "";
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Mint(request: MsgMint): Promise<MsgMintResponse>;
  Burn(request: MsgBurn): Promise<MsgBurnResponse>;
}

export const MsgServiceName = "core.stable.v1beta1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.Mint = this.Mint.bind(this);
    this.Burn = this.Burn.bind(this);
  }
  Mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request(this.service, "Mint", data);
    return promise.then((data) => MsgMintResponse.decode(_m0.Reader.create(data)));
  }

  Burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request(this.service, "Burn", data);
    return promise.then((data) => MsgBurnResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
