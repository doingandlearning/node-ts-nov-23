// Event Emitter -> create and consume
// Core behaviours!

// http/tcp
// File loading .on("chunk") .on("end")
//

import { EventEmitter } from "node:events";

const fileUploaded = new EventEmitter();

enum FileUploadEvent {
  WokeUp = "woke up",
  WentToSleep = "went to sleep",
  FileFinished = "file finished",
  Error = "error",
}

fileUploaded.on(FileUploadEvent.WokeUp, (name: string, drink: string) => {
  // Defensive!
  console.log(`${name} woke up and would like ${drink}.`);
});

fileUploaded.on(FileUploadEvent.WokeUp, () => {
  // Defensive!
  console.log("Heat up the water");
});

fileUploaded.once(FileUploadEvent.WokeUp, () => {
  // Defensive!
  console.log("Turn on the lights!");
});
// prependListenerOnce
fileUploaded.prependListener(FileUploadEvent.WokeUp, () => {
  // In here!
  console.log("I'll be called first even though I was registered last");
});

function doThingsBasedOnName(name: string) {
  console.log("🚨 I want to do something based on name!");
}

fileUploaded.on(FileUploadEvent.WokeUp, doThingsBasedOnName);

fileUploaded.emit(FileUploadEvent.WokeUp, "Kevin", "coffee");
fileUploaded.removeListener(FileUploadEvent.WokeUp, doThingsBasedOnName);

fileUploaded.emit(FileUploadEvent.WokeUp, "Kevin", "coffee");
fileUploaded.removeAllListeners(FileUploadEvent.WokeUp);
fileUploaded.emit(FileUploadEvent.WokeUp, "Kevin", "coffee");

fileUploaded.removeAllListeners();
fileUploaded.emit(FileUploadEvent.WokeUp, "Kevin", "coffee");
fileUploaded.emit(FileUploadEvent.WentToSleep, "Kevin", "coffee");

fileUploaded.on(FileUploadEvent.Error, () => console.log("It doesn't matter!"));
fileUploaded.emit(FileUploadEvent.Error);

// Usage:
fileUploaded.on(FileUploadEvent.WokeUp, doThingsBasedOnName);

fileUploaded.emit(FileUploadEvent.WokeUp, "Kevin", "coffee");

fileUploaded.removeListener(FileUploadEvent.WokeUp, doThingsBasedOnName);
