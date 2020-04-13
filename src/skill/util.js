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
        skill_set.addConRange(DtStruct.RangeType.LONG);
    }
    if (range_str.includes('M')) {
        skill_set.addConRange(DtStruct.RangeType.MIDDLE);
    }
    if (range_str.includes('S')) {
        skill_set.addConRange(DtStruct.RangeType.SHORT);
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
            cardCond.setVal(-1);
        } else {
            // with value 
            cardCond.setVal(parseInt([...e][1]));
        }

        // number of card 
        if (e.includes("+")) {
            cardCond.SetCompare(DtStruct.SignEq.GREATER);
        } else if (e.includes("*")) {
            cardCond.SetCompare(DtStruct.SignEq.EQUAL);
            // let num = parseInt()
        }


    });
}


var skillCalReqConv = function (seSkillCalReq) {

}




export {
    skillCalReqConv,
    CardCondStrConv
}