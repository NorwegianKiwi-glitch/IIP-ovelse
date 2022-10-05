/*kalkulering av milliVolt til Celcsius, Farenheit og Kelvin*/
function tempmaaler(valNum) {
    document.getElementById("outputCelcsius").innerHTML = 500 + (valNum * 10);
    document.getElementById("outputFarenheit").innerHTML =500 + (valNum * 10) * 1.8 + 32;
    document.getElementById("outputKelvin").innerHTML =500 + (valNum * 10) + 273.15;
}