let nameInput = document.getElementById("nameInput1");
let timeInput = document.getElementById("timeInput1");
let submitBtn = document.getElementById("twoQustionSubBtn");
let outputTxt = document.getElementById("twoquestionReturn");

let savedName = "";
let savedTime = "";
let ch3Url = "";


submitBtn.addEventListener("click", function () {
    askingQuestions(nameInput1, timeInput1)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            outputTxt.textContent = data
        }
    )
}

function askingQuestions(nameInput1,timeInput1){
    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9amp]+$/;
    if(nameInput1.value.match(letters)&&timeInput1.value.match(numbers))
    {
        savedName = nameInput1.value;
        savedTime = timeInput1.value;
        ch3Url = "https://kentsallforone.azurewebsites.net/askingtwoquestion/questions/" + savedName + '/' + savedTime;
        urlCall(ch3Url);
    }
    else{
        outputTxt.textContent = 'Enter a valid response';
    }
    
}