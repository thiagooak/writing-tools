import verbQualifiers from "./verbQualifiers";

test("sort of", () => {
  expect(verbQualifiers("He sort of had done x")).toStrictEqual([
    {
      start: 3,
      end: 10,
      input: "sort of",
      suggestion: "avoid verb qualifiers",
    },
  ]);
});
