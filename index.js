document.addEventListener("DOMContentLoaded", function () {
  const screen = document.querySelector(".screen");
  const buttons = document.querySelectorAll(".calc-button");

  // print some basic information to the log
  console.log("Screen starts with:", screen.textContent); // print the text content in screen to the log
  console.log("Buttons found: ", buttons.length);         // print the number of buttons to the log
  
  // when a button is clicked, print the value of that button to the log
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.textContent;
      
      if (value==="AC") {
        screen.textContent = '0';
      } else if(value==="DEL") {
        screen.textContent = screen.textContent.slice(0, -1) || "0";
      } else if(value==="ENTER") {
        console.log("Calculator backend not written");
      } else if (screen.textContent==='0') {
        screen.textContent=value;
      } else {
        screen.textContent += value;
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    const key = event.key;
    
    // match button actions to certain keys
    if (key === "Backspace") {
      screen.textContent = screen.textContent.slice(0, -1) || "0";
    } else if(key === "Enter") {
      console.log('Calculator backend not written');
    } else if ("0123456789%.+".includes(key)) {
      if (screen.textContent === "0") {
        screen.textContent = key;
      } else {
        screen.textContent += key;
      }
    } else if ("-*/".includes(key)){
      // if key is -,*, or /  change the key to the math symbol and show it
      let displayValue = key;
      switch(displayValue){
        case "-":
          displayValue = "−";
          break;
        case "*":
          displayValue = "×";
          break;
        case "/":
          displayValue = "÷";
          break;
      }
      screen.textContent = displayValue;
    } else if(key.toLowerCase() === "c"){
      screen.textContent = "0";
    }
  });
});
