import { setTimeout } from "timers/promises";

export default async function fakeFetch(url: string) {
  await setTimeout(300);
  if (url === "http://error.com") throw Error("network error");
  return Buffer.from("some data");
}
