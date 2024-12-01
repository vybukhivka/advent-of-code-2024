export const day1 = () => {
	const div = document.createElement("div");
	div.classList.add("greet");
	div.innerHTML += "hello day 1";

	document.body.append(div);
	return true;
};
