// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace ULZProto {

    export enum PlayerSide {
        HOST = "HOST",
        DUELER = "DUELER",
    }
    export enum EventCardType {
        NULL = "NULL",
        ATTACK = "ATTACK",
        DEFENCE = "DEFENCE",
        GUN = "GUN",
        MOVE = "MOVE",
        STAR = "STAR",
    }
    export enum EventCardPos {
        BLOCK = "BLOCK",
        INSIDE = "INSIDE",
        OUTSIDE = "OUTSIDE",
        DESTROY = "DESTROY",
    }
    export enum RangeType {
        SHORT = "SHORT",
        MIDDLE = "MIDDLE",
        LONG = "LONG",
    }
    export enum MovePhaseOpt {
        NO_MOVE = "NO_MOVE",
        FORWARD = "FORWARD",
        BACKWARD = "BACKWARD",
        STAY = "STAY",
        CHANGE = "CHANGE",
    }
    export enum EventCardFunc {
        null = "null",
        occur_chance_event = "occur_chance_event",
        occur_heal_event = "occur_heal_event",
        occur_cure_event = "occur_cure_event",
        occur_quick_event = "occur_quick_event",
        occur_curse_event = "occur_curse_event",
        occur_chalice_event = "occur_chalice_event",
        occur_poison_event = "occur_poison_event",
        occur_damage_event = "occur_damage_event",
    }
    export enum SignEq {
        EQUAL = "EQUAL",
        GREATER = "GREATER",
        LESSER = "LESSER",
        ANY = "ANY",
    }
    export enum EffectOption {
        Status_Addition = "Status_Addition",
        Instance_Change = "Instance_Change",
        Status_FixValue = "Status_FixValue",
        Hard_Instance_Change = "Hard_Instance_Change",
    }
    // GameDataSet 
    //      the whole instance game-duel set 
    export interface GameDataSet {
        //  room_key, see also RoomService/message.proto : Room 
        room_key?: string;
        //  host_id, the user-id of host player 
        host_id?: string;
        //  dueler_id, the user-id of dueler player
        duel_id?: string;
        //  game_turn, the number of turns in game
        game_turn?: number;
        //  host_card_deck, the character card  
        host_card_deck?: Array<CharCardSet>;
        //  duel_card_deck, the character card
        duel_card_deck?: Array<CharCardSet>;
        //  host_curr_card, current on-used char-card 
        host_curr_card_key?: number;
        //  dueler_curr_card, current on-used char-card 
        duel_curr_card_key?: number;
        //  host_event_card_deck
        host_event_card_deck?: Array<EventCard>;
        //  duel_event_card_deck
        duel_event_card_deck?: Array<EventCard>;
        //  curr_range
        range?: RangeType;
        // nvn 
        nvn?: number;
        first_attack?: PlayerSide;
        curr_phase?: PlayerSide;
        //  event_phase, the event hook phase 
        event_phase?: EventHookPhase;
        //  hook_type, the event hook type
        hook_type?: EventHookType;
        //  Effect-result
        effect_counter?: Array<EffectResult>;
    }

    // CharCardSet 
    // 
    export interface CharCardSet {
        char_id?: number;
        card_id?: number;
        hp_inst?: number;
        ap_inst?: number;
        dp_inst?: number;
        hp_orig?: number;
        ap_orig?: number;
        dp_orig?: number;
        level?: number;
        status_inst?: Array<StatusSet>;
        equ_set?: CharCardEquSet;
    }

    export interface CharCardEquSet {
        equ_id?: number;
        hp?: number;
        ap?: number;
        dp?: number;
    }

    export interface EventCard {
        id?: number;
        up_option?: EventCardType;
        up_val?: number;
        down_option?: EventCardType;
        down_val?: number;
        position?: EventCardPos;
        is_invert?: boolean;
        func_mount?: EventCardFunc;
        mount_val?: number;
    }

    export interface SkillSet {
        id?: number;
        feat_no?: number;
        pow?: number;
        cond_string?: string;
        cond_card?: Array<SkillCardCond>;
        cond_range?: Array<RangeType>;
    }

    export interface SkillCardCond {
        type?: EventCardType;
        val?: number;
        compare?: SignEq;
    }

    // sprite-display 
    export interface StatusSet {
        id?: number;
        status_id?: string;
        remain_cd?: number;
        feat_no?: number;
        pow?: number;
    }

    export interface EffectResult {
        // targer 
        tar_card?: number;
        tar_side?: PlayerSide;
        // trigger-time
        trigger_time?: EffectTiming;
        end_time?: EffectTiming;
        // effect
        ef_option?: EffectOption;
        hp?: number;
        ap?: number;
        dp?: number;
        mp?: number;
        disable_move?: boolean;
        disable_atk?: boolean;
        disable_def?: boolean;
        disable_draw?: boolean;
        disable_change?: boolean;
        binding_func?: string;
        // 
        remain_cd?: number;
        assign_from?: string;
        skill_id?: number;
        status_id?: number;
    }

    export interface EffectTiming {
        event_phase?: EventHookPhase;
        hook_type?: EventHookType;
        sub_count?: number;
    }

}

