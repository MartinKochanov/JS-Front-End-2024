function extractAndConvertToUpperCase(string) {
    // Use a regular expression to match words (alphanumeric characters)
    let words = string.match(/[^\W_]+/g);
    
  
    let result = words.map(word => word.toUpperCase()).join(', ');
    
     console.log(result);
}


extractAndConvertToUpperCase('Hi, how are you?');
extractAndConvertToUpperCase('Functions in JS can be nested, i.e. hold other functions');