
const main_server = require('./src/server');
const yaml = require('js-yaml');
const fs = require('fs');
const grpc = require('grpc');
const {program} = require('commander');
// import * as main_server from './src/server';

// import * as yaml from 'js-yaml';
// import * as fs from 'fs';
// import * as grpc from 'grpc';

if (require.main === module) {
    // If this is run as a script, start a server on an unused port
    program
        .option('-c, --configFile <file>' , 'configuration file for running server' , './config.yaml')
        .parse(process.argv);

    var server = main_server.getServer();
    var doc = yaml.safeLoad(
        fs.readFileSync(program.configFile, 'utf8')
    );
    console.log('doc\n',doc);
    server.bind(
        `${doc['api_server']['ip']}:${doc['api_server']['port']}`,
        grpc.ServerCredentials.createInsecure()
    );
    server.start();
    console.log(`server start at ${doc['api_server']['ip']}:${doc['api_server']['port']}`);
}
