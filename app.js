const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const durationInput = document.querySelector("#duration");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;

const timer = new Timer(startButton, pauseButton, durationInput, {
  // Callbacks which helps in connecting the timer to the other parts(For Border Animation) and helps in making the app modular
  // instead of putting all the code in Timer class
  onStart(totalDuration) {
    console.log("Timer Started");
    duration = totalDuration;
  },
  onTick(timeRemaining) {
      console.log("Timer Tick Down");
      circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
  },
  onComplete() {
      console.log("Timer Completed");
      circle.setAttribute('stroke-dashoffset', perimeter);
  }
});
