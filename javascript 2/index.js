// Question Number 01//
// salution //

console.log("Q1  =========================================================");

var Num = [1, 2, 3, 4, 5, 1, 3];
console.log(Num.indexOf(4));

var Num = [1, 2, 3, 4, 5, 1, 3];
console.log(Num.indexOf(1));

var Num = [1, 2, 3, 4, 5, 1, 3];
console.log(Num.indexOf(7));

// Question Number 02//
// salution //

console.log("Q2  =========================================================");
let n = 5; // height of pattern
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += n - j + 1;
  }
  string += "\n";
}
console.log(string);

// Question Number 03//
// salution //

console.log("Q3  ==========================================================");
let num = [3, 2, 1, 4, 5, 45];

// using sort method
num.sort();
console.log(num);

// Question Number 04//
// salution //

console.log("Q4  ===========================================================");

function checkStringsAnagram(a, b) {
  let len1 = a.length;
  let len2 = b.length;
  if (len1 !== len2) {
    console.log("Invalid Input");
    return;
  }
  let str1 = a.split("").sort().join("");
  let str2 = b.split("").sort().join("");
  if (str1 === str2) {
    console.log("True");
  } else {
    console.log("False");
  }
}
checkStringsAnagram("LISTEN", "SILENT");
checkStringsAnagram("HELLO", "JELLO");

// Question Number 05//
// salution //

console.log(
  "Q5  ============================================================="
);

const str = "Hello";

function reverseAString(str) {
  return str.split("").reverse().join("");
}

console.log(`Reversed string is: ${reverseAString(str)}`);
