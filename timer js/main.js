// const timeDisplay = document.querySelector(".timeDisplay");
// const startBtn = document.querySelector(".starterBtn");
// const pauseBtn = document.querySelector(".pauseBtn");
// const resetBtn = document.querySelector(".resetBtn");

// let startTime = 0;
// let elapsedTime = 0;
// let CurrentTime = 0;
// let paused = true;
// let intervalId;
// let hrs = 0;
// let mins = 0;
// let secs = 0;

// startBtn.addEventListener("click", () => {
//   if (paused) {
//     paused = false;
//     startTime = Date.now() - elapsedTime;
//     intervalId = setInterval(updateTime, 1000);
//   }
//   console.log("h");
// });
// pauseBtn.addEventListener("click", () => {
//   if (!paused) {
//     paused = true;
//     elapsedTime = Date.now() - startTime;
//     clearInterval(intervalId);
//   }
// });
// resetBtn.addEventListener("click", () => {
//   paused = true;
//   clearInterval(intervalId);
//   startTime = 0;
//   elapsedTime = 0;
//   CurrentTime = 0;
//   hrs = 0;
//   mins = 0;
//   secs = 0;
//   timeDisplay.textContent = "00:00:00";
// });

// function updateTime() {
//   elapsedTime = Date.now() - startTime;

//   secs = Math.floor((elapsedTime / 1000) % 60);
//   mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
//   hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

//   secs = pad(secs);
//   mins = pad(mins);
//   hrs = pad(hrs);

//   timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

//   function pad(unit) {
//     return ("0" + unit).length > 2 ? unit : "0" + unit;
//   }
// }

// class Timer {
//   constructor() {
//     this.timeDisplay = document.querySelector(".timeDisplay");
//     this.startBtn = document.querySelector(".starterBtn");
//     this.pauseBtn = document.querySelector(".pauseBtn");
//     this.resetBtn = document.querySelector(".resetBtn");

//     this.startTime = 0;
//     this.elapsedTime = 0;
//     this.CurrentTime = 0;
//     this.paused = true;
//     this.intervalId;
//     this.hrs = 0;
//     this.mins = 0;
//     this.secs = 0;

//     this.startBtn.addEventListener("click", this.start.bind(this));
//     this.pauseBtn.addEventListener("click", this.pause.bind(this));
//     this.resetBtn.addEventListener("click", this.reset.bind(this));
//   }

//   start() {
//     if (this.paused) {
//       this.paused = false;
//       this.startTime = Date.now() - this.elapsedTime;
//       this.intervalId = setInterval(this.updateTime.bind(this), 1000);
//     }
//   }

//   pause() {
//     if (!this.paused) {
//       this.paused = true;
//       this.elapsedTime = Date.now() - this.startTime;
//       clearInterval(this.intervalId);
//     }
//   }

//   reset() {
//     this.paused = true;
//     clearInterval(this.intervalId);
//     this.startTime = 0;
//     this.elapsedTime = 0;
//     this.CurrentTime = 0;
//     this.hrs = 0;
//     this.mins = 0;
//     this.secs = 0;
//     this.timeDisplay.textContent = "00:00:00";
//   }

//   updateTime() {
//     this.elapsedTime = Date.now() - this.startTime;

//     this.secs = Math.floor((this.elapsedTime / 1000) % 60);
//     this.mins = Math.floor((this.elapsedTime / (1000 * 60)) % 60);
//     this.hrs = Math.floor((this.elapsedTime / (1000 * 60 * 60)) % 60);

//     this.secs = this.pad(this.secs);
//     this.mins = this.pad(this.mins);
//     this.hrs = this.pad(this.hrs);

//     this.timeDisplay.textContent = `${this.hrs}:${this.mins}:${this.secs}`;
//   }

//   pad(unit) {
//     return ("0" + unit).length > 2 ? unit : "0" + unit;
//   }
// }

// const timer = new Timer();

// class Timer {
//   #timeDisplay = document.querySelector(".timeDisplay");
//   #startBtn = document.querySelector(".starterBtn");
//   #pauseBtn = document.querySelector(".pauseBtn");
//   #resetBtn = document.querySelector(".resetBtn");
//   #intervalId;

//   #startTime = 0;
//   #elapsedTime = 0;
//   #paused = true;

//   #pad(unit) {
//     return unit.toString().padStart(2, "0");
//   }

//   #updateTime = () => {
//     this.#elapsedTime = Date.now() - this.#startTime;

//     const secs = Math.floor((this.#elapsedTime / 1000) % 60);
//     const mins = Math.floor((this.#elapsedTime / (1000 * 60)) % 60);
//     const hrs = Math.floor(
//       (this.#elapsedTime / (1000 * 60 * 60)) % 60
//     );

//     const formattedTime = `${this.#pad(hrs)}:${this.#pad(
//       mins
//     )}:${this.#pad(secs)}`;
//     this.#timeDisplay.textContent = formattedTime;
//   };

