import checkLongWords from "./checkLongWords";

test("however", () => {
  expect(checkLongWords("This demonstrates it")).toStrictEqual([
    { start: 5, end: 16, input: "demonstrate", suggestion: "simplify: show" },
  ]);
});
