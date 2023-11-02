async function doSomething() {
  // black box
  //
  // await ...
  return "Hello";
}

// new Promise((resolve, reject) => {
// 	new Promise((resolve2, reject2) => {

// 		resolve("Hello");
// 	})
// });

const name = await doSomething();
