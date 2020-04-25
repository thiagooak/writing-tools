import errorsToMarkers from "./marker";

test("convert errors to marker", () => {
  expect(
    errorsToMarkers([
      { start: 5, end: 16, input: "demonstrate", suggestion: "simplify: show" },
      { start: 5, end: 16, input: "demonstrate", suggestion: "something else" },
    ])
  ).toStrictEqual({
    "5": [
      { suggestion: "simplify: show", type: "start" },
      { suggestion: "something else", type: "start" },
    ],
    "16": [{ type: "end" }, { type: "end" }],
  });
});
