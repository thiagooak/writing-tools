export default function checkLongSentence(input) {
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
        suggestion: "can you shorten this sentence?",
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
