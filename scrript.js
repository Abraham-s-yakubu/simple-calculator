// let buttons = Array.from(document.getElementsByClassName("button"));
const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");
buttons.addEventListener("click", (e) => {
  switch (e.target.textContent) {
    case "C":
      display.textContent = "";
      break;
    case "=":
      try {
        display.textContent = eval(display.textContent);
      } catch {
        display.textContent = "Error";
      }
      break;
    case "←":
      if (display.textContent) {
        display.textContent = display.textContent.slice(0, -1);
      }
      break;
    default:
      display.textContent += e.target.textContent;
  }
});
