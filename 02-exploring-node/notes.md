- Generating HTML (arrow functions)
- Handling URLs - accessing the query string, headers 
- Accessing the fs - blocking/async
- CLI Arguments 
- Environment variables (dotenv or `--env-file`)


1. Initial the project
// npm init

or 

// npm init -y

2. Initialize TS

- Generates the tsconfig.json

```bash
tsc --init
```


3. Add the node types

npm install @types/node


4. Run the file

Compile and run 

```bash
tsc 
node ... 
```
Or use ts-node

```bash
ts-node ... 
```

Or 

```bash
tsx watch <filename>
```