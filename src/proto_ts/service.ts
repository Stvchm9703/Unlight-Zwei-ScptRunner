/* eslint-disable */
import { SESkillCalReq, SESkillCalResp, SEDiceCalReq, SEDiceCalResp } from './message';
import { Reader } from 'protobufjs/minimal';


/**
 *  ANCHOR: service-func for SkillEffectService
 *  SECTION: service.proto
 */
export interface SkillEffectService {

  /**
   *   Basic Server Function
   */
  SkillCalculate(request: SESkillCalReq): Promise<SESkillCalResp>;

  /**
   *  rpc EffectCalculate     (SEEffectCalReq)            returns (SEEffectCalResp);
   */
  DiceCalculate(request: SEDiceCalReq): Promise<SEDiceCalResp>;

}

export class SkillEffectServiceClientImpl implements SkillEffectService {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  SkillCalculate(request: SESkillCalReq): Promise<SESkillCalResp> {
    const data = SESkillCalReq.encode(request).finish();
    const promise = this.rpc.request("ULZProto.SkillEffectService", "SkillCalculate", data);
    return promise.then(data => SESkillCalResp.decode(new Reader(data)));
  }

  DiceCalculate(request: SEDiceCalReq): Promise<SEDiceCalResp> {
    const data = SEDiceCalReq.encode(request).finish();
    const promise = this.rpc.request("ULZProto.SkillEffectService", "DiceCalculate", data);
    return promise.then(data => SEDiceCalResp.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}
