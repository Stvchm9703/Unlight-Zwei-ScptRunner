declare namespace ULZProto {

    // ANCHOR: message-struct for game-service
    // SECTION: message.proto
    // -------------------------------------------------------------
    export interface SESkillCalReq {
        income_card?: Array<EventCard>;
        feat?: Array<SkillSet>;
        from_cli?: string;
        targ_type?: EventCardType;
    }

    export interface SESkillCalResp {
        result_val?: number;
        effect_result?: Array<EffectResult>;
        targ_type?: EventCardType;
    }

    export interface SEDiceCalReq {
        income_dice?: number;
        act?: number;
        effect_result?: Array<EffectResult>;
    }

    export interface SEDiceCalResp {
        dice_result?: Array<DiceResultSet>;
    }

    export interface DiceResultSet {
        value?: Array<number>;
    }

    export interface SEEffectCalReq {
        id?: string;
        from_time?: EffectTiming;
        to_time?: EffectTiming;
        gameset_instant?: GameDataSet;
        from_cli?: string;
        remark?: string;
    }

    export interface SEEffectCalResp {
        id?: string;
        from_cli?: string;
        gameset_result?: GameDataSet;
        result_info?: Array<string>;
        from_time?: EffectTiming;
        to_time?: EffectTiming;
    }

}

