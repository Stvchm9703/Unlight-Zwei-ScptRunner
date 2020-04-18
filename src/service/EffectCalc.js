var messages = require('../proto_ts/message_pb');
var dataStruct = require('../proto_ts/Data_pb');
var _filter = require('lodash/filter');
var skill_func_index = require('../skill/skill_data.json');
const skill_util = require('../skill/util');

/**
 * @function _EffectCalculate
 * @param {messages.SEEffectCalReq} call
 * @returns {messages.SEEffectCalResp} response
 */
var _EffectCalculate = function (call) {
    let calle = call.toObject();


    var response = new messages.SEEffectCalResp();
    return response;
}


exports.EffectCalculate = _EffectCalculate;