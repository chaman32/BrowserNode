const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

// In main process
// ipcMain.handle("do-thing", async (event) => {
//   console.log("do-thing called");
//   return "Thing was done!";
// });

// app.whenReady().then(() => {
//   createWindow();
// });

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Handle IPC events
// ipcMain.handle("do-thing", (event) => {
//   console.log("do-thing handler called");

//   return "Thing was done!";
// });

// ipcMain.handle("hello-world", (event) => {
//   console.log("hello-world handler called");
//   return "Hello World from Main Process!";
// });

// ipcMain.on("send-url", (event, url) => {
//   console.log("send-url event received with:", url);
//   const parsed = parsedURL(url);
//   event.sender.send("url-parsed", parsed);
// });

// Handle IPC messages
ipcMain.on("message", (event, message) => {
  console.log("Received message from renderer:", message);

  // Send a response back
  event.sender.send("message-reply", "Hello from main process!");
});
