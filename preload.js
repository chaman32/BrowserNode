

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
});

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendURL: (url) => ipcRenderer.send('url:parse', url),
  onParsed: (callback) => ipcRenderer.on('url:parsed', (event, data) => callback(data)),
  doThing: () => ipcRenderer.send('do-a-thing')
});


// This code uses Electron's contextBridge to expose a safe API to the renderer process.
// It allows the renderer process to send a URL to the main process for parsing and receive the parsed data back.
// The `sendURL` function sends a URL to the main process, and the `onParsed` function sets up a listener for parsed data.
// This is a secure way to communicate between the main and renderer processes in Electron applications.
// The `contextBridge` API is used to expose a limited set of functionality from the main process to the renderer process.
// This is important for security, as it helps prevent direct access to Node.js APIs from the renderer process.
// The `ipcRenderer` module is used for inter-process communication between the main and renderer processes.
// The `sendURL` function sends a URL to the main process for parsing, and the `onParsed` function sets up a listener for parsed data.
// This allows the renderer process to receive the parsed data back from the main process.
// The `callback` function is called with the parsed data when it is received.
// This is a common pattern in Electron applications to handle communication between processes.
// The `event` parameter represents the event that triggered the callback, and `data` contains the parsed URL data.
// This allows the renderer process to update the UI or perform other actions based on the parsed data received from the main process.
// The `url:parse` event is sent from the renderer process to the main process with the URL to be parsed.
// The `url:parsed` event is sent back from the main process to the renderer process with the parsed data.
// This two-way communication allows for a responsive and interactive user experience in Electron applications.


