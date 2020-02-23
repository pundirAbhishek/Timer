class Timer {
    constructor(startButton, pauseButton, durationInput, callbacks) {
      this.startButton = startButton;
      this.pauseButton = pauseButton;
      this.durationInput = durationInput;
      if (callbacks) {
          this.onStart = callbacks.onStart;
          this.onTick = callbacks.onTick;
          this.onComplete = callbacks.onComplete;
      }
  
      this.startButton.addEventListener("click", this.start);
      this.pauseButton.addEventListener("click", this.pause);
      // this.durationInput.addEventListener('click', this.duration);
    }

    start = () => {
  
      if(this.onStart){
          this.onStart(this.timeRemaining);
      }
      // Calling the tick method manually as set Interval will call the method after every 1 second
      // And for the first time we dont waant to wait for one second to dtart the timer
      this.tick();
      // Calling the tick method after every 50ms
      this.intervalId = setInterval(this.tick, 20);
      // setInterval() return an id which we could use to stop the interval
    };
  
    pause = () => {
      clearInterval(this.intervalId);
    };
  
    tick = () => {
      if (this.timeRemaining <= 0) {
        this.pause();
        if(this.onComplete){
          this.onComplete();
      }
      } else {
        this.timeRemaining = this.timeRemaining - .02;
        if(this.onTick){
          this.onTick(this.timeRemaining);
      }
      }
    };
  
    get timeRemaining() {
      return parseFloat(this.durationInput.value);
    }
  
    set timeRemaining(time) {
      this.durationInput.value = time.toFixed(2);
    }
  }