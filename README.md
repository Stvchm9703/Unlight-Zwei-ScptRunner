gRPC in 3 minutes (Node.js)
===========================

PREREQUISITES
-------------

- `node`: This requires Node 0.12.x or greater.

INSTALL
-------

   ```sh
   $ # Get the gRPC repository
   $ export REPO_ROOT=grpc # REPO root can be any directory of your choice
   $ git clone -b $(curl -L https://grpc.io/release) https://github.com/grpc/grpc $REPO_ROOT
   $ cd $REPO_ROOT

   $ cd examples/node
   $ npm install
   ```

TRY IT!
-------

There are two ways to generate the code needed to work with protocol buffers in Node.js - one approach uses [Protobuf.js](https://github.com/dcodeIO/ProtoBuf.js/) to dynamically generate the code at runtime, the other uses code statically generated using the protocol buffer compiler `protoc`. The examples behave identically, and either server can be used with either client.

 - Run the server

   ```sh
   $ # from this directory
   $ node ./dynamic_codegen/greeter_server.js &
   $ # OR
   $ node ./static_codegen/greeter_server.js &
   ```

 - Run the client

   ```sh
   $ # from this directory
   $ node ./dynamic_codegen/greeter_client.js
   $ # OR
   $ node ./static_codegen/greeter_client.js
   ```

TUTORIAL
--------
You can find a more detailed tutorial in [gRPC Basics: Node.js][]

[Install gRPC Node]:../../src/node
[gRPC Basics: Node.js]:https://grpc.io/docs/tutorials/basic/node.html



protoc ^
  -I=./src/proto^
  --js_out=import_style=commonjs,binary:./src/proto_js/ ^
  --js_grpc_out=./src/proto_js/ ^
  ./src/proto/*.proto


grpc_tools_node_protoc  -I=./src/proto/ --js_out=import_style=commonjs,binary:./src/proto_js --grpc_out=./src/proto_js/ --plugin=protoc-gen-grpc=`where grpc_tools_node_protoc_plugin` ./src/proto/*.proto


