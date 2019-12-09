# Unlight-Zwei-ScptRunner
Unlight Zwei - Script Interpreter Runner 



remark : flatbuffer csharp

```bash
flatc -n SaveSchema.txt --gen-onefile 
flatc -T -o script\ FlatBuff\define.fbs
```

golang run wasm 
https://github.com/wasmerio/go-ext-wasm

typescript(assemblyscript) build wasm 
https://docs.assemblyscript.org/examples
https://www.itread01.com/content/1551036021.html
https://hacks.mozilla.org/2018/10/calls-between-javascript-and-webassembly-are-finally-fast-%F0%9F%8E%89/


C# related:
https://github.com/sebastienros/jint

C# run wasm 
https://github.com/migueldeicaza/WasmerSharp


rust wasm 
https://crates.io/crates/wasm-bindgen
https://github.com/wasmerio/wasmer/tree/master/lib/runtime


rust-grpc
https://github.com/tikv/grpc-rs


---
TODO :
1. grpc module
   1. `protoc  -I ./proto/  --go_out=plugins=grpc:proto ./proto/scriptRunner.proto`
2. bson file 