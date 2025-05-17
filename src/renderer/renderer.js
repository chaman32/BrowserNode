import { parsedURL } from "../utils/URL.js";    

const url = "https://example.com/path?query=123#fragment";
const result = parsedURL(url);

console.log('Parsed URL:', result);

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, result:', result);

    console.log('DOM loaded, result:', window.electronAPI.doThing());

    // const output = document.getElementById('content');
    // if (output && result) {
    //     // output.innerHTML = `
    //     //     <h2>Parsed URL Results:</h2>
    //     //     <pre>${JSON.stringify(result, null, 2)}</pre>        
    //     // `;
    //     window.electronAPI.sendURL(url);
    //     window.electronAPI.onParsed((data) => {
    //         console.log('Parsed data received:', data);
    //         output.innerHTML += `
    //             <h2>Parsed Data from Main Process:</h2>
    //             <pre>${JSON.stringify(data, null, 2)}</pre>
    //         `;
    //     });

    // } else {
    //     console.error('Either output element not found or parsing failed');
    // }
});

