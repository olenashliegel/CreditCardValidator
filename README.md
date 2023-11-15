Describe: isCreditCardLengthCorrect()

Test: "It should return true if length of array is 16 or 15 digits"
Code: isCreditCardLengthCorrect();
const textArray = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3,2,0];
creditCardLength(textArray);
Expected Output: true

Test: "It should return true if length of array is 16 or 15 digits"
Code: isCreditCardLengthCorrect();
const textArray = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3,2];
creditCardLength(textArray);
Expected Output: true

Test: "It should return false if length of array is NOT 16 or 15 digits"
Code: isCreditCardLengthCorrect();
const textArray = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5];
creditCardLength(textArray);
Expected Output: false

Test: "It should return false if length of array is NOT 16 or 15 digits"
Code: isCreditCardLengthCorrect();
const textArray = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 2, 2, 2, 2];
creditCardLength(textArray);
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