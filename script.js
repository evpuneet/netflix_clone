let equation = document.querySelector(".display>input");
let result = document.querySelector(".display>p");
let buttons = document.querySelectorAll(".button");
let equalTo = document.querySelector("#equalTo");
let clear = document.querySelector("#clear");
// how can we give input through keyboard
let operator = Number(equation.value);
equation.value = "";

let empty = "";
// we use a differet apprach in arrow fn when we are using foreach
// also we can'nt use

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonValue = button.innerText;

    equation.value = equation.value + button.innerText;
    if (e.target.innerText === "AC") {
      equation.value = null;
      result.innerHTML = null;
    }

    result.innerHTML = String(eval(equation.value));
  });

  clear.addEventListener("click", () => {
    equation.value = equation.value.slice(0, -1);
  });

  result.style.opacity = 1;

  equalTo.addEventListener("click", () => {
    equation.value = result.innerHTML;
    result.style.opacity = 0;
  });
});
