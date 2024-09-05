// Program to capitalize the first letter of each word of a given string.
function capFirstLetter(str){
    let words = '';
    let capitalizedLetter = true;

    for (let i = 0; i < str.length; i++){
        
        let letter = str[i];

        if (letter == ' '){
            capitalizedLetter = true;
            words += letter;
        } else {
            if (capitalizedLetter){
                words += letter.toUpperCase();
                capitalizedLetter = false;
            } else {
                words += letter.toLowerCase();
            }
        }
    }
    return words;
}

// Use this function here:
const stringOfWord = "the quick brown fox";
const capitalizedThis = capFirstLetter(stringOfWord);
console.log(capitalizedThis);
