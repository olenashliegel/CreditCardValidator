Describe: splittingArray()

Test1: "It should return array of numbers from text string"
Code: 
const inputTextTest1 = "4204070780465320"
convertStringToNumberArray(inputTextTest1);
Expected Output: [4,2,0,4,0,7,0,7,8,0,4,6,5,3,2,0]

Test2: "It should return null if text contains any other symbols than numbers"
Code: 
const inputTextTest2 = "42a04070780465320";
convertStringToNumberArray (inputTextTest2);
Expected Output: null

Test3: "It should return null in case of empty string"
Code: 
const inputTextTest3 = "";
convertStringToNumberArray (inputTextTest3);
Expected Output: null


Describe: isCreditCardLengthCorrect()

Test4: "It should return true if length of array is 16 digits"
Code: 
const numbersArrayTest4 = [4,2,0,4,0,7,0,7,8,0,4,6,5,3,2,0];
isCreditCardLengthCorrect(numbersArrayTest4);
Expected Output: true

Test5: "It should return true if length of array is 15 digits"
Code: 
const numbersArrayTest5 = [4,2,0,4,0,7,0,7,8,0,4,6,5,3,2,0];
isCreditCardLengthCorrect(numbersArrayTest5);
Expected Output: true

Test6.1: "It should return false if length of array is less than 16 or 15 digits"
Code: 
const numbersArrayTest6_1 = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 0];
creditCardLength(numbersArrayTest6_1);
Expected Output: false

Test: "It should return false if length of array is more than 16 or 15 digits"
Code: 
const numbersArrayTest6_2 = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 2, 2, 2, 2];
creditCardLength(numbersArrayTest6_2);
Expected Output: false


Describe: doublingEveryOtherDigit()
Test: "It should double every other element from the end of Array"
Code: doublingEveryOtherDigit();
const textArray =[4, 1,	0,	2,	0,	8,	0,	8,	8,	0,	4,	3,	5,	6,	2,	0];
creditCardLength(textArray);
Expected Output: [4, 2,	0,	4,	0,	16,	0,	16,	8,	0,	4,	6,	5,	12,	2,	0]

Describe: doublingEveryOtherDigit()
Test: "It should double every other element from the end of Array"
Code: doublingEveryOtherDigit();
const textArray =[4,1,0,2,0,8,0,8,8,0,4,3,5,6,2];
creditCardLength(textArray);
Expected Output: [8,1,0,2,0,8,0,8,16,0,8,3,10,6,4]


Describe: addingDigitsOfDoubleDigitNumbers()
Test: "It should double every other element from the end of Array"
Code: doublingEveryOtherDigit();
const textArray =[18, 10, 11, 12, 13, 8, 0, 8, 8, 0, 4, 3, 5, 6, 2];
creditCardLength(textArray);
Expected Output: [9, 1, 2, 3, 4, 8, 0, 8, 8, 0, 4, 3, 5, 6, 2]

Describe: validatingFirstDigits()
Test: "It should return 'Visa card' if first element of array is equal 4"
Code: 
const numbersArrayTest4 = [4,2,0,4,0,7,0,7,8,0,4,6,5,3,2,0];
convertStringToNumberArray(inputTextTest4);
Expected Output: "Visa card"

Test: "It should return 'Mastercard' if first element of array is equal 5"
Code: 
const numbersArrayTest4 = [5,2,0,4,0,7,0,7,8,0,4,6,5,3,2,0];
convertStringToNumberArray(inputTextTest4);
Expected Output: "Mastercard"

Test: "It should return 'Discover card' if first element of array is equal 6"
Code: 
const numbersArrayTest4 = [6,2,0,4,0,7,0,7,8,0,4,6,5,3,2,0];
convertStringToNumberArray(inputTextTest4);
Expected Output: "Discover card"

Test: "It should return 'American Express card' if first element of array is equal 3 AND the second element is equal 4"
Code: 
const numbersArrayTest4 = [3,4,0,4,0,7,0,7,8,0,4,6,5,3,2];
convertStringToNumberArray(inputTextTest4);
Expected Output: "American Express card"

Test: "It should return 'American Express card' if first element of array is equal 3 AND the second element is equal 7"
Code: 
const numbersArrayTest4 = [3,7,0,4,0,7,0,7,8,0,4,6,5,3,2];
convertStringToNumberArray(inputTextTest4);
Expected Output: "American Express card"

Test: "It should return NULL if first element of array is any of digits except of 4, 5, 6, 3 "
Code: 
const numbersArrayTest4 = [2,7,0,4,0,7,0,7,8,0,4,6,5,3,2];
convertStringToNumberArray(inputTextTest4);
Expected Output: "NULL"

Test: "It should return NULL if first element of array is 3 and second element is NOT 4 or 7 "
Code: 
const numbersArrayTest4 = [3,6,0,4,0,7,0,7,8,0,4,6,5,3,2];
convertStringToNumberArray(inputTextTest4);
Expected Output: "NULL"