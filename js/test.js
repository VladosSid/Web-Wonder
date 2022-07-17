console.log("start");

function includes(array, value) {
  // Change code below this line

for (i = 0; i <= array.length; i += 1) {
  if (i === value) {
  return i;
  }
}
  // Change code above this line
  return false;
}

// includes([1, 2, 3, 4, 5], 3);
includes([1, 2, 3, 4, 5], 17);
includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
includes(["apple", "plum", "pear", "orange"], "plum");
includes(["apple", "plum", "pear", "orange"], "kiwi");

console.log("end");