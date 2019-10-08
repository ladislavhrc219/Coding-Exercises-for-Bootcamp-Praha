
class Bus {
    constructor (direction, stations, seats, passengers, last_station ) {
        // const stations =;
        this.direction=direction;
        this.stations=stations;
        this.seats = seats;
        this.passengers= passengers;
        this.last_station = last_station;
    }
    // current() {
    //     return this.stations[this.last_station];
       
    // }
    // // next() sets the last_station index to the next station,
    // next () {
    //     return this.last_station++;
    
    // }
    // // board(count) board count new passengers to the bus. If the number of passenger would be greater the the number of seats after calling this method, just board only as many to fit in the bus.
    // board () {
    //     return 
    // }
}

const myBus = [
    new Bus('Prague to Vienna', ["Prah", "Jihlava", "Brno", "Břeclav", "Vídenn"], 44, 39, 2),
    new Bus("Prague to Vienna", ["Praha", "Jihlava", "Brno", "Břeclav", "Vídeň"], 40, 20, 3 ),
    new Bus("Vienna to Prague", ["Praha", "Jihlava", "Brno", "Břeclav", "Vídeň"], 40, 20, 3),
    new Bus ("Vienna to Prague", ["Praha", "Jihlava", "Brno", "Břeclav", "Vídeň"], 50, 25, 6),
    new Bus ('Vienna to Prague', ['Praha', 'Jihlava', 'Brno', 'Břeclav', 'Vídeň'], 34, 55,2),
    new Bus ("Prague to Vienna", ['Praha', 'jihlava', 'brno', 'breclav', 'viden'], 44, 33, 4),
]

// console.log(myBus);
// console.log(myBus[0].current())
// // console.log(myBus[2].next())
// console.log(myBus[0].next(4))

document.addEventListener('DOMContentLoaded', () => {
    const busList = document.querySelector('.busList');

    for (const bus of myBus) {
        console.log('YES loop activate');
        const busElement = document.createElement('div');
        busElement.classList.add("container");
        busElement.innerHTML = (
           `
           <div class="bus-direction">direction: ${bus.direction}</div>
            <div class="bus-stations">station: ${bus.stations}</div>
            <div class="bu-seats">seats: ${bus.seats}</div>
            <div class="bus-passengers">passengers: ${bus.passengers}</div>
            <div class="bus-laststation">laststation: ${bus.last_station}</div>
           `
        );
        busList.appendChild(busElement);

    }
});



