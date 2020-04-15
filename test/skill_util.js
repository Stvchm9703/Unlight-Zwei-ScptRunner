const util = require('../src/skill/util');
const data_proto = require('../src/proto_js/Data_pb');
const protoc = require('protobufjs');
var jspb = require('google-protobuf');
var assert = require('assert');
describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
    });
});

describe('util', () => {
    describe('CardCondStrConv', () => {
        it('test:1,\t LM:S5+', () => {
            //  LM:S5+
            //  * range : long, middle
            //                 * action card: 
            //  * sword : more or equal 5

            let expected = new data_proto.SkillSet();
            expected.addCondRange(data_proto.RangeType.LONG);
            expected.addCondRange(data_proto.RangeType.MIDDLE);
            let tmppm = new data_proto.SkillCardCond();
            tmppm.setType(data_proto.EventCardType.ATTACK);
            tmppm.setVal(5);
            tmppm.setCompare(data_proto.SignEq.GREATER);
            expected.addCondCard(tmppm);
            // expected.add
            console.log('expected----------------');

            console.log(expected.toObject(false));

            console.log();
            console.log('test----------------');

            let test_unit = util.CardCondStrConv('LM:S5+');
            console.log(test_unit.toObject(false));

            assert.deepEqual(test_unit.toObject(false), expected.toObject(false));
        });
        it('test:2\t LMS:D1*2', () => {
            /**   LMS:D1*2
            *   range : long, middle, short
            *   action card:
            *       defence : equal 1
            *       defence : equal 1
            */

            let expected = new data_proto.SkillSet();
            expected.addCondRange(data_proto.RangeType.LONG);
            expected.addCondRange(data_proto.RangeType.MIDDLE);
            expected.addCondRange(data_proto.RangeType.SHORT);
            let tmppm = new data_proto.SkillCardCond();
            tmppm.setType(data_proto.EventCardType.DEFENCE);
            tmppm.setVal(1);
            tmppm.setCompare(data_proto.SignEq.EQUAL);
            expected.addCondCard(tmppm);
            expected.addCondCard(tmppm);

            // expected.add
            console.log('expected----------------');

            console.log(expected.toObject(false));

            console.log();
            console.log('test----------------');

            let test_unit = util.CardCondStrConv('LMS:D1*2');
            console.log(test_unit.toObject(false));

            assert.deepEqual(test_unit.toObject(false), expected.toObject(false));
        });
        it('test:3\t LMS:E2+,M0', () => {
            /**   LMS:E2+,M0
            *   range : long, middle, short
            *   action card: 
            *       star : more or equal: 2 
            *       move : equal 0
            */
            let expected = new data_proto.SkillSet();
            expected.addCondRange(data_proto.RangeType.LONG);
            expected.addCondRange(data_proto.RangeType.MIDDLE);
            expected.addCondRange(data_proto.RangeType.SHORT);

            let tmppm = new data_proto.SkillCardCond();
            tmppm.setType(data_proto.EventCardType.STAR);
            tmppm.setVal(2);
            tmppm.setCompare(data_proto.SignEq.GREATER);
            expected.addCondCard(tmppm);

            let tmppm1 = new data_proto.SkillCardCond();
            tmppm1.setType(data_proto.EventCardType.MOVE);
            tmppm1.setVal(0);
            tmppm1.setCompare(data_proto.SignEq.EQUAL);
            expected.addCondCard(tmppm1);
            // expected.add
            console.log('expected----------------');

            console.log(expected.toObject(false));

            console.log();
            console.log('test----------------');

            let test_unit = util.CardCondStrConv('LMS:E2+,M0');
            console.log(test_unit.toObject(false));

            assert.deepEqual(test_unit.toObject(false), expected.toObject(false));
        });
    });

    describe('CardTotalValCalcSet', () => {
        it('test:1, ', () => {
            let test_sample = [];
            let sample1 = new data_proto.EventCard();
            sample1.setUpOption(data_proto.EventCardType.STAR);
            sample1.setUpVal(2);
            sample1.setDownOption(data_proto.EventCardType.NULL);
            sample1.setIsInvert(true);
            test_sample.push(sample1);

            let sample2 = new data_proto.EventCard();
            sample2.setUpOption(data_proto.EventCardType.STAR);
            sample2.setUpVal(2);
            sample2.setDownOption(data_proto.EventCardType.MOVE);
            sample2.setDownVal(1);
            sample2.setIsInvert(true);
            test_sample.push(sample2);

            test_sample.forEach(e => console.log(e.toObject()));
            let expected_sample = { 'star': 2, 'attack': 0, 'defence': 0, 'move': 1, 'gun': 0, };

            let result = util.CardTotalValCalcSet(test_sample);
            assert.deepEqual(result, expected_sample);

        });
    });
});