class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) printTimeCallback();
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.round(this.currentTime % 60);
  }
  
  getCentiseconds() {
    return currentTime;
  }

  computeTwoDigitNumber(value) {
    let newVal = "";
    if (value < 10) {
      newVal = `0${value}`;
    } else {
      newVal = `${value}`;
    }
    return newVal;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}