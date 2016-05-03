/*
  HELPER FUNCTIONS
*/

function each(array, f) {
  for (var i = 0; i < array.length; i++) {
    f(array[i]);
  }
}

function reduce(array, f, start) {
  var acc = start;
  each(array, function(element) {
    acc = f(acc, element);
  });
  return acc;
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, f) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(f(element, i));
  });
  return acc;
}

/*
  YOUR CODE GOES BELOW HERE
*/



/*
1.  function wordLengths(string) {
  var acc = [];
  var words = string.split(" ");
  for (var i = 0; i < words.length; i++) {
    acc.push(words[i].length);
  }
  return acc;
}
wordLengths("The quick brown fox jumps over the lazy dog.")
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 4 ]
*/


function wordLengths(string) {
  var acc = [];
  each(string.split(" "), function(wordCount) {
    return acc.push(wordCount.length);
  })
  return acc;
}


/*
2.  wordLengths involves transforming every word into its length, which makes this function an ideal use-case of the map abstraction. Using map (also written above for convenience), rewrite wordLengths (but write a new function, e.g. wordLengthsMap) again -- but this time using map.
*/

function wordLengthsMap(string) {
  return map(string.split(" "), function(wordCount) {
    return wordCount.length;
  });
}


/*
3.  Write a function called wordsLongerThanThree using filter that, given a string as input, returns an array of the words in the original string that are longer than three (have length greater than three).
*/

function wordsLongerThanThree(string) {
  return filter(string.split(" "), function(x) {
      return x.length > 3;
  });
}


/*
4.  Write a function called concat that takes two arrays as parameters and returns an array with all of the elements of the second one added to the first one -- your implementation should use reduce. It should work like this:

function concat(arr1, arr2) {
  // ...
}
  concat([1, 2, 3], [4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
  concat([], [3, 4, 5]); // => [3, 4, 5]
  concat([], []); // => []
*/

function concat(arr1, arr2) {
    var combined = [];
    reduce(arr1, function(com) {
      return combined.push(arr1 + "," + arr2)
    });
    return combined;
  }




