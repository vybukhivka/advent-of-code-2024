import "./style.css";
import { day1 } from "./day1";

const h3 = document.createElement("h3");
const btn = document.createElement("button");
const output = document.createElement("h4");

h3.className = "greet";
h3.textContent += "day 1";
btn.className = "btn";
btn.textContent = "output";
output.className = "output";

document.body.append(h3);
document.body.append(btn);
document.body.append(output);

btn.addEventListener("click", () => {
	output.textContent = String(day1());
});
