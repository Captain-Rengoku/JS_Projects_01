const questions = [
    {
        "que": "which of the following is a markup language?",
        "a": "HTML",
        "b": "CSS",
        "c": "JavaScript",
        "d": "PHP",
        "correct": "a"
    },
    {
        "que": "which of the following is a custom language?",
        "a": "HTML",
        "b": "CSS",
        "c": "JavaScript",
        "d": "PHP",
        "correct": "b"
    },
    {
        "que": "which of the following is a programming language?",
        "a": "HTML",
        "b": "CSS",
        "c": "JavaScript",
        "d": "TailWind",
        "correct": "c"
    },
    {
        "que": "which of the following is not a language?",
        "a": "HTML",
        "b": "CSS",
        "c": "JavaScript",
        "d": "V.S Code",
        "correct": "d"
    }
]

let index = 0;
let total = questions.length;
let rightAns = 0;
let wrongAns = 0;
const quesBox =document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options")

const loadQuestion = () => {
    if (index == total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]; 
    const ans = getAnswer()
    // console.log(ans, data.correct)
    if (ans == data.correct){
        rightAns++;
    } else {
        wrongAns++;
    }
    index++;
    loadQuestion();
    return;
} 


const getAnswer = () => {
    let answer = 0;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}


const reset = () => {
        optionInputs.forEach(
            (input) => {
                input.checked = false;
            }     
        )
    }


const endQuiz = () => {
    document.getElementById("boxId").innerHTML = `
        <h3> Thank you for playing the Quiz. </h3>
        <h3> ${rightAns} out of ${total} are correct. </h3>
    `
}

// initial call
loadQuestion()