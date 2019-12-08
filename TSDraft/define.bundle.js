// declare enum DuelPhase {
//   StartGame = 1
// }
// declare enum GameSetPhase {}
define("define", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Range;
    (function (Range) {
        Range[Range["Short"] = 0] = "Short";
        Range[Range["Middle"] = 1] = "Middle";
        Range[Range["Long"] = 2] = "Long";
    })(Range = exports.Range || (exports.Range = {}));
    var DeckPosition;
    (function (DeckPosition) {
        DeckPosition[DeckPosition["Draw"] = 0] = "Draw";
        DeckPosition[DeckPosition["Hand"] = 1] = "Hand";
    })(DeckPosition = exports.DeckPosition || (exports.DeckPosition = {}));
    var ACType;
    (function (ACType) {
        ACType["ATK"] = "Attack";
        ACType["DEF"] = "Defence";
        ACType["MOV"] = "Movement";
        ACType["STR"] = "Star";
        ACType["GUN"] = "gun";
    })(ACType = exports.ACType || (exports.ACType = {}));
    class ActionCard {
        get cost() {
            return this.UpVal + this.DownVal / 2;
        }
    }
    exports.ActionCard = ActionCard;
    class ACInstant extends ActionCard {
    }
    exports.ACInstant = ACInstant;
    class CharacterCard {
    }
    exports.CharacterCard = CharacterCard;
    class CCInstant extends CharacterCard {
    }
    exports.CCInstant = CCInstant;
    class Player {
    }
    exports.Player = Player;
    class DiceResult {
    }
    exports.DiceResult = DiceResult;
    class GameSet {
    }
    exports.GameSet = GameSet;
    class TriggerCond {
    }
    exports.TriggerCond = TriggerCond;
    class CardReq {
    }
    exports.CardReq = CardReq;
    var req_operater;
    (function (req_operater) {
        req_operater[req_operater["greater"] = 0] = "greater";
        req_operater[req_operater["equal"] = 1] = "equal";
        req_operater[req_operater["less"] = 2] = "less";
        req_operater[req_operater["greater_equ"] = 3] = "greater_equ";
        req_operater[req_operater["less_equ"] = 4] = "less_equ";
    })(req_operater = exports.req_operater || (exports.req_operater = {}));
    var EventHookPhase;
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
    })(EventHookPhase = exports.EventHookPhase || (exports.EventHookPhase = {}));
    var EventHookType;
    (function (EventHookType) {
        EventHookType[EventHookType["Instant"] = 0] = "Instant";
        EventHookType[EventHookType["Before"] = 1] = "Before";
        EventHookType[EventHookType["After"] = 2] = "After";
        EventHookType[EventHookType["Proxy"] = 3] = "Proxy";
    })(EventHookType = exports.EventHookType || (exports.EventHookType = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9BOi9HaXRyZXBvL1VubGlnaHQtWndlaS1TY3B0UnVubmVyL3NjcmlwdC9kZWZpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCO0FBQzNCLGtCQUFrQjtBQUNsQixJQUFJO0FBQ0osK0JBQStCOzs7O0lBRS9CLElBQVksS0FJWDtJQUpELFdBQVksS0FBSztRQUNmLG1DQUFTLENBQUE7UUFDVCxxQ0FBVSxDQUFBO1FBQ1YsaUNBQVEsQ0FBQTtJQUNWLENBQUMsRUFKVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFJaEI7SUFFRCxJQUFZLFlBR1g7SUFIRCxXQUFZLFlBQVk7UUFDdEIsK0NBQVEsQ0FBQTtRQUNSLCtDQUFRLENBQUE7SUFDVixDQUFDLEVBSFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFHdkI7SUFFRCxJQUFZLE1BTVg7SUFORCxXQUFZLE1BQU07UUFDaEIsd0JBQWMsQ0FBQTtRQUNkLHlCQUFlLENBQUE7UUFDZiwwQkFBZ0IsQ0FBQTtRQUNoQixzQkFBWSxDQUFBO1FBQ1oscUJBQVcsQ0FBQTtJQUNiLENBQUMsRUFOVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFNakI7SUFFRCxNQUFhLFVBQVU7UUFLckIsSUFBSSxJQUFJO1lBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7S0FDRjtJQVJELGdDQVFDO0lBRUQsTUFBYSxTQUFVLFNBQVEsVUFBVTtLQUl4QztJQUpELDhCQUlDO0lBRUQsTUFBYSxhQUFhO0tBS3pCO0lBTEQsc0NBS0M7SUFDRCxNQUFhLFNBQVUsU0FBUSxhQUFhO0tBSzNDO0lBTEQsOEJBS0M7SUFFRCxNQUFhLE1BQU07S0FHbEI7SUFIRCx3QkFHQztJQUNELE1BQWEsVUFBVTtLQUd0QjtJQUhELGdDQUdDO0lBQ0QsTUFBYSxPQUFPO0tBV25CO0lBWEQsMEJBV0M7SUF5QkQsTUFBYSxXQUFXO0tBR3ZCO0lBSEQsa0NBR0M7SUFDRCxNQUFhLE9BQU87S0FJbkI7SUFKRCwwQkFJQztJQUNELElBQVksWUFNWDtJQU5ELFdBQVksWUFBWTtRQUN0QixxREFBTyxDQUFBO1FBQ1AsaURBQUssQ0FBQTtRQUNMLCtDQUFJLENBQUE7UUFDSiw2REFBVyxDQUFBO1FBQ1gsdURBQVEsQ0FBQTtJQUNWLENBQUMsRUFOVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQU12QjtJQUNELElBQVksY0F5Q1g7SUF6Q0QsV0FBWSxjQUFjO1FBQ3hCLGlCQUFpQjtRQUNqQixxRUFBaUIsQ0FBQTtRQUNqQixxQkFBcUI7UUFDckIsNEVBQXFCLENBQUE7UUFDckIseUJBQXlCO1FBQ3pCLDhFQUFzQixDQUFBO1FBQ3RCLDBGQUE0QixDQUFBO1FBRTVCLG1CQUFtQjtRQUNuQixvRkFBeUIsQ0FBQTtRQUN6QixvRkFBeUIsQ0FBQTtRQUN6Qiw4RUFBc0IsQ0FBQTtRQUN0QixnRkFBdUIsQ0FBQTtRQUN2QixvR0FBaUMsQ0FBQTtRQUVqQyx3QkFBd0I7UUFDeEIsOEZBQThCLENBQUE7UUFDOUIsZ0dBQStCLENBQUE7UUFDL0IsMkdBQXFDLENBQUE7UUFDckMseUZBQTRCLENBQUE7UUFDNUIsMkVBQXFCLENBQUE7UUFDckIscUhBQTBDLENBQUE7UUFFMUMsd0JBQXdCO1FBQ3hCLCtGQUErQixDQUFBO1FBQy9CLGlHQUFnQyxDQUFBO1FBQ2hDLDJHQUFxQyxDQUFBO1FBQ3JDLHlGQUE0QixDQUFBO1FBQzVCLDJFQUFxQixDQUFBO1FBQ3JCLHFIQUEwQyxDQUFBO1FBRTFDLDhDQUE4QztRQUM5QywyRkFBNkIsQ0FBQTtRQUM3QiwrR0FBdUMsQ0FBQTtRQUV2QywyQkFBMkI7UUFDM0IsK0VBQXVCLENBQUE7UUFFdkIsa0JBQWtCO1FBQ2xCLG1FQUFpQixDQUFBO0lBQ25CLENBQUMsRUF6Q1csY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUF5Q3pCO0lBRUQsSUFBWSxhQUtYO0lBTEQsV0FBWSxhQUFhO1FBQ3ZCLHVEQUFPLENBQUE7UUFDUCxxREFBTSxDQUFBO1FBQ04sbURBQUssQ0FBQTtRQUNMLG1EQUFLLENBQUE7SUFDUCxDQUFDLEVBTFcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFLeEIifQ==