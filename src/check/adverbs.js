import nlp from "compromise";

export default function adverbs(input) {
  const matches = nlp(input).match("#Adverb #Verb").out("offset");

  let errors = [];

  matches.forEach(function (e) {
    const error = {
      input: e.text,
      start: e.offset.start,
      end: e.offset.start + e.offset.length,
      suggestion: `avoid adverbs`, // would need more space for context but we should mention that you likely only want to keep the adverb if it changes the meaning of the verb (e.g. She smiled sadly)
    };

    errors.push(error);
  });

  return errors;
}
