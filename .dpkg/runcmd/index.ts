// https://deno.land/std/examples/colors.ts
import { bgBlue, red, bold, italic } from "https://deno.land/std/fmt/colors.ts";

console.log(bgBlue(italic(red(bold("Hello world!")))));