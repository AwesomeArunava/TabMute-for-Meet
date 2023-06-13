// content.js

// Add event listeners for visibilitychange and focus events
document.addEventListener("visibilitychange", handleVisibilityChange);
window.addEventListener("focus", handleTabSwitch);

// Function to handle visibility change
function handleVisibilityChange() {
  if (document.hidden) {
    // Tab or window is hidden (switched to another tab)

    const buttons = document.getElementsByTagName('button');
let buttonExists = false;

for (let i = 0; i < buttons.length; i++) {
  // Turn on microphone (ctrl + d) = mic is off
  if (buttons[i].getAttribute('aria-label') === 'Turn on microphone (ctrl + d)') {
    buttonExists = true;
    break;
  }
}

if(buttonExists){
  console.log("Mic is Off");
} else {
  const ctrlD = new KeyboardEvent("keydown", {
    key: "d",
    ctrlKey: true,
  });
  document.dispatchEvent(ctrlD);
}



    // console.log("Mute On");
   

   
  } else {
    // const buttons = document.getElementsByTagName('button');
    // let buttonExists = false;
    
    // for (let i = 0; i < buttons.length; i++) {
    //   // Turn on microphone (ctrl + d) = mic is off
    //   if (buttons[i].getAttribute('aria-label') === 'Turn on microphone (ctrl + d)') {
    //     buttonExists = true;
    //     break;
    //   }
    // }
    
    // if(buttonExists){
      
    //   const ctrlD = new KeyboardEvent("keydown", {
    //     key: "d",
    //     ctrlKey: true,
    //   });
    //   document.dispatchEvent(ctrlD);
    //   console.log("Mic is On");
    // } else {
    //   console.log("Mic is Off");
    // }
    
  }
}

// Function to handle tab switch
function handleTabSwitch() {
  if (document.hidden) {
    // Tab or window is hidden (switched to another tab)
    // alert("You switched to another tab!");
    
  }
}

// // Get the current URL
// const currentUrl = window.location.href;

// // Log the URL to the console
// console.log("Current URL:", currentUrl);


// content.js

// Get the current URL
const currentUrl = window.location.href;

// Send message to background script with the current URL
chrome.runtime.sendMessage({ url: currentUrl });
