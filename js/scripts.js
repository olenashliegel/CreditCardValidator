function isCreditCardLengthCorrect(creditCardArray) {
  if (creditCardArray.length === 16 || creditCardArray.length === 15) {
    return true;
  } else {
    return false;
  }
}

function creditCardValidator() {

}

const array1 = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3, 2, 0];
const array2 = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3, 2];
const array3 = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5];
const array4 = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 2, 2, 2, 2];

console.log(isCreditCardLengthCorrect(array1));
console.log(isCreditCardLengthCorrect(array2));
console.log(isCreditCardLengthCorrect(array3));
console.log(isCreditCardLengthCorrect(array4));