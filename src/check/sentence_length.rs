pub fn sentence_length(content: String) -> Vec<crate::Error> {
    let mut errors: Vec<crate::Error> = Vec::new();

    let sentences: Vec<&str> = content.split_terminator('.').collect();

    let mut short_sentences_count: f64 = 0.0;
    let mut long_sentences = Vec::new();

    let mut index = 0;

    for sentence in sentences {
        let word_count = sentence.split_whitespace().count();

        if word_count <= 18 {
            short_sentences_count += 1.0;
        } else {
            long_sentences.push(sentence);
            errors.push(crate::Error {
                original: String::from(sentence),
                suggestion: String::from(""),
                index_start: index,
                index_end: index + sentence.len(),
            });
        }

        index += sentence.len();
    }

    let long_sentences_count: f64 = long_sentences.len() as f64;

    let percent_long_sentences: f64 =
        long_sentences_count / (short_sentences_count + long_sentences_count) * 100.0;

    if percent_long_sentences > 10.0 {
        // sort by index_start so we can apply in order
        errors.sort_by(|a, b| a.index_start.cmp(&b.index_start));

        return errors;
    }

    let empty_vec: Vec<crate::Error> = Vec::new();
    return empty_vec;
}

#[test]
fn test_check_sentence_length() {
    let mut expected_errors: Vec<crate::Error> = Vec::new();

    let long_sentence = crate::Error {
        original: String::from(
            "Vivamus lacinia, libero ac lobortis iaculis, dui dui malesuada diam, eu interdum tellus risus nec leo class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
        ),
        suggestion: String::from(""),
        index_start: 0,
        index_end: 192,
    };

    expected_errors.push(long_sentence);

    assert_eq!(
        sentence_length(String::from("Vivamus lacinia, libero ac lobortis iaculis, dui dui malesuada diam, eu interdum tellus risus nec leo class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vel elit maximus, suscipit turpis a, elementum turpis. Vivamus sollicitudin arcu sit amet elementum fermentum. Vestibulum sed velit in dolor molestie congue. Vestibulum dui quam, pharetra non egestas id, ullamcorper et mauris. Vestibulum blandit felis quis ligula finibus commodo.")),
        expected_errors
    );

    let empty_vec: Vec<crate::Error> = Vec::new();
    assert_eq!(
        sentence_length(String::from("Vivamus sollicitudin arcu sit amet elementum fermentum. Vestibulum sed velit in dolor molestie congue. Vestibulum dui quam, pharetra non egestas id, ullamcorper et mauris. Vestibulum blandit felis quis ligula finibus commodo.")),
        empty_vec
    );
}
