async function run(signal: AbortSignal) {
  try {
    const response = await fetch("https://swapi.dev/api/people", {
      signal,
    });
    if (!response.ok) {
      throw new Error(`Problem getting data: ${response.statusText}`);
    }
    const data = await response.json(); // does that by default!
    console.log(data);
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        console.log("Operation Aborted");
      } else {
        console.log(error);
      }
    }
  }
}

// AbortController()

const ac = new AbortController();
ac.abort();

run(ac.signal);
setTimeout(() => {
  ac.abort();
}, 100);
