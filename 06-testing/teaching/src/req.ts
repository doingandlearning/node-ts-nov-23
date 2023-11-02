export default function request(
  url: string,
  cb: (error: Error | null, data?: Buffer) => void
) {
  setTimeout(() => {
    if (url === "http://error.com") cb(Error("network error"));
    else cb(null, Buffer.from("some data"));
  }, 300);
}
