const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")



const getRandom = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandom(upperSet)
    }
    
    if (lowerInput.checked) {
        password += getRandom(lowerSet)
    }
    
    if (numberInput.checked) {
        password += getRandom(numberSet)
    }
        
    if (symbolInput.checked) {
        password += getRandom(symbolSet)
    }
    
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }

    console.log(password);
    passBox.innerHTML = truncateString(password, totalChar.value);
}

generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatePassword();
    }
)

function truncateString(passwordStr, num) {
    if (passwordStr > num) {
        let subpasswordStr = passwordStr.substring(0, num);
        return subpasswordStr;
    } else {
        return passwordStr;
    }
}