import { test, runIfMain } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { connect } from "https://denopkg.com/keroxp/deno-redis/redis.ts";

test(function TestRedisConnection(){
  const redis =  connect({
    hostname: "127.0.0.1",
    port: 6379
  });
  const ok = redis.set("hoge", "fuga");
  const fuga = redis.get("hoge");
})
