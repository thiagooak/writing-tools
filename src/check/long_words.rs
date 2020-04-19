use std::collections::HashMap;

pub fn long_words(content: String) -> Vec<crate::Error> {
    let mut errors = Vec::new();

    let words: HashMap<&str, &str> = [
        ("approximately", "about"),
        ("demonstrate", "show"),
        ("establish", "set up"),
        ("expenditure", "spending"),
        ("facility", "plant, club, warehouse, etc"),
        ("following", "after"),
        ("however", "but"),
        ("manufacture", "make"),
        ("participate", "take part"),
        ("permit", "let"),
        ("prior to", "before"),
        ("sufficient", "enough"),
        ("utilise", "use"),
    ]
    .iter()
    .cloned()
    .collect();

    for (long_word, short_word) in &words {
        if let Some(i) = content.find(long_word) {
            let error = crate::Error {
                original: String::from(long_word.clone()),
                suggestion: String::from(short_word.clone()),
                index_start: i,
                index_end: i + long_word.len(),
            };
            errors.push(error);
        }
    }

    // sort by index_start so we can apply in order
    errors.sort_by(|a, b| a.index_start.cmp(&b.index_start));

    return errors;
}

#[test]
fn test_long_words() {
    let sorted_result = long_words(String::from(
        "I'll be home in approximately 20 minutes. I manufacture no excuses.",
    ));

    let mut expected_errors: Vec<crate::Error> = Vec::new();

    let approx = crate::Error {
        original: String::from("approximately"),
        suggestion: String::from("about"),
        index_start: 16,
        index_end: 29,
    };

    let manu = crate::Error {
        original: String::from("manufacture"),
        suggestion: String::from("make"),
        index_start: 44,
        index_end: 55,
    };

    expected_errors.push(approx);
    expected_errors.push(manu);

    assert_eq!(sorted_result, expected_errors);

    let empty_vec: Vec<crate::Error> = Vec::new();

    assert_eq!(
        long_words(String::from("I'll be home in about 20 minutes.")),
        empty_vec
    );
}
