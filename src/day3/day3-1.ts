const getInputData = async () => {
	try {
		const response = await fetch("/day3-input.txt");
		const data = await response.text();
		return data;
	} catch (error) {
		console.error("Error fetching file:", error);
	}
};

export async function day3part1() {
	const data = await getInputData();
	console.log(data);
}
