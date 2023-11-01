const fs = require("node:fs");

fs.readFile('test.txt', 'utf-8', (error, data) => {
	if (error) {
		throw error;
	}

	console.log(data)
})

// I'm loving Node!

fs.writeFile()