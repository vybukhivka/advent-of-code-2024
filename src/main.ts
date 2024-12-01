import { day2 } from "./day1/day1.2";
import "./style.css";

const container = document.createElement("div");
const h3 = document.createElement("h3");
const btn = document.createElement("button");
const output = document.createElement("h4");
const app = document.querySelector("#app");

h3.className = "greet1";
h3.textContent += "day 1.2";
btn.className = "btn1";
btn.textContent = "output";
output.className = "output1";

app?.append(container);
container.append(h3);
container.append(btn);
container.append(output);

day2();

btn.addEventListener("click", () => {
	output.textContent = String(day2());
});
