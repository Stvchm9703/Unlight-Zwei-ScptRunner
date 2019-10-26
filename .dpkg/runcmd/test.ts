// import { test, runIfMain } from "A:/deno_dev/std/testing/mod.ts";
// import { assertEquals } from "A:/deno_dev/std/testing/asserts.ts";

import { test, runIfMain } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

test(function t1() {
    assertEquals("hello", "hello");
});

test(function t2() {
    assertEquals("world", "world");
});

runIfMain(import.meta);

console.log("help");