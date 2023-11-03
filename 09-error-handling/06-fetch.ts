const fetchWithRetry = (url:string, numRetries = 3) => {
  const attemptFetch = (retryCount: number) => {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok.');
        return response.json();
      })
      .catch(error => {
        if (retryCount > 0) {
          console.log(`Retrying... attempts left: ${retryCount}`);
          attemptFetch(retryCount - 1);
        } else {
          console.error('Max retries reached. Operation failed:', error);
        }
      });
  };