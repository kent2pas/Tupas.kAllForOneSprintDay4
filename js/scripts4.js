let oddorevenInput = document.getElementById("oddorevenInput")
let submitBtn = document.getElementById("oddorevenSubBtn");
let outputTxt = document.getElementById("oddorevenReturn");

let savedNum = 0;
let ch6Url = "";


submitBtn.addEventListener("click", function(){
    OddOrEven(oddorevenInput)

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

function OddOrEven(oddorevenInput){
    if(Number(oddorevenInput.value)) {
    savedNum = Number(oddorevenInput.value);
    ch6Url = "https://kentsallforone.azurewebsites.net/oddoreven/oddoreven/" + savedNum;
    urlCall(ch6Url);
    } else {
        outputTxt.textContent = "Enter A Valid Number";
    }
}