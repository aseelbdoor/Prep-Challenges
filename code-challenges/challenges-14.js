'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
// join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Input: "I did my waiting 12 years of it in Azkaban"
// Output: "Azkaban"
//
// Input: "Impossible"
// Output: "Impossible"
//

const LastWord = (str) => {
    str=str.trim();
    let la=str.lastIndexOf(" ");
    if(la==-1){
     return str;
    }
    else{
     return str.slice(la+1);
    }
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
//  You can try to do the same task using the split method
//
//  Input: "you dare use my spells against me, potter"
//  Output: "potter"

const LastWord_2 = (str) => {
    str = str.split(" ");
    return str[str.length-1];
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Input:  "I thought you had a plan"
// Output: "We thought you had a plan"
//
// Input: "I was there 3000 years ago"
// Output: "We were there 3000 years ago"

// Input: "I am Venom"
// Output: "We are Venom"
//

const replaceWords = (str) => {
    str=str.split(" ");
    let list1=['I','am','was'];
    let list2=['We','are','were'];
    let counter=0;
    list1.forEach(element => {
        let i=str.indexOf(element);
        if (!(i==-1)){
            str.splice(i, 1, list2[counter]);
        }
        counter++;
    });
    return str.join(' ');
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Write a function that "joins" the array of words together and puts a comma "," after every five words
//
// Input:["move","it","away","from","the","street"] 
// Output: "move it away from the, street" 
//

const arrToStr = (arr) => {
    for (let i = 1; i <= arr.length; i++) {
        if (i%5==0){
            arr.splice(i-1, 1, arr[i-1]+',');
        }
    }
    return arr.join(' ');
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 05:
// Optional:
//
// Simon got a string manipulation question for his interview,
// it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:

// Input:"aaaa bbb sdf"
// Output: "a4 b3 s1d1f1"

// Input:"door"
// Output: "d1o2r1"
//
// help him by writing the function
//

const letterCounter = (str) => {
    let newString = "";
    str = str.split('');
    let index = 0;
    while (index < str.length) {
        const element = str[index];
        let counter = 0;
        let i = index
        for (; i < str.length; i++) {
            if (element ==' ') {
                newString+=" ";
                counter++;
                break;
            }
            else if( str[i] == element && element!=' '){
                counter++;
            }
            else {
                newString = newString + `${element}${counter}`;
                break;
            }
        }
        if (i == str.length) {
            newString = newString + `${str[index]}${counter}`;
        }
        
        index += counter;
    }
    return newString;
}
// -------------------------------------------------------------------------------------------------------


module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };