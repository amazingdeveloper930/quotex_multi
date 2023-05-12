document.addEventListener('DOMContentLoaded', function () {
    const clickButton = document.getElementById('clickButton');
    clickButton.addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: clickSaveButton
        });
      });
    });
  });
  
  function clickSaveButton() {
    const saveButtons = document.getElementsByClassName('save');
    for (let i = 0; i < saveButtons.length; i++) {
      for (let j = 0; j < 100; j++) {
        saveButtons[i].click();
      }
    }
  }
  