export default function errorsToMarkers(errors) {
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
