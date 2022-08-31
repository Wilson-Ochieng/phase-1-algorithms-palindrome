function isPalindrome(word) {
  let reversed = [...word].reverse().join("")
  return word === reversed;
}
let word1="abba";
let word2 ="robot";
let word3 ="madam"
console.log(isPalindrome(word1));
console.log(isPalindrome(word2));
console.log(isPalindrome(word3));

/* 
Split the word into an array, saving it into a variable.
Reverse the array.
Put it back together.
Compare the initial string to the reversed one.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
