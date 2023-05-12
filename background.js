// Create a fixed widget element
const widget = document.createElement('div');
widget.style.position = 'fixed';
widget.style.bottom = '20px';
widget.style.left = '100px';
widget.style.background = '#fff';
widget.style.padding = '10px';
// widget.style.border = '1px solid #ccc';
widget.style.zIndex = '9999';
widget.style.textAlign="center";
widget.style.background="#1a2c5e";
widget.style.borderRadius="5px";

let counter = 0;

const inputFIELD = document.createElement('input');
inputFIELD.id="click-counter";
inputFIELD.placeholder = "click count";
inputFIELD.type="number";
inputFIELD.value=30;
inputFIELD.style.display = "block";
inputFIELD.style.margin = "10px";
inputFIELD.style.padding = "10px";

// Create a button element in the widget
const buttonMULTIUP = document.createElement('button');
buttonMULTIUP.textContent = 'Click UP';
buttonMULTIUP.className = "button button--success button--spaced";

buttonMULTIUP.style.margin = "10px";



buttonMULTIUP.addEventListener('click', () => {
    // Simulate the click event multiple times per second
    counter = 0;
    const clickCounter = document.getElementById('click-counter').value * 1;
    debugger;
    if(clickCounter <= 0)
    clickCounter = 1;
  const clickInterval = setInterval(() => {
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    const upbutton = document.getElementsByClassName('section-deal__button')[0];
    upbutton.dispatchEvent(event);
    counter ++;
    if(counter >= clickCounter)
    {
      counter = 0;
      clearInterval(clickInterval);
    }

  }
  , 30); // 100 times per second (1000ms / 10ms)


  // setTimeout(() => {
  //   clearInterval(clickInterval);
  // }, 1000);
});



const buttonMULTIDOWN = document.createElement('button');
buttonMULTIDOWN.textContent = 'Click DOWN';
buttonMULTIDOWN.className = "button button--danger button--spaced";




buttonMULTIDOWN.addEventListener('click', () => {
    // Simulate the click event multiple times per second
    counter = 0;
    const clickCounter = document.getElementById('click-counter').value * 1;
    if(clickCounter <= 0)
    clickCounter = 1;
  const clickInterval = setInterval(() => {
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    
    const downbutton = document.getElementsByClassName('section-deal__button')[1];
    downbutton.dispatchEvent(event);
    counter ++;
    if(counter >= clickCounter)
    {
      counter = 0;
      clearInterval(clickInterval);
    }

  }
  , 30); 
  // setTimeout(() => {
  //   clearInterval(clickInterval);
  // }, 1000);
});



// Append the button to the widget
widget.appendChild(inputFIELD);
widget.appendChild(buttonMULTIUP);
widget.appendChild(buttonMULTIDOWN);

// Append the widget to the document body
document.body.appendChild(widget);


// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: clickSaveButton
//   });
// });

// function clickSaveButton() {
//   const saveButton = document.getElementsByClassName('save')[0];
//   if (saveButton) {
//     for (let i = 0; i < 100; i++) {
//       saveButton.click();
//     }
//   }
// }


