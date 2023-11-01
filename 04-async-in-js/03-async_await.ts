import fs from "node:fs/promises";

type User = {
  name: string;
  age: number;
  region: string;
};

type Regions = {
  [key: string]: string[];
};

type NewsArticle = {
  id: string;
  headline: string;
  content: string;
};

async function getNewsForUser(userFilePath: string) {
  try {
    // Read and parse the user data
    const userDataPromise = fs.readFile(userFilePath, "utf8");
    const regionsDataPromise = fs.readFile("./regions.json", "utf8");
    const newsDataPromise = fs.readFile("./news.json", "utf8");

    const [userDataString, regionsDataString, newsDataString] =
      await Promise.all([userDataPromise, regionsDataPromise, newsDataPromise]);

    const user: User = JSON.parse(userDataString); // Stream ..

    // Read and parse the regions data
    const regions: Regions = JSON.parse(regionsDataString);
    const userRegionNewsIDs = regions[user.region];

    // Read and parse the news data
    const allNews: NewsArticle[] = JSON.parse(newsDataString);

    // Filter out the relevant news articles for the user's region
    const userNews = allNews.filter((article) =>
      userRegionNewsIDs.includes(article.id)
    );
    userNews.forEach((article) => {
      console.log(article.headline);
      console.log(article.content);
      console.log("-----");
    });
  } catch (error) {
    console.log(error);
    // return []; // Return an empty array in case of an error
  }
}

// Usage
getNewsForUser("./user.json");
