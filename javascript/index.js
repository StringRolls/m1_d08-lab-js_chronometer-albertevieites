const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

// Print Time
function printTime() {
  setInterval(() => {
    const minutes = printMinutes();
    const seconds = printSeconds();

    minDecElement.innerText = minutes[0];
    minUniElement.innerText = minutes[1];
    secDecElement.innerText = seconds[0];
    secUniElement.innerText = seconds[1];
  }, 1000);
}
function printMinutes() {
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
}
function printSeconds() {
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}
function printSplit() {
  // ... your code goes here
  const timeStamp = chronometer.split();
  const newList = document.createElement('li');

  newLi.innerText = timeStamp;

  splitsElement.appendChild(newLi);
}
function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}
function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
}
function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';
}
function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
}
function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    setStopBtn();

    setSplitBtn();

    chronometer.start();

    printTime();
  } else if (btnLeftElement.innerText === 'STOP') {
    setStartBtn();

    setResetBtn();

    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.innerText === 'RESET') {
    chronometer.stop();

    chronometer.reset();

    secUniElement.innerText = '0';
    secDecElement.innerText = '0';
    minUniElement.innerText = '0';
    minDecElement.innerText = '0';
    milDecElement.innerText = '0';
    milUniElement.innerText = '0';

    clearSplits();
  } else {
    printSplit();
  }
});