//   constructor() {
//     this.#startBtn.addEventListener("click", this.start);
//     this.#pauseBtn.addEventListener("click", this.pause);
//     this.#resetBtn.addEventListener("click", this.reset);
//   }

//   start = () => {
//     if (this.#paused) {
//       this.#paused = false;
//       this.#startTime = Date.now() - this.#elapsedTime;
//       this.#intervalId = setInterval(this.#updateTime, 1000);
//     }
//   };

//   pause = () => {
//     if (!this.#paused) {
//       this.#paused = true;
//       this.#elapsedTime = Date.now() - this.#startTime;
//       clearInterval(this.#intervalId);
//     }
//   };

//   reset = () => {
//     this.#paused = true;
//     clearInterval(this.#intervalId);
//     this.#startTime = 0;
//     this.#elapsedTime = 0;
//     this.#timeDisplay.textContent = "00:00:00";
//   };
// }

// const timer = new Timer();

// function Stopwatch() {
//   const timeDisplay = document.querySelector(".timeDisplay");
//   const startBtn = document.querySelector(".starterBtn");
//   const pauseBtn = document.querySelector(".pauseBtn");
//   const resetBtn = document.querySelector(".resetBtn");

//   let startTime = 0;
//   let elapsedTime = 0;
//   let paused = true;
//   let intervalId;
//   let hours = 0;
//   let minutes = 0;
//   let seconds = 0;

//   function updateTime() {
//     elapsedTime = Date.now() - startTime;
//     seconds = Math.floor((elapsedTime / 1000) % 60);
//     minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
//     hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

//     seconds = pad(seconds);
//     minutes = pad(minutes);
//     hours = pad(hours);

//     timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
//   }

//   function pad(unit) {
//     return ("0" + unit).slice(-2);
//   }

//   function handleStartClick() {
//     if (paused) {
//       paused = false;
//       startTime = Date.now() - elapsedTime;
//       intervalId = setInterval(updateTime, 1000);
//     }
//   }

//   function handlePauseClick() {
//     if (!paused) {
//       paused = true;
//       elapsedTime = Date.now() - startTime;
//       clearInterval(intervalId);
//     }
//   }

//   function handleResetClick() {
//     paused = true;
//     clearInterval(intervalId);
//     startTime = 0;
//     elapsedTime = 0;
//     hours = 0;
//     minutes = 0;
//     seconds = 0;
//     timeDisplay.textContent = "00:00:00";
//   }

//   function init() {
//     startBtn.addEventListener("click", handleStartClick);
//     pauseBtn.addEventListener("click", handlePauseClick);
//     resetBtn.addEventListener("click", handleResetClick);
//   }

//   return {
//     init,
//   };
// }

// const stopwatch = Stopwatch();
// stopwatch.init();

class Stopwatch {
  constructor() {
    this.timeDisplay = document.querySelector(".timeDisplay");
    this.startBtn = document.querySelector(".starterBtn");
    this.pauseBtn = document.querySelector(".pauseBtn");
    this.resetBtn = document.querySelector(".resetBtn");
    this.startTime = 0;
    this.elapsedTime = 0;
    this.paused = true;
    this.intervalId = null;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.updateTime = this.updateTime.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  updateTime() {
    this.elapsedTime = Date.now() - this.startTime;
    this.seconds = Math.floor((this.elapsedTime / 1000) % 60);
    this.minutes = Math.floor((this.elapsedTime / (1000 * 60)) % 60);
    this.hours = Math.floor(
      (this.elapsedTime / (1000 * 60 * 60)) % 60
    );

    this.seconds = this.pad(this.seconds);
    this.minutes = this.pad(this.minutes);
    this.hours = this.pad(this.hours);

    this.timeDisplay.textContent = `${this.hours}:${this.minutes}:${this.seconds}`;
  }

  pad(unit) {
    return unit.toString().padStart(2, "0");
  }

  handleStartClick() {
    if (this.paused) {
      this.paused = false;
      this.startTime = Date.now() - this.elapsedTime;
      this.intervalId = setInterval(this.updateTime, 1000);
    }
  }

  handlePauseClick() {
    if (!this.paused) {
      this.paused = true;
      this.elapsedTime = Date.now() - this.startTime;
      clearInterval(this.intervalId);
    }
  }

  handleResetClick() {
    this.paused = true;
    clearInterval(this.intervalId);
    this.startTime = 0;
    this.elapsedTime = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.timeDisplay.textContent = "00:00:00";
  }

  init() {
    this.startBtn.addEventListener("click", this.handleStartClick);
    this.pauseBtn.addEventListener("click", this.handlePauseClick);
    this.resetBtn.addEventListener("click", this.handleResetClick);
  }
}

const stopwatch = new Stopwatch();
stopwatch.init();
