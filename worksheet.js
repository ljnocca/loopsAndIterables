/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */
 function sumOfArray(array){
     var summation = 0
     for (var i = 0; i < array.length; i++){
         summation = summation + array[i]
     }
     return summation
 }

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and returns the highest number in the array.
function maxOfArray(array){
    var highest = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > highest){
            highest = array[i]
        }
    }
    return highest
}


/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * as input and returns true if it is a vowel, false otherwise.
 */
function isVowel(character){
    if(character === "a" || character === "A" || character === "o" || character === "O" || character === "i" || character === "I" || character === "e" || character === "E" || character === "u" || character === "U"){
        return true
    }
    return false    
}


/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */
 function reverse(string){
    var reversedString = ""
    for (var i = string.length-1; i >= 0; i--){
        if (i>=0){
            reversedString = reversedString + string[i]
        }
    }
    return reversedString
}


/**
 * Part 4
 *
 * write a function the returns a fizzbuzz string for an input number. 
 A fizzbuzz string is defined as the following:
 For every number from 1 to the input number...
 * - if that number isn't a multiple of 3 or 5, add a period "." to the fizzbuzz string
 * - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
 * - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
 * - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
 For example, the fizzbuzz string for the number 3 is "..fizz"
 For the number 15, the fizzbuzz string is "..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz"
 */
function fizzbuzz (endNumber){
    var string = ""
    
 	for (var i = 1; i <= endNumber; i++){
        if (i%3 !== 0 && i%5 !== 0){
            string += "."
        }
        else if (i%3 === 0 && i%5 !== 0){
            string += "fizz"
        }
        else if (i%3 !== 0 && i%5 === 0){
            string += "buzz"
        }
        else if (i%3 === 0 && i%5 === 0){
            string += "fizzbuzz"
        }
    }
     return string
}


/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */
 function findLongestWord(sentenceString){
     var wordsArray = sentenceString.split(/\W+/)
     var lengthOfLongest = 0
     var longestWord = ""
     for (var i = 0; i < wordsArray.length; i++){
         if (wordsArray[i].length>lengthOfLongest){
             lengthOfLongest = wordsArray[i].length
             longestWord = wordsArray[i]
         }
     }
     return longestWord     
 }

/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

