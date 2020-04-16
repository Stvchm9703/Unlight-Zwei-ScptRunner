declare namespace ULZProto {

    // Move-Phase-SnapMod
    export interface MovePhaseSnapMod {
        //  flaging 
        turns?: number;
        host_val?: number;
        duel_val?: number;
        host_opt?: MovePhaseOpt;
        duel_opt?: MovePhaseOpt;
        host_card?: Array<EventCard>;
        duel_card?: Array<EventCard>;
        host_trig_skl?: Array<SkillSet>;
        duel_trig_skl?: Array<SkillSet>;
    }

    // AD-Phase-SnapMod
    export interface ADPhaseSnapMod {
        turns?: number;
        first_attack?: PlayerSide;
        curr_attacker?: PlayerSide;
        event_phase?: EventHookPhase;
        attack_val?: number;
        defence_val?: number;
        attack_card?: Array<EventCard>;
        defence_card?: Array<EventCard>;
        attack_trig_skl?: Array<SkillSet>;
        defence_trig_skl?: Array<SkillSet>;
        is_processed?: boolean;
    }

    // // Effect-Status-SnapMod
    export interface EffectNodeSnapMod {
        turns?: number;
        pending_ef?: Array<EffectResult>;
    }

    // PhaseInstance-SnapMod
    export interface PhaseSnapMod {
        turns?: number;
        event_phase?: EventHookPhase;
        hook_type?: EventHookType;
        is_host_ready?: boolean;
        is_duel_ready?: boolean;
        first_attack?: PlayerSide;
        curr_attack?: PlayerSide; // EventHookType               hook_type               = 16;
    }

}

