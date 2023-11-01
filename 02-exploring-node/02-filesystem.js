const fs = require("node:fs");

fs.readFile("test.txt", "utf-8", (error, data) => {
	if (error) {
		throw error;
	}

	console.log(data);
});

// I'm loving Node!

fs.writeFile("example.txt", "I'm loving Node!", "utf-8", (error) => {
	if (error) {
		console.log(error)
	}
	console.log("I wrote to the file!")
});
