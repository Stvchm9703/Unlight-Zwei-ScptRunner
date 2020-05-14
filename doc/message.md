# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [Protocol Documentation](#protocol-documentation)
  - [Table of Contents](#table-of-contents)
  - [message.proto](#messageproto)
    - [DiceResultSet](#diceresultset)
    - [SEDiceCalReq](#sedicecalreq)
    - [SEDiceCalResp](#sedicecalresp)
    - [SEEffectCalReq](#seeffectcalreq)
    - [SEEffectCalResp](#seeffectcalresp)
    - [SESkillCalReq](#seskillcalreq)
    - [SESkillCalResp](#seskillcalresp)
  - [Scalar Value Types](#scalar-value-types)
  
- [Scalar Value Types](#scalar-value-types)



<a name="message.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## message.proto



<a name="ULZProto.DiceResultSet"></a>

### DiceResultSet
randomlise result from 0 to system defined dice face (default:6)
e.g. income request 1D6, which mean roll 1 time of 6-face dice 

| Field | Type            | Label    | Description       |
| ----- | --------------- | -------- | ----------------- |
| value | [int32](#int32) | repeated | result dice value |






<a name="ULZProto.SEDiceCalReq"></a>

### SEDiceCalReq
DiceCalculation Request


| Field         | Type                                   | Label    | Description                            |
| ------------- | -------------------------------------- | -------- | -------------------------------------- |
| income_dice   | [int32](#int32)                        |          | income atk/def point as number of dice |
| act           | [int32](#int32)                        |          | number of rolling time                 |
| effect_result | [EffectResult](#ULZProto.EffectResult) | repeated | involved effect-result                 |






<a name="ULZProto.SEDiceCalResp"></a>

### SEDiceCalResp



| Field       | Type                                     | Label    | Description          |
| ----------- | ---------------------------------------- | -------- | -------------------- |
| dice_result | [DiceResultSet](#ULZProto.DiceResultSet) | repeated | number of result set |


<a name="ULZProto.SEEffectCalReq"></a>

### SEEffectCalReq
for special mounted function , by this service function, to execute the mounted function in `gameset_instant.effect_counter`


| Field           | Type                                   | Label | Description                                             |
| --------------- | -------------------------------------- | ----- | ------------------------------------------------------- |
| id              | [string](#string)                      |       | request instant id, for debug trace                     |
| from_time       | [EffectTiming](#ULZProto.EffectTiming) |       | Effect Timming of starting time, see common data struct |
| to_time         | [EffectTiming](#ULZProto.EffectTiming) |       | Effect Timming of ending time, see common data struct   |
| gameset_instant | [GameDataSet](#ULZProto.GameDataSet)   |       | GameSet instant                                         |
| from_cli        | [string](#string)                      |       | income client id, for debug trace                       |
| remark          | [string](#string)                      |       | remark, extra field for future usage                    |






<a name="ULZProto.SEEffectCalResp"></a>

### SEEffectCalResp
response message after execution.


| Field          | Type                                   | Label    | Description                                               |
| -------------- | -------------------------------------- | -------- | --------------------------------------------------------- |
| id             | [string](#string)                      |          | income request id, for debug trace                        |
| from_cli       | [string](#string)                      |          | income client id, for debug trace                         |
| gameset_result | [GameDataSet](#ULZProto.GameDataSet)   |          | GameSet after executed                                    |
| result_info    | [string](#string)                      | repeated | involved mounted-function 's information during execution |
| from_time      | [EffectTiming](#ULZProto.EffectTiming) |          | Effect Timming of starting time, see common data struct   |
| to_time        | [EffectTiming](#ULZProto.EffectTiming) |          | Effect Timming of ending time, see common data struct     |






<a name="ULZProto.SESkillCalReq"></a>

### SESkillCalReq
Skill Calculation Request, for supporting GameDuel service to calclate the Character's Skill 

| Field       | Type                                     | Label    | Description                               |
| ----------- | ---------------------------------------- | -------- | ----------------------------------------- |
| income_card | [EventCard](#ULZProto.EventCard)         | repeated | the event card that player placed outside |
| feat        | [SkillSet](#ULZProto.SkillSet)           | repeated | Feat skill that involved                  |
| from_cli    | [string](#string)                        |          | income client id, for debug trace         |
| targ_type   | [EventCardType](#ULZProto.EventCardType) |          | request point for calculation             |




<a name="ULZProto.SESkillCalResp"></a>

### SESkillCalResp

Skill Calculation Response, return message after calculate the triggered skill. 

| Field         | Type                                     | Label    | Description                        |
| ------------- | ---------------------------------------- | -------- | ---------------------------------- |
| result_val    | [int32](#int32)                          |          | value after calculation            |
| effect_result | [EffectResult](#ULZProto.EffectResult)   | repeated | generated during skill calculation |
| targ_type     | [EventCardType](#ULZProto.EventCardType) |          | targeted value type                |





 

 

 

 



## Scalar Value Types

| .proto Type                    | Notes                                                                                                                                           | C++    | Java       | Python      | Go      | C#         | PHP            | Ruby                           |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---------- | ----------- | ------- | ---------- | -------------- | ------------------------------ |
| <a name="double" /> double     |                                                                                                                                                 | double | double     | float       | float64 | double     | float          | Float                          |
| <a name="float" /> float       |                                                                                                                                                 | float  | float      | float       | float32 | float      | float          | Float                          |
| <a name="int32" /> int32       | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32  | int        | int         | int32   | int        | integer        | Bignum or Fixnum (as required) |
| <a name="int64" /> int64       | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64  | long       | int/long    | int64   | long       | integer/string | Bignum                         |
| <a name="uint32" /> uint32     | Uses variable-length encoding.                                                                                                                  | uint32 | int        | int/long    | uint32  | uint       | integer        | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64     | Uses variable-length encoding.                                                                                                                  | uint64 | long       | int/long    | uint64  | ulong      | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32     | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s.                            | int32  | int        | int         | int32   | int        | integer        | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64     | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s.                            | int64  | long       | int/long    | int64   | long       | integer/string | Bignum                         |
| <a name="fixed32" /> fixed32   | Always four bytes. More efficient than uint32 if values are often greater than 2^28.                                                            | uint32 | int        | int         | uint32  | uint       | integer        | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64   | Always eight bytes. More efficient than uint64 if values are often greater than 2^56.                                                           | uint64 | long       | int/long    | uint64  | ulong      | integer/string | Bignum                         |
| <a name="sfixed32" /> sfixed32 | Always four bytes.                                                                                                                              | int32  | int        | int         | int32   | int        | integer        | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes.                                                                                                                             | int64  | long       | int/long    | int64   | long       | integer/string | Bignum                         |
| <a name="bool" /> bool         |                                                                                                                                                 | bool   | boolean    | boolean     | bool    | bool       | boolean        | TrueClass/FalseClass           |
| <a name="string" /> string     | A string must always contain UTF-8 encoded or 7-bit ASCII text.                                                                                 | string | String     | str/unicode | string  | string     | string         | String (UTF-8)                 |
| <a name="bytes" /> bytes       | May contain any arbitrary sequence of bytes.                                                                                                    | string | ByteString | str         | []byte  | ByteString | string         | String (ASCII-8BIT)            |

