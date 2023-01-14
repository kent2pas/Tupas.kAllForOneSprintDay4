let input1 = document.getElementById("number1Input");
let input2 = document.getElementById("number1Input");
let submitBtn = document.getElementById("addSubBtn");
let outputTxt = document.getElementById("addingusersum");

let savedNum1 = 0;
let savedNum2 = 0;
let ch2Url = "";

submitBtn.addEventListener("click", function(){
        AddingTwoNumbers(input1, input2)
    
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

function AddingTwoNumbers(input1, input2){
    if(Number(input1.value) && Number(input2.value)) {
    savedNum1 = Number(input1.value);
    savedNum2 = Number(input2.value);
    ch2Url = "https://kentsallforone.azurewebsites.net/addingnumber/Adding/" + savedNum1 + "/" + savedNum2;
    urlCall(ch2Url);
    } else {
        outputTxt.textContent = "Enter Valid Numbers";
    }
}
