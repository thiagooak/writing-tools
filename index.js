function checkLongSentence(input) {
  const sentences = input.split(".");

  let longSentences = [];
  let shortSentencesCount = 0;
  let errors = [];

  let lastEnd = 0;
  sentences.forEach((sentence) => {
    if (sentence.split(" ").length >= 18) {
      longSentences.push(sentence);
      let start = input.indexOf(sentence, lastEnd);

      while (input[start].trim() == "" && start < sentence.length) {
        start++; // look for the next next non-white-space char to be the start position
      }

      const end = start + sentence.length;
      const error = {
        input: sentence,
        start: start,
        end: end,
        suggestion: "can you make this sentence shorter?",
      };
      lastEnd = lastEnd;
      errors.push(error);
    } else {
      shortSentencesCount += 1;
    }
  });

  const percentLongSentences =
    (longSentences.length / (shortSentencesCount + longSentences.length)) * 100;

  if (percentLongSentences > 10) {
    return errors;
  }
  return [];
}

function checkLongWords(input) {
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
function runChecks(input) {
  let errors = [];
  errors = errors.concat(checkLongSentence(input), checkLongWords(input));

  let markers = {};
  errors.forEach(function (error) {
    if (markers[error.start] === undefined) {
      markers[error.start] = [];
    }

    if (markers[error.end] === undefined) {
      markers[error.end] = [];
    }

    markers[error.start].push({ type: "start", suggestion: error.suggestion });
    markers[error.end].push({ type: "end" });
  });

  return markers;
}

export { runChecks };
