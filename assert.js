function Assert(arg1){
  this.arg1 = arg1
};

Assert.prototype.toEqual = function(arg2) {
  if (this.arg1 !== arg2) {
    console.log("Assertion failed: " + this.arg1 + " is not equal to " + arg2)
  } else { console.log(this.arg1 + " is equal to " + arg2) }
}






// var assert = {
//   isTrue: function(assertionToCheck) {
//     if (!assertionToCheck) {
//       console.log("Assertion failed: " + assertionToCheck + " is not truthy");
//     } else {console.log(assertionToCheck + " is truthy")}
//   },
//   isFalse: function(assertionToCheck) {
//     if (assertionToCheck) {
//       console.log("Assertion failed: " + assertionToCheck + " is not falsey")
//     } else {console.log(assertionToCheck + " is falsey")}
//   },
//   ToEqual: function(arg1, arg2) {
//     if (arg1 !== arg2) {
//       console.log("Assertion failed: " + arg1 + " is not equal to " + arg2)
//     } else { console.log(arg1 + " is equal to " + arg2) }
//   }
// };
