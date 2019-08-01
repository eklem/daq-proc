# nowsearch-docproc
Simple document processor that makes any search engine a little better. Removes stopwords, extract keywords to filter on and prepares ngrams for auto-complete functionality.


## Dependencies

* [`words'n'numbers`](https://github.com/eklem/words-n-numbers) - Extract words and optionally numbers from text into arrays. Arrays that can be fed to `stopword`, `eklem-headline-parser` and `ngraminator`.
* [`stopword`](https://github.com/fergiemcdowall/stopword) - Removes stopwords from an array of words. To keep your index small and remove all words without a scent of information.
* [`eklem-headline-parser`](https://github.com/eklem/eklem-headline-parser) - Determines the most relevant keywords in a headline by considering article context
* [`ngraminator`](https://github.com/fergiemcdowall/ngraminator - Generate ngrams.
