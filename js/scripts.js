function isCreditCardLengthCorrect(creditCardArray) {
  if (creditCardArray.length === 16 || creditCardArray.length === 15) {
    return true;
  } else {
    return false;
  }
}

function doublingEveryOtherDigit(creditCardArray) {
  let reversedArray = creditCardArray.reverse();
  let resultArray = [];
  resultArray = reversedArray.map(function (number, index) {
    if (index % 2 === 0) {
      return number * 2;
    } else {
      return number;
    }
  });
  return resultArray.reverse();
}

// function creditCardValidator(creditCardArray) {
// }

const array1 = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3, 2, 0];
const array2 = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3, 2];
const array3 = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5];
const array4 = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 2, 2, 2, 2];
const array5 = [4, 1, 0, 2, 0, 8, 0, 8, 8, 0, 4, 3, 5, 6, 2, 0];
const array6 = [4, 1, 0, 2, 0, 8, 0, 8, 8, 0, 4, 3, 5, 6, 2];


// console.log(isCreditCardLengthCorrect(array1));
// console.log(isCreditCardLengthCorrect(array2));
// console.log(isCreditCardLengthCorrect(array3));
// console.log(isCreditCardLengthCorrect(array4));

//console.log(doublingEveryOtherDigit(array5));
console.log(doublingEveryOtherDigit(array6));
