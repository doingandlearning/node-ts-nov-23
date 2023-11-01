const http = require('node:http');
const url = require('node:url'); // import url from "node:url"

const server = http.createServer((req, res) => {
	const path = url.parse(req.url, true).pathname;
	// destructuring
	const { company, course } = url.parse(req.url, true).query;
	// { company: "companies house", course: "node" }

	const [, teamLeader] = ["Stephen", "Katalina", "Himal"]
	console.log(teamLeader)

	// const [count, setCount] = useState()

	console.log(path)
	if (path === "/") {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		const location = "Belfast";
		res.write(`<h1>Welcome to Node.js! 
				I'm in ${location}. <br/>
		   You're from ${company} learning about ${course || "life"}
			</h1>
			 `);
		res.end();
	} else {
		res.writeHead(404, { 'Content-Type': 'text/html' });
		res.write(`<h1>Invalid route.</h1>`);
		res.end();
	}
});

function add(a, b) {
	return a + b;
}

add(1, 2)
const addArrow = (a, b) => a + b // lambda
addArrow(12, 12)


server.listen(3000);

// 2009
// TS -> Microsoft
// 

// 2015 -> ES6/ES2015 -> ECMAScript  
// 2016 -> ES7
// ES2023