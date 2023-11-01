## Lab Activity: Personal Portfolio Website with Node.js

### Objective:

Build a simple personal portfolio website using Node.js that showcases:

- Your bio on the homepage.
- Your skills on the about page.
- A contact form that writes queries to a file.
- Server configurations and secret API keys managed via environment variables.
- Bonus: A "shout-out" feature where users can leave a message and their name. Display the last message passed as a command-line argument when the server starts.

### Tasks:

1. **Setup:**

   - Initialize a new Node.js project. (npm init -y)
	 - Optional initialize as a typescript project
   - Install the required modules (dotenv).

2. **Generating HTML Dynamically:**

   - Create a simple server that responds with an HTML greeting on the homepage.
	 - Feel free to copy and paste from our exploring-node module

3. **Handling Multiple URLs:**

   - Add routes for '/about' and '/contact'.
   - Display your skills on the 'about' page.
   - Create a contact form on the 'contact' page.

	 Here's the code for the contact form.
	 - You'll need to import `querystring` 


```js
const querystring = require("node:querystring")

// all the other code

else if (path === "/contact") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h1>Contact Me</h1>");
		res.write(
			'<form method="POST">Message: <input type="text" name="message"><br>Name: <input type="text" name="name"><br><input type="submit" value="Submit"></form>'
		);

		// TODO: Show the contents of messages.txt

		if (req.method === "POST") {
			let body = "";
			req.on("data", (chunk) => {
				body += chunk.toString();
			});

			req.on("end", () => {
				const postData = querystring.parse(body);

				// Writing the user's message to 'messages.txt'
				// postData will look like {name: string, message: string}
				// TODO: append to messages.txt in format "name: message\n"
	
				// TODO: you could show the other messages here again

			});
		}


		```


4. **Accessing the Filesystem:**

   - On form submission (you can simulate this), write the user's message to a 'messages.txt' file.
   - Every new message should append to this file.
   - Display the contents of 'messages.txt' below the form.

5. **Command Line Arguments:**

   - Accept a command-line argument for a "shout-out" message.
   - Display this message on the homepage.
   - Example: Start the server with `node server.js "Great Work on the Portfolio!"`, and the homepage should display this message.

6. **Environment Variables with dotenv:**

   - Use the dotenv module to manage environment variables.
   - Store the server's port number and a secret API key in a `.env` file. (The API key can be a mock key for this lab.)
   - Ensure your server uses the port number from the environment variable.

7. **Bonus: Built-in Environment Variable Support:**
   - Explore the built-in support for `.env` files in Node v20.
   - Test starting your server using `node --env-file .env`.

### Guidelines:

- Keep the HTML content minimal and focus on the Node.js functionality.
- Comment your code to explain the functionality.
- Ensure error handling is in place, especially when working with the filesystem.

### Assessment:

- Does the website handle multiple URLs correctly?
- Is the contact form writing to the 'messages.txt' file successfully?
- Can you pass and display a "shout-out" message using command-line arguments?
- Are the environment variables (from the `.env` file) being loaded and used correctly?

### Conclusion:

This lab activity combines multiple Node.js concepts, from dynamic HTML generation and URL handling to working with the filesystem and managing configurations. By the end, you should have a basic personal portfolio website with some interactive features, all powered by Node.js!
