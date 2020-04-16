declare namespace ULZProto {

    export enum EventHookPhase {
        gameset_start = "gameset_start",
        start_turn_phase = "start_turn_phase",
        refill_action_card_phase = "refill_action_card_phase",
        move_card_drop_phase = "move_card_drop_phase",
        determine_move_phase = "determine_move_phase",
        finish_move_phase = "finish_move_phase",
        chara_change_phase = "chara_change_phase",
        determine_chara_change_phase = "determine_chara_change_phase",
        attack_card_drop_phase = "attack_card_drop_phase",
        defence_card_drop_phase = "defence_card_drop_phase",
        determine_battle_point_phase = "determine_battle_point_phase",
        battle_result_phase = "battle_result_phase",
        damage_phase = "damage_phase",
        dead_chara_change_phase = "dead_chara_change_phase",
        determine_dead_chara_change_phase = "determine_dead_chara_change_phase",
        change_initiative_phase = "change_initiative_phase",
        finish_turn_phase = "finish_turn_phase",
        gameset_end = "gameset_end",
    }
    export enum EventHookType {
        Instant = "Instant",
        Before = "Before",
        Proxy = "Proxy",
        After = "After",
    }
}

