import adverbs from "./adverbs";

test("adverbs", () => {
  expect(
    adverbs("The blast completely destroyed the church office.")
  ).toStrictEqual([
    {
      start: 10,
      end: 30,
      input: "completely destroyed",
      suggestion: "avoid adverbs",
    },
  ]);
});
