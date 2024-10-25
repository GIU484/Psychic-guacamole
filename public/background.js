/* global chrome */
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
    // Initialize default state or perform on-install tasks
  });
  
  // Listen for messages from content scripts
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchShortcuts") {
      // Fetch shortcuts from the server or local storage
      sendResponse({ shortcuts: "Shortcuts data fetched" });
    } else if (request.action === "login") {
      // Handle user login
      authenticateUser(request.credentials).then(response => {
        sendResponse({ token: response.token });
      });
    }
    return true; // keep the messaging channel open for async response
  });
  
  function authenticateUser(credentials) {
    // Perform authentication with the server
    return fetch('https://yourserver.com/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
  }
  