const display = document.getElementById("display");
const buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener("click", function(e) {
        switch(e.target.innerText) {
            case "^_^":
                alert("Hola, soy Don Calculador");
                break;
            case "C":
                display.innerText = "";
                break;
            case "⌫":
                display.innerText = display.innerText.slice(0, -1);
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText.replace(/[^-+/*\d]/g, ''));
                } catch {
                    display.innerText = "Error";
                }
                break;
            default:
                display.innerText += e.target.innerText;
                break;
        }
    })
})

