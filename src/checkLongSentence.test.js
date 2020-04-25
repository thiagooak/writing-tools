import checkLongSentence from "./checkLongSentence";

test("short sentence", () => {
  expect(
    checkLongSentence(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum sollicitudin ligula, fringilla porta tellus tincidunt id."
    )
  ).toStrictEqual([]);
});

test("long sentence", () => {
  expect(
    checkLongSentence(
      "Nam rutrum sollicitudin ligula, fringilla porta tellus tincidunt id nam rutrum sollicitudin ligula, fringilla porta tellus tincidunt id."
    )
  ).toStrictEqual([
    {
      start: 0,
      end: 135,
      input:
        "Nam rutrum sollicitudin ligula, fringilla porta tellus tincidunt id nam rutrum sollicitudin ligula, fringilla porta tellus tincidunt id",
      suggestion: "can you shorten this sentence?",
    },
  ]);
});

test("long sentence preceeded by newlines", () => {
  expect(
    checkLongSentence(
      "abcd.\n\n\nNam rutrum sollicitudin ligula, fringilla porta tellus tincidunt id nam rutrum sollicitudin ligula, fringilla porta tellus tincidunt id."
    )
  ).toStrictEqual([
    {
      start: 8,
      end: 146,
      input:
        "\n\n\nNam rutrum sollicitudin ligula, fringilla porta tellus tincidunt id nam rutrum sollicitudin ligula, fringilla porta tellus tincidunt id",
      suggestion: "can you shorten this sentence?",
    },
  ]);
});
