function ceaserCipherUtility(text, shift=0){ //returns a string of shifted characters
    let result = "";
    shift = shift%26;
    for(let i=0;i<text.length;i++){
        let char = text[i];
        if(char.match(/[a-z]/i)){   // Regular expression which checks if the character is alphabet.
            const code = char.charCodeAt(0);
            /* /[a-z]/: This part of the regex specifies a character class that matches any single lowercase letter from 'a' to 'z'.
                i: This is a flag that makes the match case-insensitive. This means that it will match both lowercase ('a' to 'z')
                 and uppercase ('A' to 'Z') letters. */

            if(char>='a' && char<='z'){
                result += String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
            else if(char>='A' && char<='Z'){
                result += String.fromCharCode(((code - 65 + shift) % 26) + 65);
                /*This is genius! Let's say the char is 'A' whose unicode is 65, so code=65. 65-65+1(assume shift=1) equals 1%26+65 = 66
                which is the unicode for B. Hence the result will be appended with B!  */
            }
        }else{
            result+=char;
        }
    }
    return result;
}

function ceaserCipher(){
    const shift = document.getElementById("shift").value;
    const inputText = document.getElementById("input-text").value;
    const output = document.getElementById("output");
    const text = ceaserCipherUtility(inputText,shift);
    output.innerHTML = text;
}
document.getElementById("input-text").oninput = ceaserCipher;