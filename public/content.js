/* global chrome */

document.body.addEventListener('input', function (e) {
    const target = e.target;
  
    // Ensure the event is from a text input or textarea
    if (target.tagName.toLowerCase() === 'input' || target.tagName.toLowerCase() === 'textarea') {
      let value = target.value;
      // Check if the last typed word matches any shortcut trigger
      checkForShortcuts(value, (replacementText) => {
        if (replacementText) {
          // Replace the shortcut trigger with the full text
          target.value = target.value.replace(/(?:\s|^)(\w+)$/, `$1${replacementText}`);
        }
      });
    }
  });
  
  function checkForShortcuts(text, callback) {
    // Send a message to the background to fetch shortcuts
    chrome.runtime.sendMessage({ action: "fetchShortcuts" }, response => {
      const shortcuts = response.shortcuts; // Assume response contains shortcuts
      // Example shortcuts format: [{ trigger: "brb", text: "be right back" }]
      const words = text.split(" ");
      const lastWord = words[words.length - 1];
      shortcuts.forEach(shortcut => {
        if (shortcut.trigger === lastWord) {
          callback(shortcut.text);
        }
      });
    });
  }