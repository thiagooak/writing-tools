/* istanbul ignore file */
import longSentence from "./check/longSentence";
import longWords from "./check/longWords";
import cutWords from "./check/cutWords";
import errorsToMarkers from "./marker";

function runChecks(input) {
  let errors = [];
  return errorsToMarkers(
    errors.concat(longSentence(input), longWords(input), cutWords(input))
  );
}

export { runChecks };
