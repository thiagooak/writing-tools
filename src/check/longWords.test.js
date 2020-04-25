import longWords from "./longWords";

test("however", () => {
  expect(longWords("This demonstrates it")).toStrictEqual([
    { start: 5, end: 16, input: "demonstrate", suggestion: "simplify: show" },
  ]);
});
