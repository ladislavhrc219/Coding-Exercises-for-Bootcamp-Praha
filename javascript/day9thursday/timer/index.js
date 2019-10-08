// const reset = document.querySelector('#reset');
// const start =document.querySelector('#start');
// const timer = document.querySelector('#timer');
// const seconds = document.querySelector('#seconds');
// const minutes = document.querySelector('#minutes');
// 
// let interval;
// console.log(timer.textContent)

// const startTimer = () => {
//     interval = setInterval(() => {
//         console.log('it is running')
//         let time = parseInt(seconds.textContent);
//         let minutesTime = parseInt(minutes.textContent)
//         if(time <59) {
//             time++;
//             seconds.textContent =time.toString();
//         } else {
//             seconds.textContent = "00"
//             minutesTime++
//             minutes.textContent = `0${minutesTime.toString()}`;
//         }
//     }, 1000)
// }
// 
// const resetTimer = () => {
//     clearInterval(interval);
//     timer.textContent = 0;}
// 
// document.addEventListener('DOMContentLoaded', () => {
//     start.addEventListener('click', startTimer );
//     reset.addEventListener('click', resetTimer );})


class Timer {
    constructor(seconds, minutes) {
        this.seconds = seconds;
        this.minutes = minutes;
    }
    render() {
        //create the html structure
        this.element = document.createElement ('div');
        this.element.className = 'container';
        this.element.innerHTML = (

        `
        <button id="countUp"> COUNT UP </button>
        <br>
        <button id="reset"> RESET </button>
        <div>
        <p id="timer"> <span id="minutes">00</span> :<span id="seconds"> 37 </span> </p>

        </div>
        <button id="start"> START </button>
        <br>
        <button id="countDown">COUNT DOWN </button>
        `);

        const startTimer = () => {
            interval = setInterval(() => {
                console.log('it is running')
                let time = parseInt(seconds.textContent);
                let minutesTime = parseInt(minutes.textContent)
                if(time <59) {
                    time++;
                    seconds.textContent =time.toString();
                } else {
                    seconds.textContent = "00"
                    minutesTime++
                    minutes.textContent = `0${minutesTime.toString()}`;
                }
            }, 1000)
        }

        const resetTimer = () => {
            clearInterval(interval);
         timer.textContent = 0;
        }

        const countUp = this.element.querySelector('#countUp');
        countUp.addEventListener('click',() => {
            this.countUp;
        });

        const countDown = this.element.querySelector('#countDown');
        countDown.addEventListener('click',() => {
            this.countDown;
        });

        const start = this.element.querySelector('#start');
        start.addEventListener('click', () => {
            this.start;
        });
            
        const reset = this.element.querySelector('#reset');
        reset.addEventListener('click', () => {
            this.reset;
        });
       
   
        this.update();
    }

    countUp () {
        this.seconds +=1;
        // this.minutes +=1;
        this.update();
    }
    countDown () {
        this.seconds -=1;
        // this.minutes -=1;
        this.update();
    }

    mount(parent) {
        //execute the render function
        this.render();
        parent.appendChild(this.element);

    }

    //starttimer method to do the countdown
    //reset timer method to reset the timer back to zero and stop the interval

    update() {
        console.log(this.element)
        const minutes = this.element.querySelector('#minutes');
        console.log(minutes)
        minutes.textContent = `${this.minutes}`;
        const seconds = this.element.querySelector('#seconds');
        seconds.textContent=`${this.seconds}`;
        const timer = this.element.querySelector
        timer.textContent = `${this.timer}`;
        const reset = this.element.querySelector('#reset');
        reset.textContent=`${this.reset}`;
        const start = this.element.querySelector
        start.textContent = `${this.start}`;

    }


}   