const http = require("node:http");
const url = require("node:url");
const fs = require("node:fs");
const querystring = require("node:querystring")

// Load environment variables
require("dotenv").config();

const shoutOut = process.argv[2];

const server = http.createServer((req, res) => {
	const path = url.parse(req.url, true).pathname;

	if (path === "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h1>Welcome to My Portfolio!</h1>");
		if (shoutOut) {
			res.write(`<p>Shout-out Message: ${shoutOut}</p>`);
		}
		res.end();
	} else if (path === "/about") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h1>About Me</h1>");
		res.write("<p>These are my skills:</p>");
		res.write(
			"<ul><li>Node.js</li><li>JavaScript</li><li>Web Development</li></ul>"
		);
		res.end();
	} else if (path === "/contact") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h1>Contact Me</h1>");
		res.write(
			'<form method="POST">Message: <input type="text" name="message"><br>Name: <input type="text" name="name"><br><input type="submit" value="Submit"></form>'
		);

		fs.readFile("messages.txt", "utf8", (err, data) => {
			if (err) throw err;
			res.write("<h2>Messages:</h2>");
			res.write(`<pre>${data}</pre>`);
			res.end();

		});

		if (req.method === "POST") {
			let body = "";
			req.on("data", (chunk) => {
				body += chunk.toString();
			});

			req.on("end", () => {
				const postData = querystring.parse(body);

				// Writing the user's message to 'messages.txt'
				fs.appendFile(
					"messages.txt",
					`${postData.name}: ${postData.message}\n`,
					(err) => {
						if (err) throw err;
						console.log("Message saved!");
					}
				);

				fs.readFile("messages.txt", "utf8", (err, data) => {
					if (err) throw err;
					res.write("<h2>Messages:</h2>");
					res.write(`<pre>${data}</pre>`);
					res.end();

				});
			});
		}

		// Display contents of messages.txt
		fs.readFile("messages.txt", "utf8", (err, data) => {
			if (err) throw err;
			res.write("<h2>Messages:</h2>");
			res.write(`<pre>${data}</pre>`);
			res.end();
		});
	} else {
		res.writeHead(404, { "Content-Type": "text/plain" });
		res.write("404 Not Found");
		res.end();
	}
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on port ${PORT}`))