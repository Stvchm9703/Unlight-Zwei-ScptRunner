declare namespace ULZProto {

    // ANCHOR: message-struct for game-service
    // SECTION: message.proto
    // -------------------------------------------------------------
    export interface SESkillCalReq {
        income_card?: Array<EventCard>;
        feat?: Array<SkillSet>;
        from_cli?: string;
    }

    export interface SESkillCalResp {
        result_val?: number;
        effect_result?: Array<EffectResult>;
    }

    export interface SEDiceCalReq {
        income_dice?: number;
        act?: number;
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
    }

    export interface SEEffectCalResp {
        id?: string;
        from_cli?: string;
        gameset_result?: GameDataSet;
    }

}

