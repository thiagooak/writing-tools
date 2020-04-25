import cutWords from "./cutWords";

test("so-called", () => {
  expect(cutWords("The so-called person")).toStrictEqual([
    { start: 4, end: 13, input: "so-called", suggestion: "cut" },
  ]);
});
