/* istanbul ignore file */
import checkLongSentence from "./checkLongSentence";
import checkLongWords from "./checkLongWords";
import errorsToMarkers from "./marker";

function runChecks(input) {
  let errors = [];
  return errorsToMarkers(
    errors.concat(checkLongSentence(input), checkLongWords(input))
  );
}

export { runChecks };
