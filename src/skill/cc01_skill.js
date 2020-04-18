
// #node cc01_skill.js 
/** auto-gen from ulz/data/bin/adjust_skill.js 
* generate by : Steven Chm
* generate at : April 15th 2020, 8:54:20 am
* !please manually modify the skill function
*/
const util = require('./util');
const _ = require('lodash');
const dataStruct = require('../proto_ts/Data_pb');
const eventStruct = require('../proto_ts/EventHookPhase_pb');

/**
* Character binded  : cc01
* Skill feat_no     : 2 
* Skill feat_name   : precisionMarksmanship
*   @function {precisionMarksmanship}
*   @param {totalVal} $total_val
*   @param {number} $pow_val
*   @returns {totalVal, effect}
*/
var precisionMarksmanship = function ($total_val, $pow_val) {
  let _skill_id_ = 2;
  var totalVal = _.clone($total_val);
  var effectList = [];
  // * Code the skill below
  /**
      # ------------------
      # 精密射撃
      # ------------------
      # 精密射撃が使用されたかのチェック
      def check_aiming_feat
          # カードをON情報をリセットしてから
          @cc.owner.reset_feat_on_cards(FEAT_AIMING)
          # テーブルにアクションカードがおかれていてかつ、距離が近距離の時
          check_feat(FEAT_AIMING)
          # ポイントの変更をチェック
          @cc.owner.point_check(Entrant::POINT_CHECK_BATTLE)
      end
      regist_event CheckRemoveAimingFeatEvent
      regist_event CheckAddAimingFeatEvent
      regist_event CheckRotateAimingFeatEvent

      # 精密射撃が使用される
      def use_aiming_feat()
          if @feats_enable[FEAT_AIMING]
          @cc.owner.tmp_power+=Feat.pow(@feats[FEAT_AIMING])
          end
      end
      regist_event UseAimingFeatEvent

      # 精密射撃が使用終了
      def finish_aiming_feat()
          if @feats_enable[FEAT_AIMING]
          @feats_enable[FEAT_AIMING] = false
          use_feat_event(@feats[FEAT_AIMING])
          end
      end
      regist_event FinishAimingFeatEvent
      # ------------------
  */

  totalVal['gun'] += $pow_val;
  totalVal['attack'] += $pow_val;

  return { totalVal, effectList };
}
exports.precisionMarksmanship = precisionMarksmanship;

