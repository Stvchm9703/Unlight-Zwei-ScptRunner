/* eslint-disable */

/**  ----------------------------------------------------
 ANCHOR EventHookPhase.proto
 SECTION: EventHookPhase.proto
 */
export const EventHookPhase = {
  /** gameset_start -  start gameset
   */
  gameset_start: 0 as const,
  /** start_turn_phase -  -- turn lifecycle
   */
  start_turn_phase: 1 as const,
  /** refill_action_card_phase -  ---- Draw phase (ddp)
   */
  refill_action_card_phase: 2 as const,
  /** move_card_drop_phase -    refill_event_card_phase                        = 3;
   ---- Move phase
   */
  move_card_drop_phase: 3 as const,
  determine_move_phase: 4 as const,
  finish_move_phase: 5 as const,
  chara_change_phase: 6 as const,
  determine_chara_change_phase: 7 as const,
  /** attack_card_drop_phase -  ---- Atk/Def Phase 
   */
  attack_card_drop_phase: 8 as const,
  defence_card_drop_phase: 9 as const,
  determine_battle_point_phase: 10 as const,
  /** battle_result_phase - roll dice
   */
  battle_result_phase: 11 as const,
  damage_phase: 12 as const,
  /** dead_chara_change_phase -  --- Any Raise Phase
   */
  dead_chara_change_phase: 13 as const,
  determine_dead_chara_change_phase: 14 as const,
  change_initiative_phase: 15 as const,
  /** finish_turn_phase - / -- endof turn lifecycle
   */
  finish_turn_phase: 16 as const,
  /** gameset_end - / endof game set
   */
  gameset_end: 17 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): EventHookPhase {
    switch (object) {
      case 0:
      case "gameset_start":
        return EventHookPhase.gameset_start;
      case 1:
      case "start_turn_phase":
        return EventHookPhase.start_turn_phase;
      case 2:
      case "refill_action_card_phase":
        return EventHookPhase.refill_action_card_phase;
      case 3:
      case "move_card_drop_phase":
        return EventHookPhase.move_card_drop_phase;
      case 4:
      case "determine_move_phase":
        return EventHookPhase.determine_move_phase;
      case 5:
      case "finish_move_phase":
        return EventHookPhase.finish_move_phase;
      case 6:
      case "chara_change_phase":
        return EventHookPhase.chara_change_phase;
      case 7:
      case "determine_chara_change_phase":
        return EventHookPhase.determine_chara_change_phase;
      case 8:
      case "attack_card_drop_phase":
        return EventHookPhase.attack_card_drop_phase;
      case 9:
      case "defence_card_drop_phase":
        return EventHookPhase.defence_card_drop_phase;
      case 10:
      case "determine_battle_point_phase":
        return EventHookPhase.determine_battle_point_phase;
      case 11:
      case "battle_result_phase":
        return EventHookPhase.battle_result_phase;
      case 12:
      case "damage_phase":
        return EventHookPhase.damage_phase;
      case 13:
      case "dead_chara_change_phase":
        return EventHookPhase.dead_chara_change_phase;
      case 14:
      case "determine_dead_chara_change_phase":
        return EventHookPhase.determine_dead_chara_change_phase;
      case 15:
      case "change_initiative_phase":
        return EventHookPhase.change_initiative_phase;
      case 16:
      case "finish_turn_phase":
        return EventHookPhase.finish_turn_phase;
      case 17:
      case "gameset_end":
        return EventHookPhase.gameset_end;
      case -1:
      case "UNRECOGNIZED":
      default:
        return EventHookPhase.UNRECOGNIZED;
    }
  },
  toJSON(object: EventHookPhase): string {
    switch (object) {
      case EventHookPhase.gameset_start:
        return "gameset_start";
      case EventHookPhase.start_turn_phase:
        return "start_turn_phase";
      case EventHookPhase.refill_action_card_phase:
        return "refill_action_card_phase";
      case EventHookPhase.move_card_drop_phase:
        return "move_card_drop_phase";
      case EventHookPhase.determine_move_phase:
        return "determine_move_phase";
      case EventHookPhase.finish_move_phase:
        return "finish_move_phase";
      case EventHookPhase.chara_change_phase:
        return "chara_change_phase";
      case EventHookPhase.determine_chara_change_phase:
        return "determine_chara_change_phase";
      case EventHookPhase.attack_card_drop_phase:
        return "attack_card_drop_phase";
      case EventHookPhase.defence_card_drop_phase:
        return "defence_card_drop_phase";
      case EventHookPhase.determine_battle_point_phase:
        return "determine_battle_point_phase";
      case EventHookPhase.battle_result_phase:
        return "battle_result_phase";
      case EventHookPhase.damage_phase:
        return "damage_phase";
      case EventHookPhase.dead_chara_change_phase:
        return "dead_chara_change_phase";
      case EventHookPhase.determine_dead_chara_change_phase:
        return "determine_dead_chara_change_phase";
      case EventHookPhase.change_initiative_phase:
        return "change_initiative_phase";
      case EventHookPhase.finish_turn_phase:
        return "finish_turn_phase";
      case EventHookPhase.gameset_end:
        return "gameset_end";
      default:
        return "UNKNOWN";
    }
  },
}

export type EventHookPhase = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | -1;

export const EventHookType = {
  Instant: 0 as const,
  Before: 1 as const,
  Proxy: 2 as const,
  After: 3 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): EventHookType {
    switch (object) {
      case 0:
      case "Instant":
        return EventHookType.Instant;
      case 1:
      case "Before":
        return EventHookType.Before;
      case 2:
      case "Proxy":
        return EventHookType.Proxy;
      case 3:
      case "After":
        return EventHookType.After;
      case -1:
      case "UNRECOGNIZED":
      default:
        return EventHookType.UNRECOGNIZED;
    }
  },
  toJSON(object: EventHookType): string {
    switch (object) {
      case EventHookType.Instant:
        return "Instant";
      case EventHookType.Before:
        return "Before";
      case EventHookType.Proxy:
        return "Proxy";
      case EventHookType.After:
        return "After";
      default:
        return "UNKNOWN";
    }
  },
}

export type EventHookType = 0 | 1 | 2 | 3 | -1;
