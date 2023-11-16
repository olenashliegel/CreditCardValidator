function convertStringToNumberArray(text) {
  let nonNumericRegex = /\D/;
  if (!nonNumericRegex.test(text) && (text.length > 0)) {
    const splittingArray = text.split("");
    const resultArray = splittingArray.map(function (element) {
      return parseInt(element);
    });
    return resultArray;
  } else
    return null;
}

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
    if (index % 2 === 1) {
      return number * 2;
    } else {
      return number;
    }
  });
  return resultArray.reverse();
}

function addingDigitsOfDoubleDigitNumbers(creditCardArray) {
  let resultArray = [];
  resultArray = creditCardArray.map(function (element) {
    if (element > 9) {
      let str = element.toString();
      let num1 = parseInt(str[0]);
      let num2 = parseInt(str[1]);
      return num1 + num2;
    }
    else
      return element;
  });
  return resultArray;
}

function checkingArraySum(creditCardArray) {
  let sum = 0;
  creditCardArray.forEach(function (number) {
    sum += number;
  })
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

function validatingFirstDigits(creditCardArray) {
  switch (creditCardArray[0]) {
    case 4:
      return "Visa card";
    case 5:
      return "Mastercard";
    case 6:
      return "Discover card";
    case 3:
      {
        if (creditCardArray[1] === 4 || creditCardArray[1] === 7)
          return "American Express card"
        else
          return null;
      };
    default:
      return null;
  }
}

function creditCardValidator(text) {
  if (convertStringToNumberArray(text) != null) {
    const numbersArray = convertStringToNumberArray(text);
    if (isCreditCardLengthCorrect(numbersArray)) {
      return checkingArraySum(addingDigitsOfDoubleDigitNumbers(doublingEveryOtherDigit(numbersArray)));
    } else
      return false;
  } else
    return false;
}


// const array3 = [3, 9, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5];
// //console.log(validatingFirstDigits(array3));

// const array4 = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 2, 2, 2, 2];
// const array5 = [4, 1, 0, 2, 0, 8, 0, 8, 8, 0, 4, 3, 5, 6, 2, 0];
// const array6 = [4, 1, 0, 2, 0, 8, 0, 8, 8, 0, 4, 3, 5, 6, 2];
// const array7 = [4, 1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0];
// const array8 = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3, 2, 0];

// const inputTextTest1 = "4204070780465320";
// console.log(convertStringToNumberArray(inputTextTest1));

// const inputTextTest2 = "42a04070780465320";
// console.log(convertStringToNumberArray(inputTextTest2));

// const inputTextTest3 = "";
// console.log(convertStringToNumberArray(inputTextTest3));

// const numbersArrayTest4 = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3, 2, 0];
// console.log(isCreditCardLengthCorrect(numbersArrayTest4));

// const numbersArrayTest5 = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3, 2];
// console.log(isCreditCardLengthCorrect(numbersArrayTest5));

// const numbersArrayTest6_1 = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 0];
// console.log(isCreditCardLengthCorrect(numbersArrayTest6_1));

// const numbersArrayTest6_2 = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 2, 2, 2, 2];
// console.log(isCreditCardLengthCorrect(numbersArrayTest6_2));

// console.log(isCreditCardLengthCorrect(array1));
// console.log(isCreditCardLengthCorrect(array2));
// console.log(isCreditCardLengthCorrect(array3));
// console.log(isCreditCardLengthCorrect(array4));

//console.log(doublingEveryOtherDigit(array5));
//console.log(doublingEveryOtherDigit(array6));
// console.log(addingDigitsOfDoubleDigitNumbers(array7));

// console.log(creditCardValidator("378282246310005"));
// console.log(creditCardValidator("371449635398431"));
// console.log(creditCardValidator("378734493671000"));
// console.log(creditCardValidator("5499740000000057"));
// console.log(creditCardValidator("5555555555554444"));
// console.log(creditCardValidator("5105105105105100"));

// console.log(creditCardValidator("6011000991001201"));
// console.log(creditCardValidator("6011111111111117"));
// console.log(creditCardValidator("6011000990139424"));

// console.log(creditCardValidator("4111111111111111"));
// console.log(creditCardValidator("4242424242424242"));
//console.log(creditCardValidator("4012888888881881"));
//console.log(creditCardValidator("4222222222222"));

// console.log(creditCardValidator("5105105105105100"));
// console.log(creditCardValidator("420a4070780465320"));


