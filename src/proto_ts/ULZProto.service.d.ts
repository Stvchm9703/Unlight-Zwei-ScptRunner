declare namespace ULZProto {

    export interface SkillEffectServiceService {
        SkillInstCalc: (r:SESkillCalReq) => SESkillCalResp;
        SkillCalculate: (r:SESkillCalReq) => SESkillCalResp;
        EffectCalculate: (r:SEEffectCalReq) => SEEffectCalResp;
        DiceCalculate: (r:SEDiceCalReq) => SEDiceCalResp;
    }
}

