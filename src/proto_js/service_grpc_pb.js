// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var message_pb = require('./message_pb.js');
var common_pb = require('./common_pb.js');
var Data_pb = require('./Data_pb.js');

function serialize_ULZProto_Empty(arg) {
  if (!(arg instanceof common_pb.Empty)) {
    throw new Error('Expected argument of type ULZProto.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_Empty(buffer_arg) {
  return common_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ULZProto_GDADConfirmReq(arg) {
  if (!(arg instanceof message_pb.GDADConfirmReq)) {
    throw new Error('Expected argument of type ULZProto.GDADConfirmReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_GDADConfirmReq(buffer_arg) {
  return message_pb.GDADConfirmReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ULZProto_GDADDiceResult(arg) {
  if (!(arg instanceof message_pb.GDADDiceResult)) {
    throw new Error('Expected argument of type ULZProto.GDADDiceResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_GDADDiceResult(buffer_arg) {
  return message_pb.GDADDiceResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ULZProto_GDADResultResp(arg) {
  if (!(arg instanceof message_pb.GDADResultResp)) {
    throw new Error('Expected argument of type ULZProto.GDADResultResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_GDADResultResp(buffer_arg) {
  return message_pb.GDADResultResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ULZProto_GDBroadcastResp(arg) {
  if (!(arg instanceof message_pb.GDBroadcastResp)) {
    throw new Error('Expected argument of type ULZProto.GDBroadcastResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_GDBroadcastResp(buffer_arg) {
  return message_pb.GDBroadcastResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ULZProto_GDChangeConfirmReq(arg) {
  if (!(arg instanceof message_pb.GDChangeConfirmReq)) {
    throw new Error('Expected argument of type ULZProto.GDChangeConfirmReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_GDChangeConfirmReq(buffer_arg) {
  return message_pb.GDChangeConfirmReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ULZProto_GDCreateReq(arg) {
  if (!(arg instanceof message_pb.GDCreateReq)) {
    throw new Error('Expected argument of type ULZProto.GDCreateReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_GDCreateReq(buffer_arg) {
  return message_pb.GDCreateReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ULZProto_GDGetInfoReq(arg) {
  if (!(arg instanceof message_pb.GDGetInfoReq)) {
    throw new Error('Expected argument of type ULZProto.GDGetInfoReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_GDGetInfoReq(buffer_arg) {
  return message_pb.GDGetInfoReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ULZProto_GDInstanceDT(arg) {
  if (!(arg instanceof message_pb.GDInstanceDT)) {
    throw new Error('Expected argument of type ULZProto.GDInstanceDT');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_GDInstanceDT(buffer_arg) {
  return message_pb.GDInstanceDT.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ULZProto_GDMoveConfirmReq(arg) {
  if (!(arg instanceof message_pb.GDMoveConfirmReq)) {
    throw new Error('Expected argument of type ULZProto.GDMoveConfirmReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_GDMoveConfirmReq(buffer_arg) {
  return message_pb.GDMoveConfirmReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ULZProto_GDMoveConfirmResp(arg) {
  if (!(arg instanceof message_pb.GDMoveConfirmResp)) {
    throw new Error('Expected argument of type ULZProto.GDMoveConfirmResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_GDMoveConfirmResp(buffer_arg) {
  return message_pb.GDMoveConfirmResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ULZProto_GDPhaseConfirmReq(arg) {
  if (!(arg instanceof message_pb.GDPhaseConfirmReq)) {
    throw new Error('Expected argument of type ULZProto.GDPhaseConfirmReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_GDPhaseConfirmReq(buffer_arg) {
  return message_pb.GDPhaseConfirmReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ULZProto_GDPhaseConfirmResp(arg) {
  if (!(arg instanceof message_pb.GDPhaseConfirmResp)) {
    throw new Error('Expected argument of type ULZProto.GDPhaseConfirmResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_GDPhaseConfirmResp(buffer_arg) {
  return message_pb.GDPhaseConfirmResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ULZProto_GameDataSet(arg) {
  if (!(arg instanceof Data_pb.GameDataSet)) {
    throw new Error('Expected argument of type ULZProto.GameDataSet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_GameDataSet(buffer_arg) {
  return Data_pb.GameDataSet.deserializeBinary(new Uint8Array(buffer_arg));
}


// ANCHOR: service-func for GameDuelService
// SECTION: service.proto
var GameDuelServiceService = exports.GameDuelServiceService = {
  //  Basic Server Function
serverBroadcast: {
    path: '/ULZProto.GameDuelService/ServerBroadcast',
    requestStream: false,
    responseStream: true,
    requestType: message_pb.GDGetInfoReq,
    responseType: message_pb.GDBroadcastResp,
    requestSerialize: serialize_ULZProto_GDGetInfoReq,
    requestDeserialize: deserialize_ULZProto_GDGetInfoReq,
    responseSerialize: serialize_ULZProto_GDBroadcastResp,
    responseDeserialize: deserialize_ULZProto_GDBroadcastResp,
  },
  createGame: {
    path: '/ULZProto.GameDuelService/CreateGame',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GDCreateReq,
    responseType: Data_pb.GameDataSet,
    requestSerialize: serialize_ULZProto_GDCreateReq,
    requestDeserialize: deserialize_ULZProto_GDCreateReq,
    responseSerialize: serialize_ULZProto_GameDataSet,
    responseDeserialize: deserialize_ULZProto_GameDataSet,
  },
  getGameData: {
    path: '/ULZProto.GameDuelService/GetGameData',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GDGetInfoReq,
    responseType: Data_pb.GameDataSet,
    requestSerialize: serialize_ULZProto_GDGetInfoReq,
    requestDeserialize: deserialize_ULZProto_GDGetInfoReq,
    responseSerialize: serialize_ULZProto_GameDataSet,
    responseDeserialize: deserialize_ULZProto_GameDataSet,
  },
  quitGame: {
    path: '/ULZProto.GameDuelService/QuitGame',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GDCreateReq,
    responseType: common_pb.Empty,
    requestSerialize: serialize_ULZProto_GDCreateReq,
    requestDeserialize: deserialize_ULZProto_GDCreateReq,
    responseSerialize: serialize_ULZProto_Empty,
    responseDeserialize: deserialize_ULZProto_Empty,
  },
  // GameSet Logic Function
//   instance card move               
instSetEventCard: {
    path: '/ULZProto.GameDuelService/InstSetEventCard',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GDInstanceDT,
    responseType: common_pb.Empty,
    requestSerialize: serialize_ULZProto_GDInstanceDT,
    requestDeserialize: deserialize_ULZProto_GDInstanceDT,
    responseSerialize: serialize_ULZProto_Empty,
    responseDeserialize: deserialize_ULZProto_Empty,
  },
  // skip
// rpc InstGetEventCard    (GDGetInfoReq)              returns (       GDInstanceDT);
//
// Draw-phase : confirm 
// NOTE: After Broadcast Send <[ refill_action_card_phase ]>,
//   Client set the event-card by < InstSetEventCard > 
//   { from their deck to own hand };
//   then, send this < DrawPhaseConfirm > to notify the server 
//   that `client ready to start next phase [move_card_drop_phase]`
drawPhaseConfirm: {
    path: '/ULZProto.GameDuelService/DrawPhaseConfirm',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GDGetInfoReq,
    responseType: common_pb.Empty,
    requestSerialize: serialize_ULZProto_GDGetInfoReq,
    requestDeserialize: deserialize_ULZProto_GDGetInfoReq,
    responseSerialize: serialize_ULZProto_Empty,
    responseDeserialize: deserialize_ULZProto_Empty,
  },
  // Move-phase : confirm
// NOTE:   After Broadcast Send <[ move_card_drop_phase ]>,
//   Client set the event-card by < InstSetEventCard >
//       { from their own hand to out-side };
//   Then send this < MovePhaseConfirm > to notify the server
//   that `client ready to start next phase [determine_move_phase]`
movePhaseConfirm: {
    path: '/ULZProto.GameDuelService/MovePhaseConfirm',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GDMoveConfirmReq,
    responseType: common_pb.Empty,
    requestSerialize: serialize_ULZProto_GDMoveConfirmReq,
    requestDeserialize: deserialize_ULZProto_GDMoveConfirmReq,
    responseSerialize: serialize_ULZProto_Empty,
    responseDeserialize: deserialize_ULZProto_Empty,
  },
  // Move-phase : result
// NOTE:   After Broadcast Send 
//   <[  determine_move_phase , 
//       GET_MOVE_PHASE_RESULT 
//   ]>,
//   Client need to get the < move-result >,
//   by sending this < MovePhaseResult > request;
//   Then, Server take request to check out to
//   start next phase [finish_move_phase / chara_change_phase];
//   Server will broadcast [finish_move_phase / chara_change_phase];
//
movePhaseResult: {
    path: '/ULZProto.GameDuelService/MovePhaseResult',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GDGetInfoReq,
    responseType: message_pb.GDMoveConfirmResp,
    requestSerialize: serialize_ULZProto_GDGetInfoReq,
    requestDeserialize: deserialize_ULZProto_GDGetInfoReq,
    responseSerialize: serialize_ULZProto_GDMoveConfirmResp,
    responseDeserialize: deserialize_ULZProto_GDMoveConfirmResp,
  },
  // Attack/Defence : confirm
// NOTE:  After Broadcast Send 
//   <[  (attack_card_drop_phase|defence_card_drop_phase), 
//       phase_ab 
//   ]>
//   Player Client (Attacker|Defencer) set the event-card by 
//   < InstSetEventCard > { from their own hand to out-side };
//   Then send this < ADPhaseConfirm > to notify the server
//   that `client ready to start next phase []`
//
aDPhaseConfirm: {
    path: '/ULZProto.GameDuelService/ADPhaseConfirm',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GDADConfirmReq,
    responseType: common_pb.Empty,
    requestSerialize: serialize_ULZProto_GDADConfirmReq,
    requestDeserialize: deserialize_ULZProto_GDADConfirmReq,
    responseSerialize: serialize_ULZProto_Empty,
    responseDeserialize: deserialize_ULZProto_Empty,
  },
  // Attack/Defence : result
// NOTE:   After Broadcast Send 
//   <[  (attack_card_drop_phase|defence_card_drop_phase) , 
//       phase_ab, 
//       (GET_ATK_PHASE_RESULT|GET_DEF_PHASE_RESULT) 
//   ]>,
//   Client need to get the < AD-result >,
//   by sending this < ADPhaseResult > request;
//   Then, Server take request to check out to
//   start next phase [];
//   Server will broadcast next phase [];
//
aDPhaseResult: {
    path: '/ULZProto.GameDuelService/ADPhaseResult',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GDGetInfoReq,
    responseType: message_pb.GDADResultResp,
    requestSerialize: serialize_ULZProto_GDGetInfoReq,
    requestDeserialize: deserialize_ULZProto_GDGetInfoReq,
    responseSerialize: serialize_ULZProto_GDADResultResp,
    responseDeserialize: deserialize_ULZProto_GDADResultResp,
  },
  // Once the [defence_card_drop_phase] done (feedbacked)
// ServerBroacast :
//   1. send [determine_battle_point_phase]
//   2. Random Dice Result 
//   3. Set Result to tmp-data
//   4. send [battle_result_phase]
//   5. wait ADPhaseDiceResult
//
// Attack/Defence : DiceSet
// NOTE:   After Broadcast Send 
//   <[  battle_result_phase, phase_ab,]>,
//   Client need to get the < ADPhase-DiceSet >,
//   by sending this < ADPhase-DiceSet > request;
//   Then, Client may start their dice-rolling animation
//   After two side client sent this request ,  
//   Server should ready for [damage_phase];
//
aDPhaseDiceResult: {
    path: '/ULZProto.GameDuelService/ADPhaseDiceResult',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GDGetInfoReq,
    responseType: message_pb.GDADDiceResult,
    requestSerialize: serialize_ULZProto_GDGetInfoReq,
    requestDeserialize: deserialize_ULZProto_GDGetInfoReq,
    responseSerialize: serialize_ULZProto_GDADDiceResult,
    responseDeserialize: deserialize_ULZProto_GDADDiceResult,
  },
  // if dead-character raised,
// server should raise [dead_chara_change_phase];
//
// ChangeCharaPhase : Confirm and Result
// FIXME : 3v3 may need it, but 1v1 is not implement;
changePhaseConfirm: {
    path: '/ULZProto.GameDuelService/ChangePhaseConfirm',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GDChangeConfirmReq,
    responseType: common_pb.Empty,
    requestSerialize: serialize_ULZProto_GDChangeConfirmReq,
    requestDeserialize: deserialize_ULZProto_GDChangeConfirmReq,
    responseSerialize: serialize_ULZProto_Empty,
    responseDeserialize: deserialize_ULZProto_Empty,
  },
  // ChangeCharaPhase : Confirm and Result
// FIXME : 3v3 may need it, but 1v1 is not implement;
changePhaseResult: {
    path: '/ULZProto.GameDuelService/ChangePhaseResult',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GDGetInfoReq,
    responseType: common_pb.Empty,
    requestSerialize: serialize_ULZProto_GDGetInfoReq,
    requestDeserialize: deserialize_ULZProto_GDGetInfoReq,
    responseSerialize: serialize_ULZProto_Empty,
    responseDeserialize: deserialize_ULZProto_Empty,
  },
  // Event-Phase : Confirm
// NOTE: Once the Server send any phase notify 
//   the client may send feedback to server that ready for phase 
eventPhaseConfirm: {
    path: '/ULZProto.GameDuelService/EventPhaseConfirm',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GDPhaseConfirmReq,
    responseType: common_pb.Empty,
    requestSerialize: serialize_ULZProto_GDPhaseConfirmReq,
    requestDeserialize: deserialize_ULZProto_GDPhaseConfirmReq,
    responseSerialize: serialize_ULZProto_Empty,
    responseDeserialize: deserialize_ULZProto_Empty,
  },
  // Event-Phase : Confirm
// NOTE: Once the Server send any phase notify 
//   the client may send feedback to server that ready for phase 
eventPhaseResult: {
    path: '/ULZProto.GameDuelService/EventPhaseResult',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GDGetInfoReq,
    responseType: message_pb.GDPhaseConfirmResp,
    requestSerialize: serialize_ULZProto_GDGetInfoReq,
    requestDeserialize: deserialize_ULZProto_GDGetInfoReq,
    responseSerialize: serialize_ULZProto_GDPhaseConfirmResp,
    responseDeserialize: deserialize_ULZProto_GDPhaseConfirmResp,
  },
};

exports.GameDuelServiceClient = grpc.makeGenericClientConstructor(GameDuelServiceService);
