// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var message_pb = require('../proto_js/message_pb.js');

function serialize_ULZProto_SEDiceCalReq(arg) {
  if (!(arg instanceof message_pb.SEDiceCalReq)) {
    throw new Error('Expected argument of type ULZProto.SEDiceCalReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_SEDiceCalReq(buffer_arg) {
  return message_pb.SEDiceCalReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ULZProto_SEDiceCalResp(arg) {
  if (!(arg instanceof message_pb.SEDiceCalResp)) {
    throw new Error('Expected argument of type ULZProto.SEDiceCalResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_SEDiceCalResp(buffer_arg) {
  return message_pb.SEDiceCalResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ULZProto_SESkillCalReq(arg) {
  if (!(arg instanceof message_pb.SESkillCalReq)) {
    throw new Error('Expected argument of type ULZProto.SESkillCalReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_SESkillCalReq(buffer_arg) {
  return message_pb.SESkillCalReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ULZProto_SESkillCalResp(arg) {
  if (!(arg instanceof message_pb.SESkillCalResp)) {
    throw new Error('Expected argument of type ULZProto.SESkillCalResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ULZProto_SESkillCalResp(buffer_arg) {
  return message_pb.SESkillCalResp.deserializeBinary(new Uint8Array(buffer_arg));
}


// ANCHOR: service-func for SkillEffectService
// SECTION: service.proto
var SkillEffectServiceService = exports.SkillEffectServiceService = {
  //  Basic Server Function
skillCalculate: {
    path: '/ULZProto.SkillEffectService/SkillCalculate',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.SESkillCalReq,
    responseType: message_pb.SESkillCalResp,
    requestSerialize: serialize_ULZProto_SESkillCalReq,
    requestDeserialize: deserialize_ULZProto_SESkillCalReq,
    responseSerialize: serialize_ULZProto_SESkillCalResp,
    responseDeserialize: deserialize_ULZProto_SESkillCalResp,
  },
  // rpc EffectCalculate     (SEEffectCalReq)            returns (SEEffectCalResp);
diceCalculate: {
    path: '/ULZProto.SkillEffectService/DiceCalculate',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.SEDiceCalReq,
    responseType: message_pb.SEDiceCalResp,
    requestSerialize: serialize_ULZProto_SEDiceCalReq,
    requestDeserialize: deserialize_ULZProto_SEDiceCalReq,
    responseSerialize: serialize_ULZProto_SEDiceCalResp,
    responseDeserialize: deserialize_ULZProto_SEDiceCalResp,
  },
};

exports.SkillEffectServiceClient = grpc.makeGenericClientConstructor(SkillEffectServiceService);
