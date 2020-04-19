#[macro_use]
pub mod check;

#[derive(Debug, PartialEq, Eq)]
pub struct Error {
    pub original: String,
    pub suggestion: String,
    pub index_start: usize,
    pub index_end: usize,
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
