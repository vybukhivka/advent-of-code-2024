import { part1 } from "./day1/day1.1";
import { part2 } from "./day1/day1.2";
import { day2part1 } from "./day2/day2-1";
import { day2part2 } from "./day2/day2-2";
import { day3part1 } from "./day3/day3-1";
import { day3part2 } from "./day3/day3-2";
import "./style.css";

const container = document.createElement("div");
const h3 = document.createElement("h3");
const btn = document.createElement("button");
const output = document.createElement("h4");
const app = document.querySelector("#app");

h3.className = "greet1";
h3.textContent += "day 3";
btn.className = "btn1";
btn.textContent = "output";
output.className = "output1";

app?.append(container);
container.append(h3);
container.append(btn);
container.append(output);

day3part2();

btn.addEventListener("click", () => {
  output.textContent = `part 1: ${part1()}; part 2: ${part2()};`;
});
