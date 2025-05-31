import { parsedURL } from "../utils/URL.js";

const url = "https://example.com/path?query=123#fragment";
const result = parsedURL(url);

console.log("Parsed URL:", result);

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, result:", result);

  const output = document.getElementById("content");
  if (output) {
    // Display the parsed URL result
    output.innerHTML = `
      <h2>Parsed URL Results:</h2>
      <pre>${JSON.stringify(result, null, 2)}</pre>
    `;

    // Simple way to send a message to main process
    if (
      window.electronAPI &&
      typeof window.electronAPI.sendMessage === "function"
    ) {
      window.electronAPI.sendMessage("Hello World");

      // Listen for response from main process
      if (typeof window.electronAPI.receiveMessage === "function") {
        window.electronAPI.receiveMessage((message) => {
          console.log("Message from main process:", message);
          output.innerHTML += `
            <h3>Response from Main Process:</h3>
            <pre>${message}</pre>
          `;
        });
      }
    } else {
      console.error(
        "electronAPI is not properly defined in the preload script"
      );
      output.innerHTML += `<p>Error: electronAPI is not properly defined</p>`;
    }
  } else {
    console.error("Output element not found");
  }
});
