let ch7Input = document.getElementById("anyInput1");
let submitBtn = document.getElementById("reverseitSubBtn")
let outputTxt = document.getElementById("reverseitReturn");

let savedWord = "";
let ch7Url = "";

submitBtn.addEventListener("click", function() {
    reverseIt(anyInput1)
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

function reverseIt(anyInput1){
    if(Number(anyInput1.value)) {
        savedNum = Number(anyInput1.value);
        ch6Url = "https://kentsallforone.azurewebsites.net/reverseit/reverse/" + savedNum;
        urlCall(ch6Url);
        } else {
            outputTxt.textContent = "Enter A Valid Number";
        }
}