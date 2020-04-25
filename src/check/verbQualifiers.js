export default function verbQualifiers(input) {
  input = input.toLowerCase();

  let words = {
    "sort of": 1,
    "tend to": 1,
    "kind of": 1,
    "must have": 1,
    "seemed to": 1,
    "could have": 1,
    "used to": 1,
    "begin to": 1,
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
        suggestion: `avoid verb qualifiers`,
      };

      errors.push(error);

      lastEnd = end;
      start = input.indexOf(word, lastEnd);
    }
  }
  return errors;
}
