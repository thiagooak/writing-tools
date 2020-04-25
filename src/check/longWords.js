export default function longWords(input) {
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
    cutbacks: "cuts",
    "large-scale": "big",
    "sales events": "sales",
    "strike action": "strike",
    "track record": "record",
    "weather conditions": "weather",
    "wilderness area": "either wilderness or area",
    "this time around": "this time",
    "any time soon": "soon",
    "on a daily basis": "daily",
    "on a weekly basis": "weekly",
    "on a monthly basis": "monthly",
    "at this moment in time": "now or at present",
    "bought up": "bought",
    "sold off": "sold",
    "cut back": "cut",
    "hatched up": "hatched",
    "headed up by": "headed by",
    "meet with": "meet",
    "send off": "sent",
    "pre-prepared": "prepared",
    "for free": "free",
    "top priority": "priority",
    "major speech": "speech",
    "executive summary": "summary",
    "role model": "model",
    "safe haven": "haven",
    "free gift": "gift",
    "most probably": "probably",
    "the fact that": "that",
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
