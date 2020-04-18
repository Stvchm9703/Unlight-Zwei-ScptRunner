var messages = require('../proto_ts/message_pb');
var dataStruct = require('../proto_ts/Data_pb');
var _filter = require('lodash/filter');

/**
 * @function diceCalculate
 * @param {messages.SEDiceCalReq} call
 * @returns {messages.SEDiceCalResp} response
 */
var diceCalculate = function (call) {
    let calle = call.toObject();
    var response = new messages.SEDiceCalResp();
    for (let i = 0; i < calle.act; i++) {
        let dice_result = new messages.DiceResultSet();
        for (let h = 0; h < calle.act; h++)
            dice_result.addValue(_roll_dice(6));
        response.addDiceResult(dice_result);
    }
    return response;
}

/**
 *
 *
 * @param {number} diceFace
 * @returns
 */
function _roll_dice(diceFace) {
    return Math.round(Math.random() * diceFace);
}

exports.DiceCalculate = diceCalculate;