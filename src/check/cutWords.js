export default function cutWords(input) {
  input = input.toLowerCase();

  let words = {
    currently: 1,
    actually: 1,
    really: 1,
    "so-called": 1,
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
        suggestion: `cut`,
      };

      errors.push(error);

      lastEnd = end;
      start = input.indexOf(word, lastEnd);
    }
  }
  return errors;
}
