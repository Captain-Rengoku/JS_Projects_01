const getcolor = () => {
    // Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16)
    console.log(randomNumber, randomCode);
    // backgorund color change
    document.body.style.backgroundColor = randomCode;
    // name of the color-code
    document.getElementById("color-code").innerText = randomCode;
    // copy the color-code to clip board of the keyboard.
    navigator.clipboard.writeText(randomCode);
}

// event call
document.getElementById("btn").addEventListener( // this function is for generating a random color.
    "click",
    getcolor // when we click the button a random color will be generated.
)

// initial call
getcolor(); // this function call will ensure that the background color will be there when we open the page.