let word1Input = document.getElementById("storyNameInput");
let word2Input = document.getElementById("adjective1Input");
let word3Input = document.getElementById("adjective2Input");
let word4Input = document.getElementById("adjective3Input");
let word5Input = document.getElementById("adjective4Input");
let word6Input = document.getElementById("adjective5Input");
let word7Input = document.getElementById("verb1Input");
let word8Input = document.getElementById("verb2Input");
let word9Input = document.getElementById("verb3Input");
let submitBtn = document.getElementById("madlinSubBtn");
let outputTxt = document.getElementById("madlibReturn");

let savedWord1 = "";
let savedWord2 = "";
let savedWord3 = "";
let savedWord4 = "";
let savedWord5 = "";
let savedWord6 = "";
let savedWord7 = "";
let savedWord8 = "";
let savedWord9 = "";
let savedWord10 = "";
let ch5Url = "";

submitBtn.addEventListener("click", function(){
    madLib(word1Input, word2Input, word3Input, word4Input, word5Input, word6Input, word7Input, word8Input, word9Input)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            outputTxt.textContent = data;
            console.log(data);
        }
    )
}