/**
* Character binded  : cc01
* Skill feat_no     : 3 
* Skill feat_name   : torpedoAttack
*   @function {torpedoAttack}
*   @param {totalVal} $total_val
*   @param {number} $pow_val
*   @returns {totalVal, effect}
*/
var torpedoAttack = function ($total_val, $pow_val) {
  let _skill_id_ = 3;
  var totalVal = _.clone($total_val);
  var effectList = [];
  // * Code the skill below
  /**
      # ------------------
      # 雷撃
      # ------------------
      # 雷撃が使用されたかのチェック
      def check_strike_feat
          # カードをON情報をリセットしてから
          @cc.owner.reset_feat_on_cards(FEAT_STRIKE)
          # テーブルにアクションカードがおかれていてかつ、距離が近距離の時
          check_feat(FEAT_STRIKE)
          # ポイントの変更をチェック
          @cc.owner.point_check(Entrant::POINT_CHECK_BATTLE)
      end
      regist_event CheckRemoveStrikeFeatEvent
      regist_event CheckAddStrikeFeatEvent
      regist_event CheckRotateStrikeFeatEvent
  
      # 雷撃が使用される
      # 有効の場合必殺技IDを返す
      def use_strike_feat()
          if @feats_enable[FEAT_STRIKE]
          @cc.owner.tmp_power+=Feat.pow(@feats[FEAT_STRIKE])
          end
      end
      regist_event UseStrikeFeatEvent
  
      # 精密射撃が使用終了
      def finish_strike_feat()
          if @feats_enable[FEAT_STRIKE]
          use_feat_event(@feats[FEAT_STRIKE])
          end
      end
      regist_event FinishStrikeFeatEvent
  
      # 雷撃が使用される(ダメージ時)
      # 有効の場合必殺技IDを返す
      def use_strike_feat_damage()
          if @feats_enable[FEAT_STRIKE]
          if duel.tmp_damage>0
              # 手持ちのカードを複製してシャッフル
              aca =foe.cards.shuffle
              # ダメージの分だけカードを捨てる
              duel.tmp_damage.times{ |a| discard(foe, aca[a]) if aca[a] }
          end
          @feats_enable[FEAT_STRIKE] = false
          end
      end
      regist_event UseStrikeFeatDamageEvent
  */
  totalVal['attack'] += $pow_val
  // after-effect 
  let funcBind = function (selfP, duel) {
    if (duel.damage > 0) {
      duel.cardInHand -= duel.damage;
    }
  }
  let ef1 = new dataStruct.EffectResult();
  ef1.setBindingFunc(funcBind.toString());
  ef1.setSkillId(_skill_id_);
  ef1.setAssignFrom('cc01skill_intelligentTactics');
  let trig_time = util.EffectTimingInit(
    eventStruct.EventHookPhase.DAMAGE_PHASE,
    eventStruct.EventHookType.BEFORE,
    5
  );


  ef1.setTriggerTime(trig_time);
  ef1.setEndTime(trig_time);
  ef1.setTarCard(-1);
  ef1.setTarSide(dataStruct.PlayerSide.DUELER);
  ef1.setRemainCd(1);

  effectList.push(ef1);
  return { totalVal, effectList };
}
exports.torpedoAttack = torpedoAttack;

/**
* Character binded  : cc01
* Skill feat_no     : 5 
* Skill feat_name   : thornForest
*   @function {thornForest}
*   @param {totalVal} $total_val
*   @param {number} $pow_val
*   @returns {totalVal, effect}
*/
var thornForest = function ($total_val, $pow_val) {
  let _skill_id_ = 5;
  var totalVal = _.clone($total_val);
  var effectList = [];
  // * Code the skill below
  /**
  
       # ------------------
      # 茨の森
       S:D2+,E2+
      # ------------------
      # 茨の森が使用されたかのチェック
      def check_thorn_feat
        # カードをON情報をリセットしてから
          @cc.owner.reset_feat_on_cards(FEAT_THORN)
        # テーブルにアクションカードがおかれていてかつ、距離が近距離の時
        check_feat(FEAT_THORN)
        # ポイントの変更をチェック
        @cc.owner.point_check(Entrant::POINT_CHECK_BATTLE)
      end
      regist_event CheckRemoveThornFeatEvent
      regist_event CheckAddThornFeatEvent
      regist_event CheckRotateThornFeatEvent
  
      # 茨の森が使用される
      # 有効の場合必殺技IDを返す
      def use_thorn_feat()
        if @feats_enable[FEAT_THORN]
          @cc.owner.tmp_power+=Feat.pow(@feats[FEAT_THORN])
        end
      end
      regist_event UseThornFeatEvent
  
  
      # 茨の森が使用終了
      def finish_thorn_feat()
        if @feats_enable[FEAT_THORN]
          use_feat_event(@feats[FEAT_THORN])
        end
      end
      regist_event FinishThornFeatEvent
  
      # 茨の森が使用される(ダメージ時)
      # 有効の場合必殺技IDを返す
      def use_thorn_feat_damage()
        if @feats_enable[FEAT_THORN]
          # ダメージがマイナス（ダイスの結果防御点の方が上回った場合）
          if duel.tmp_damage <= 0 && foe.tmp_power > 0
            duel.first_entrant.damaged_event(attribute_damage(ATTRIBUTE_COUNTER, foe, duel.tmp_dice_heads_def - duel.tmp_dice_heads_atk)) if (duel.tmp_dice_heads_def - duel.tmp_dice_heads_atk) > 0
          end
          @feats_enable[FEAT_THORN] = false
        end
      end
      regist_event UseThornFeatDamageEvent
       */

  // instant add 
  totalVal['defence'] += $pow_val;

  // after-effect 
  let funcBind = function (selfP, duel) {
    if (selfP.damage <= 0 && (duel.attack > 0 || duel.gun > 0)) {
      return selfP.dice_def - duel.dice_atk;
    }
  }

  let ef1 = new dataStruct.EffectResult();
  ef1.setBindingFunc(funcBind.toString());
  ef1.setSkillId(_skill_id_);
  ef1.setAssignFrom('cc01skill_intelligentTactics');
  let trig_time = util.EffectTimingInit(
    eventStruct.EventHookPhase.DAMAGE_PHASE,
    eventStruct.EventHookType.BEFORE,
    5
  );


  ef1.setTriggerTime(trig_time);
  ef1.setEndTime(trig_time);
  ef1.setTarCard(-1);
  ef1.setTarSide(dataStruct.PlayerSide.DUELER);
  ef1.setRemainCd(1);

  effectList.push(ef1);

  return { totalVal, effectList };
}
exports.thornForest = thornForest;

