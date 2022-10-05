{
    let Mv = [];
    while(input){
        let input = prompt("Add a grade");
        if(input === "q" || input === null){
            break;
        }
        Mv.push(Number(input));
        console.log(Mv);
    }
}

/* When the input field receives input, convert the value from MilliVolt to Celcsius, Farenheit and kelvin */
function tempMaaler1(Mv) {
    document.getElementById("outputCelcsius").innerHTML = 500 + (Mv * 10);
}

function tempMaaler2(Mv) {
    document.getElementById("outputFarenheit").innerHTML =500 + (Mv * 10) * 1.8 + 32;
}

function tempMaaler3(Mv) {
    document.getElementById("outputKelvin").innerHTML =500 + (Mv * 10) + 273.15;
}