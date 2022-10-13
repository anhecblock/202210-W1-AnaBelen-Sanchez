let flights = [
    { id: 00, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 01, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 02, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 03, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 04, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 05, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 06, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 07, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 08, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 09, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false },
];

const welcomeGreetings = () => {
    let name = prompt("Hi passenger, what's your name?");
    name = name.trim();
    alert(`Welcome ${name} :D`);
};

const showFlights = () => {
    console.log('>>>>>>>AVAILABLE FLIGHTS>>>>>>>');
    const scales = flights.filter(function (flight) {
        if (flight.scale === true) {
            console.log(
                `${flight.id} : The flight with origin ${flight.to} and destination ${flight.from} has a cost of ${flight.cost}€ and with one stopover.`
            );
        } else {
            console.log(
                `${flight.id} : The flight with origin ${flight.to} and destination ${flight.from} has a cost of ${flight.cost}€ and  without stopovers.`
            );
        }
    });
};

const askForAdminUser = () => {
    const ask = prompt("Wat's your choice ,user or admin?");
    if (ask === null) {
        askForAdminUser();
    } else if (ask.toLowerCase() !== 'user' && ask.toLowerCase() !== 'admin') {
        alert('Check your answer and try again');
        askForAdminUser();
    } else {
        console.log(ask);
        return ask.toLowerCase();
    }
};

const seePrices = () => {
    const price = prompt('Please, introduce a price  to search a flight');

    if (isNaN(price)) {
        alert("It's not a number");
        seePrices();
    } else {
        alert('Here you have the flights with that price or cheaper: ');
        flights = flights.filter((flight) => flight.cost <= price);
        showFlights();
        return askUserPriceAgain();
    }
};

function askUserPriceAgain() {
    switch (
        prompt('Do you want to search the flights by another price?: y/n')
    ) {
        case 'y':
            return seePrices();
        case 'n':
            alert('Good bye, have a nice day!');
            return;
        default:
            console.log('Invalid answer. Please, try again');
            return askUserPriceAgain();
    }
}

const askAdminThreeActions = () => {
    const threeAction = prompt(
        'What do you want between create  flight , delete flight or neither?'
    );

    if (threeAction === null) {
        askAdminThreeActions();
    } else if (
        threeAction.toLowerCase() !== 'create' &&
        threeAction.toLowerCase() !== 'delete' &&
        threeAction.toLowerCase() !== 'neither'
    ) {
        alert('Please insert a correct action ');
        askAdminThreeActions();
    } else {
        return threeAction.toLocaleLowerCase();
    }
};

const adminChoice = () => {
    const choice = askAdminThreeActions();
    if (choice === 'create') {
        addFlight();
        showFlights();
        adminChoice();
    }

    if (choice === 'delete') {
        showFlights();
        let idToDelete = +prompt('Insert Id to delete');
        flights = flights.filter((flight) => flight.id !== idToDelete);
        showFlights();
        adminChoice();
        showFlights();
    }

    if (choice === 'neither') {
        askGoodbye();
    }
};

function askGoodbye() {
    switch (prompt('Do you really want to finish?: y/n')) {
        case 'n':
            return adminChoice();
        case 'y':
            alert('We hope to see you soon !');
            return;
        default:
            console.log('Invalid answer. Please, try again');
            return askGoodbye();
    }
}

const addFlight = () => {
    if (flights.length < 15) {
        flights.push({
            id: flights[flights.length - 1].id + 1,
            from: prompt('From:'),
            to: prompt('To:'),
            cost: +prompt('Cost'),
            scale: askScale(),
        });
        showFlights();
    } else {
        alert('YOU HAVE EXCEEDED THE NUMBER OF FLIGHTS CREATED , TRY AGAIN');
    }
};

function askScale() {
    let adScale = prompt('With Scale? y/n');

    switch (adScale) {
        case 'y':
            return true;
        case 'n':
            return false;
        default:
            console.log('Invalid answer. Please, try again');
            return askScale();
    }
}

const flightsProyect = () => {
    welcomeGreetings();

    const ask = askForAdminUser();

    if (ask === 'user') {
        seePrices();
    }

    if (ask === 'admin') {
        adminChoice();
        showFlights();
        askGoodbye();
    }
};

flightsProyect();