/**
* Character binded  : cc01
* Skill feat_no     : 35 
* Skill feat_name   : intelligentTactics
*   @function {intelligentTactics}
*   @param {totalVal} $total_val
*   @param {number} $pow_val
*   @returns {totalVal, effect}
*/
var intelligentTactics = function ($total_val, $pow_val) {
  let _skill_id_ = 35;
  var totalVal = _.clone($total_val);
  var effectList = [];
  // * Code the skill below
  /**
  # ------------------
  # 知略
  # ------------------
  # 知略が使用されたかのチェック
  def check_craftiness_feat
    # カードをON情報をリセットしてから
    @cc.owner.reset_feat_on_cards(FEAT_CRAFTINESS)
    # テーブルにアクションカードがおかれている
    check_feat(FEAT_CRAFTINESS)
    # ポイントの変更をチェック
    @cc.owner.point_check(Entrant::POINT_CHECK_MOVE)
  end
  regist_event CheckRemoveCraftinessFeatEvent
  regist_event CheckAddCraftinessFeatEvent
  regist_event CheckRotateCraftinessFeatEvent

  # 知略を使用
  def finish_craftiness_feat()
    if @feats_enable[FEAT_CRAFTINESS]
      use_feat_event(@feats[FEAT_CRAFTINESS])
      @feats_enable[FEAT_CRAFTINESS] = false
      @cc.owner.special_dealed_event(duel.deck.draw_cards_event(Feat.pow(@feats[FEAT_CRAFTINESS])).each{ |c| @cc.owner.dealed_event(c)})
    end
  end
  regist_event FinishCraftinessFeatEvent
  */
  let funcBind = function (selfP, duel) {
    selfP.cardInHand += $pow_val;
  }

  let ef1 = new dataStruct.EffectResult();
  ef1.setBindingFunc(funcBind.toString().replace('$pow_val', $pow_val));
  ef1.setSkillId(_skill_id_);
  ef1.setAssignFrom('cc01skill_intelligentTactics');
  let trig_time = util.EffectTimingInit(
    eventStruct.EventHookPhase.MOVE_CARD_DROP_PHASE,
    eventStruct.EventHookType.AFTER,
    10
  );
  ef1.setTriggerTime(trig_time);

  let trig_time1 = util.EffectTimingInit(
    eventStruct.EventHookPhase.DETERMINE_MOVE_PHASE,
    eventStruct.EventHookType.BEFORE,
    5
  );
  ef1.setEndTime(trig_time1);

  ef1.setTarCard(-1);
  ef1.setTarSide(dataStruct.PlayerSide.DUELER);
  ef1.setRemainCd(1);
  return { totalVal, effectList };
}
exports.intelligentTactics = intelligentTactics;

// export this module 
// !endl
