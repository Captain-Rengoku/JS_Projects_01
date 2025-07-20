//Tried myself.

// const input = document.getElementById("input")

// function check() {
//     const value = input.value
//     const string = string.value
//     const reverseStr = reverseString(string)
//     if (string == reverseStr) {
//         result.innerText = `Yah ${value} is a Palindrome.`
//     } else{
//         result.innerText = `ahhh.. ${value} is not a Palindrome.` 
//     }
// }

// function reverseString(str) {
//     const strRev = str.split('').reverse().join('');
//     return strRev
// }


const input = document.getElementById("input")

function reverseStr(str) {
    const strSplit = str.split("")
    const strReverse = strSplit.reverse()
    const strJoin = strReverse.join("")
    return strJoin
}


function check() {
    const value =input.value
    const reverseValue = reverseStr(value) 
    
    if (value === reverseValue) {
        alert("Yah it is a Palindrome")
    } else {
        alert("ahh it is not a Palindrome")
    }
    // to clear the value after result
    input.value = ""
}