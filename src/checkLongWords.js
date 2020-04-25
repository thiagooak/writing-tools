export default function checkLongWords(input) {
  input = input.toLowerCase();

  let words = {
    approximately: "about",
    demonstrate: "show",
    establish: "set up",
    expenditure: "spending",
    facility: "plant, club, warehouse, etc",
    following: "after",
    however: "but",
    manufacture: "make",
    participate: "take part",
    permit: "let",
    "prior to": "before",
    sufficient: "enough",
    utilise: "use",
  };

  let errors = [];

  for (const word in words) {
    let lastEnd = 0;
    let start = input.indexOf(word, lastEnd);

    while (start !== -1) {
      const end = start + word.length;
      const error = {
        input: word,
        start: start,
        end: end,
        suggestion: `simplify: ${words[word]}`,
      };

      errors.push(error);

      lastEnd = end;
      start = input.indexOf(word, lastEnd);
    }
  }
  return errors;
}
