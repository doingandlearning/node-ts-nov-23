// Event Emitter -> create and consume
// Core behaviours!

// http/tcp
// File loading .on("chunk") .on("end")
//

import { EventEmitter } from "node:events";

const fileUploaded = new EventEmitter();

fileUploaded.on("woke up", (name: string, drink: string) => {
  // Defensive!
  console.log(`${name} woke up and would like ${drink}.`);
});

fileUploaded.on("woke up", () => {
  // Defensive!
  console.log("Heat up the water");
});

fileUploaded.once("woke up", () => {
  // Defensive!
  console.log("Turn on the lights!");
});
// prependListenerOnce
fileUploaded.prependListener("woke up", () => {
  // In here!
  console.log("I'll be called first even though I was registered last");
});

function doThingsBasedOnName(name: string) {
  console.log("🚨 I want to do something based on name!");
}

type FileUploadEvents = "woke up" | "went to sleep" | "file finished";

enum File {}

fileUploaded.on("woke up", doThingsBasedOnName);

fileUploaded.emit("woke up", "Kevin", "coffee");
fileUploaded.removeListener("woke up", doThingsBasedOnName);

fileUploaded.emit("woke up", "Kevin", "coffee");
fileUploaded.removeAllListeners("woke up");
fileUploaded.emit("woke up", "Kevin", "coffee");

fileUploaded.removeAllListeners();
fileUploaded.emit("woke up", "Kevin", "coffee");
fileUploaded.emit("gone to sleep", "Kevin", "coffee");

fileUploaded.on("error", () => console.log("It doesn't matter!"));
fileUploaded.emit("error");

enum FileUploadEvent {
  WokeUp = "woke up",
  WentToSleep = "went to sleep",
  FileFinished = "file finished",
}

// Usage:
fileUploaded.on(FileUploadEvent.WokeUp, doThingsBasedOnName);

fileUploaded.emit(FileUploadEvent.WokeUp, "Kevin", "coffee");

fileUploaded.removeListener(FileUploadEvent.WokeUp, doThingsBasedOnName);
