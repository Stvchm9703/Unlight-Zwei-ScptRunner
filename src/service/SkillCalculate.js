var messages = require('../proto_ts/message_pb');
var dataStruct = require('../proto_ts/Data_pb');
var _filter = require('lodash/filter');
var skill_func_index = require('../skill/skill_data.json');
const skill_util = require('../skill/util');

/**
 * @function _SkillCalculate
 * @param {messages.SESkillCalReq} call
 * @returns {messages.SESkillCalResp} response
 */
var _SkillCalculate = function (call) {
    let calle = call.toObject();
    var tar_skill = [];
    // call : SESkillCalReq
    let initVal = skill_util.CardTotalValCalcSet(calle.incomeCardList);
    let totalVal = skill_util.CardTotalValCalcSet(calle.incomeCardList);
    let effectList = [];
    let funcBind = calle.featList;
    console.log(funcBind);
    console.log(totalVal);
    funcBind.forEach(element => {
        console.log(element);
        let exist = _filter(skill_func_index, function (o) {
            return o['feat_no'] == element.featNo &&
                o['id'] == element.id;
        });

        if (exist.length != -1) {
            let set = {
                func: skill_util.GetSkillFunc(element.featNo),
                skill: element,
            }
            tar_skill.push(set);
        }
    });
    console.log(tar_skill);
    tar_skill.forEach(e => {
        console.log(e);
        let tmp = e.func.apply(null, [totalVal, e.skill.featNo]);
        console.log(tmp);
        // suppose returns {
        //     totalVal,
        //     effectList,
        // }

        effectList.push([...tmp.effectList]);
        totalVal = skill_util.AddTotalVal(totalVal, tmp.totalVal);
    });

    console.log(effectList);
    console.log(totalVal);

    var response = new messages.SESkillCalResp();

    if (calle.fromCli.includes(':attack')) {
        response.setResultVal(totalVal['attack']);
    } else if (calle.fromCli.includes(':gun')) {
        response.setResultVal(totalVal['gun']);
    } else if (calle.fromCli.includes(':defence')) {
        response.setResultVal(totalVal['defence']);
    } else if (calle.fromCli.includes(':move')) {
        response.setResultVal(totalVal['move']);
    }

    response.setEffectResultList(effectList);

    return response;
}


exports.SkillCalculate = _SkillCalculate;