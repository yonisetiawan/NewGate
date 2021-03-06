function uniteUnique(arr) {
  var kotak = [];
  for (var i = 0; i<arguments.length; i++){
    kotak.push(arguments[i])
  };
  var flattened = kotak.reduce(function(a, b) {
  return a.concat(b);
}, [])
  return flattened;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])) // [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])) // [1, 3, 2, [5], [4]].
console.log(uniteUnique([1, 2, 3], [5, 2, 1])) // [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])) // [1, 2, 3, 5, 4, 6, 7, 8].
