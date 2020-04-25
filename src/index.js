/* istanbul ignore file */
import longSentence from "./check/longSentence";
import longWords from "./check/longWords";
import cutWords from "./check/cutWords";
import errorsToMarkers from "./marker";
import verbQualifiers from "./check/verbQualifiers";
import adverbs from "./check/adverbs";

function runChecks(input) {
  let errors = [];
  return errorsToMarkers(
    errors.concat(
      longSentence(input),
      longWords(input),
      cutWords(input),
      verbQualifiers(input),
      adverbs(input)
    )
  );
}

export { runChecks };
