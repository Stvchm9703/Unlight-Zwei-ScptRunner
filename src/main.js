
var messages = require('./proto_js/message_pb');
var dataStruct = require('./proto_js/Data_pb');
var services = require('./proto_grpc/service_grpc_pb');

var skill_func_index = require('./skill/skill_data.json');


var fs = require('fs');
var parseArgs = require('minimist');
var path = require('path');
var _ = require('lodash');
var grpc = require('grpc');


function _SkillCalculate(call) {
    var tar_skill = [];
    // call : SESkillCalReq
    var funcBind = call.featList;
    console.log(funcBind);
    funcBind.forEach(element => {
        console.log(element);
        let exist = _.filter(skill_func_index, function (o) {
            return o['feat_no'] == element.featNo &&
                o['id'] == element.id;
        });
        // if () {
        //     let 
        // }
    });
}

function getServer() {
    var server = new grpc.Server();
    server.addService(services.SkillEffectServiceService, {
        skillCalculate: _SkillCalculate,

    });
    return server;
}

if (require.main === module) {
    // If this is run as a script, start a server on an unused port
    var routeServer = getServer();
    routeServer.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    // var argv = parseArgs(process.argv, {
    //     string: 'db_path'
    // });
    // fs.readFile(path.resolve(argv.db_path), function (err, data) {
    //     if (err) throw err;
    //     // Transform the loaded features to Feature objects
    //     feature_list = _.map(JSON.parse(data), function (value) {
    //         var feature = new messages.Feature();
    //         feature.setName(value.name);
    //         var location = new messages.Point();
    //         location.setLatitude(value.location.latitude);
    //         location.setLongitude(value.location.longitude);
    //         feature.setLocation(location);
    //         return feature;
    //     });
    //     routeServer.start();
    // });
}

exports.getServer = getServer;