class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
      console.log('', this.currentTime);
    }, 1 * 1000);
  }
  getMinutes() {
    console.log(this.currentTime / 60);
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    console.log(this.currentTime % 60);
    return Math.floor(this.currentTime % 60);
  }
  computeTwoDigitNumber(value) {
    return ('0' + value).slice(-2);
  }
  stop() {
    clearInterval(this.intervalID);
  }

  reset() {
    this.currentTime = 0;
  }
  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes);
    const seconds = this.computeTwoDigitNumber(this.getSeconds);
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}