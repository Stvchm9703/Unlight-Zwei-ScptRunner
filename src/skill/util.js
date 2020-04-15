const _clone = require('lodash/clone');
const DtStruct = require('../proto_js/Data_pb');
const MsgStruct = require('../proto_js/message_pb');

/**
 * 
 * @param {string} $cond_string 
 *          convert from old way encoding to new structed 
 *          e.g: LM:S5+
 *              range : long, middle
 *              action card : 
 *                 sword : more or equal 5
 *              LMS:E2+,M0
 *              range : long, middle, short
 *              action card:
 *                  E(star) : more or equal 2
 *                  Move :  equal 0
 * @returns {DtStruct.ULZProto.SkillSet} 
 */
var CardCondStrConv = function ($cond_string) {
    let skill_set = new DtStruct.SkillSet();
    // range-str decode
    let range_str = $cond_string.split(':')[0];
    if (range_str.includes('L')) {
        skill_set.addCondRange(DtStruct.RangeType.LONG);
    }
    if (range_str.includes('M')) {
        skill_set.addCondRange(DtStruct.RangeType.MIDDLE);
    }
    if (range_str.includes('S')) {
        skill_set.addCondRange(DtStruct.RangeType.SHORT);
    }

    // action-card str decode
    let card_list_str = $cond_string.split(':')[1];
    let card_list = card_list_str.split(',');
    let cards = [];
    card_list.forEach(e => {
        let cardCond = new DtStruct.SkillCardCond();
        // type
        switch ([...e][0]) {
            case "S": cardCond.setType(DtStruct.EventCardType.ATTACK); break;
            case "D": cardCond.setType(DtStruct.EventCardType.DEFENCE); break;
            case "A": cardCond.setType(DtStruct.EventCardType.GUN); break;
            case "M": cardCond.setType(DtStruct.EventCardType.MOVE); break;
            case "E": cardCond.setType(DtStruct.EventCardType.STAR); break;
            default: cardCond.setType(DtStruct.EventCardType.NULL); break;
        }

        // value
        if (isNaN([...e][1])) {
            // any value 
            cardCond.setCompare(DtStruct.SignEq.ANY);
        } else {
            // with value 
            cardCond.setVal(parseInt([...e][1]));
            cardCond.setCompare(DtStruct.SignEq.EQUAL);
        }

        // number of card 
        if (e.includes("+")) {
            cardCond.setCompare(DtStruct.SignEq.GREATER);
        } else if (e.includes("*")) {
            let num = parseInt([...e][e.indexOf("*") + 1]);
            for (let i = num; i > 1; i--) {
                let cardClone = _clone(cardCond);
                skill_set.addCondCard(cardClone);
            }
        }
        skill_set.addCondCard(cardCond);
    });

    // console.log(skill_set.toObject(false));

    return skill_set;
}

/**
 * CardTotalValCalcSet
 * @param {EventCard[]} card_list
  
 */
var CardTotalValCalcSet = function (card_list) {
    var ty = {
        'star': 0,
        'attack': 0,
        'defence': 0,
        'move': 0,
        'gun': 0,
    };

    card_list.forEach(k => {
        let e = k.toObject();
        let sign = 0;
        let card_val = 0;
        if (e.isInvert && e.downVal != DtStruct.EventCardType.NULL) {
            card_val = e.downVal;
            sign = e.downOption;
        } else {
            card_val = e.upVal;
            sign = e.upOption;
        }
        switch (sign) {
            case (DtStruct.EventCardType.ATTACK): ty['attack'] += card_val; break;
            case (DtStruct.EventCardType.DEFENCE): ty['defence'] += card_val; break;
            case (DtStruct.EventCardType.GUN): ty['gun'] += card_val; break;
            case (DtStruct.EventCardType.MOVE): ty['move'] += card_val; break;
            case (DtStruct.EventCardType.STAR): ty['star'] += card_val; break;
        }
    });
    return ty;
}
var skillCalReqConv = function (seSkillCalReq) {

}

/**
 * @function RunFeatFunc
 * @param {number} $request_feat 
 * @param {number} $pow
 * @param {MsgStruct.SESkillCalReq.incomeCardList} $card_list
 */
var RunFeatFunc = function ($request_feat, $pow, $card_list) {
    if (featFuncTable[$request_feat] != null) {
        return featFuncTable[$request_feat].apply($card_list, $pow);
    }
    return null;
};

/**
 * 
 * @param {number} featNo 
 */
var GetSkillFunc = function (featNo) {
    if (featFuncTable[featNo] != null) {
        return featFuncTable[featNo];
    }
    return null;
}

/**
* @function AddTotalVal
* @param {totalVal(map)} main_set
* @param {totalVal(map)} sub_set
* @returns {totalVal(map)} main_set
*/
var AddTotalVal = function (main_set, sub_set) {
    for (const property in main_set) {
        main_set[property] += sub_set[property];
    }
    return main_set;
}



var EffectTimingInit = function (eventPhase, hookPhase, subCount) {
    let trig_time = new DtStruct.EffectTiming();
    trig_time.setEventPhase(eventPhase);
    trig_time.setHookType(hookPhase);
    trig_time.setSubCount(
        subCount != null && !subCount.isNaN()
            ? subCount
            : 5
    ); // default
    return trig_time;
}
exports.skillCalReqConv = skillCalReqConv;
exports.CardCondStrConv = CardCondStrConv;
exports.CardTotalValCalcSet = CardTotalValCalcSet;

exports.RunFeatFunc = RunFeatFunc;
exports.GetSkillFunc = GetSkillFunc;

exports.AddTotalVal = AddTotalVal;

exports.EffectTimingInit = EffectTimingInit;