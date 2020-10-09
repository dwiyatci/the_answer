import { assertEquals } from "https://deno.land/std@0.74.0/testing/asserts.ts";
import { theAnswer } from "./the_answer.ts";

Deno.test("theAnswerToTheUltimateQuestion", () => {
  assertEquals(theAnswer, 42);
});
