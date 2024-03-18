
function doStateChanges() {
    var bulbSource = document.getElementById("bulb").getAttribute("src");

    var altText = document.getElementById("bulb").getAttribute("alt");

    if(altText == "Bulb Off") {
        document.getElementById("bulb").setAttribute("src", "./images/bulb_on.png");
        document.getElementById("bulb").setAttribute("style", "width: 320px; height: 426px;");
        document.getElementById("bulb").setAttribute("alt", "Bulb On");
        document.getElementById("bulb-button").setAttribute("value", "OFF");
        document.getElementById("bulb-button").setAttribute("style", "background-color:red;");
    } else {
        document.getElementById("bulb").setAttribute("src", "./images/bulb_off.png");
        document.getElementById("bulb").setAttribute("style", "width: 440px; height: 426px;");
        document.getElementById("bulb").setAttribute("alt", "Bulb Off");
        document.getElementById("bulb-button").setAttribute("value", "ON");
        document.getElementById("bulb-button").setAttribute("style", "background-color:green;");
    }
}