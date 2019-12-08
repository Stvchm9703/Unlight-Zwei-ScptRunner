// declare enum DuelPhase {
//   StartGame = 1
// }
// declare enum GameSetPhase {}
export var Range;
(function (Range) {
    Range[Range["Short"] = 0] = "Short";
    Range[Range["Middle"] = 1] = "Middle";
    Range[Range["Long"] = 2] = "Long";
})(Range || (Range = {}));
export var DeckPosition;
(function (DeckPosition) {
    DeckPosition[DeckPosition["Draw"] = 0] = "Draw";
    DeckPosition[DeckPosition["Hand"] = 1] = "Hand";
})(DeckPosition || (DeckPosition = {}));
export var ACType;
(function (ACType) {
    ACType["ATK"] = "Attack";
    ACType["DEF"] = "Defence";
    ACType["MOV"] = "Movement";
    ACType["STR"] = "Star";
    ACType["GUN"] = "Gun";
    ACType["NULL"] = "Null";
})(ACType || (ACType = {}));
export class ActionCard {
    constructor() {
        this.UpVal = 1;
        this.DownVal = 1;
        this.UpType = ACType.ATK;
        this.DownType = ACType.NULL;
    }
    get cost() {
        return this.UpVal + this.DownVal / 2;
    }
}
export class ACInstant extends ActionCard {
}
export class CharacterCard {
}
export class CCInstant extends CharacterCard {
}
export class Player {
}
export class DiceResult {
}
export class GameSet {
}
export class TriggerCond {
}
export class CardReq {
}
export var req_operater;
(function (req_operater) {
    req_operater[req_operater["greater"] = 0] = "greater";
    req_operater[req_operater["equal"] = 1] = "equal";
    req_operater[req_operater["less"] = 2] = "less";
    req_operater[req_operater["greater_equ"] = 3] = "greater_equ";
    req_operater[req_operater["less_equ"] = 4] = "less_equ";
})(req_operater || (req_operater = {}));
export var EventHookPhase;
(function (EventHookPhase) {
    /// start gameset
    EventHookPhase[EventHookPhase["gameset_start"] = 0] = "gameset_start";
    /// -- turn lifecycle
    EventHookPhase[EventHookPhase["start_turn_phase"] = 10] = "start_turn_phase";
    /// ---- Draw phase (ddp)
    EventHookPhase[EventHookPhase["refill_card_phase"] = 20] = "refill_card_phase";
    EventHookPhase[EventHookPhase["refill_event_card_phase"] = 25] = "refill_event_card_phase";
    /// ---- Move phase
    EventHookPhase[EventHookPhase["move_card_drop_phase"] = 30] = "move_card_drop_phase";
    EventHookPhase[EventHookPhase["determine_move_phase"] = 40] = "determine_move_phase";
    EventHookPhase[EventHookPhase["finish_move_phase"] = 50] = "finish_move_phase";
    EventHookPhase[EventHookPhase["chara_change_phase"] = 60] = "chara_change_phase";
    EventHookPhase[EventHookPhase["determine_chara_change_phase"] = 70] = "determine_chara_change_phase";
    /// ---- Atk/Def Phase A
    EventHookPhase[EventHookPhase["attack_card_drop_phase_pA"] = 80] = "attack_card_drop_phase_pA";
    EventHookPhase[EventHookPhase["defence_card_drop_phase_pA"] = 90] = "defence_card_drop_phase_pA";
    EventHookPhase[EventHookPhase["determine_battle_point_phase_pA"] = 100] = "determine_battle_point_phase_pA";
    EventHookPhase[EventHookPhase["battle_result_phase_pA"] = 110] = "battle_result_phase_pA";
    EventHookPhase[EventHookPhase["damage_phase_pA"] = 120] = "damage_phase_pA";
    EventHookPhase[EventHookPhase["determine_dead_chara_change_phase_pA"] = 130] = "determine_dead_chara_change_phase_pA";
    /// ---- Atk/Def Phase B
    EventHookPhase[EventHookPhase["attack_card_drop_phase_pB"] = 140] = "attack_card_drop_phase_pB";
    EventHookPhase[EventHookPhase["defence_card_drop_phase_pB"] = 150] = "defence_card_drop_phase_pB";
    EventHookPhase[EventHookPhase["determine_battle_point_phase_pB"] = 160] = "determine_battle_point_phase_pB";
    EventHookPhase[EventHookPhase["battle_result_phase_pB"] = 170] = "battle_result_phase_pB";
    EventHookPhase[EventHookPhase["damage_phase_pB"] = 180] = "damage_phase_pB";
    EventHookPhase[EventHookPhase["determine_dead_chara_change_phase_pB"] = 190] = "determine_dead_chara_change_phase_pB";
    /// ------ change char when the charecter dead
    EventHookPhase[EventHookPhase["dead_chara_change_phase"] = 200] = "dead_chara_change_phase";
    EventHookPhase[EventHookPhase["determine_dead_chara_change_phase"] = 210] = "determine_dead_chara_change_phase";
    /// -- endof turn lifecycle
    EventHookPhase[EventHookPhase["finish_turn_phase"] = 220] = "finish_turn_phase";
    /// endof game set
    EventHookPhase[EventHookPhase["gameset_end"] = 230] = "gameset_end";
})(EventHookPhase || (EventHookPhase = {}));
export var EventHookType;
(function (EventHookType) {
    EventHookType[EventHookType["Instant"] = 0] = "Instant";
    EventHookType[EventHookType["Before"] = 1] = "Before";
    EventHookType[EventHookType["After"] = 2] = "After";
    EventHookType[EventHookType["Proxy"] = 3] = "Proxy";
})(EventHookType || (EventHookType = {}));
