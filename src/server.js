
var services = require('./proto_grpc/service_grpc_pb');
var grpc = require('grpc');
const sc = require('./service/SkillCalculate');
const dc = require('./service/DiceCalculate');


function getServer() {
    var server = new grpc.Server();
    server.addService(services.SkillEffectServiceService, {
        skillCalculate: sc.SkillCalculate,
        diceCalculate: dc.DiceCalculate,
    });
    return server;
}

if (require.main === module) {
    // If this is run as a script, start a server on an unused port
    var routeServer = getServer();
    
    routeServer.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    routeServer.start();
}

exports.getServer = getServer;