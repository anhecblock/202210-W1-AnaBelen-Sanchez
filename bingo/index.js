let bingoCard = [
    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },
];

let numsRepited = [];
let turn = 0;
let numberGenerated = 0;
let numsBingo = Array(90)
    .fill()
    .map((element, index) => index + 1);
let lineCompleted1 = false;
let lineCompleted2 = false;
let lineCompleted3 = false;
let sumLines = 0;

function bingoGame() {
    getUserName();
    theCarton();
    bingo();
}

const getUserName = () => {
    alert('WELCOME ISDI CODERS BINGO!!');
    playerName = prompt('What is your name?');
    if (!playerName) {
        return getUserName();
    }
    alert(
        `Hi ${playerName}.The score starts from 500 points and in each turn you will leave the remaining 10 points`
    );
};

function shuffle() {
    numsBingo.sort(function () {
        return Math.random() - 0.5;
    });
}

function randomNum() {
    return Math.ceil(Math.random() * (90 - 1));
}

function theCarton() {
    turn = 0;

    for (i = 0; i < bingoCard.length; i++) {
        do {
            bingoCard[i].number = randomNum();
            numsRepited.push(bingoCard[i].number);
            bingoCard[i].matched = false;
        } while (bingoCard[i].number === numsRepited[i]);
    }

    console.table(bingoCard);

    let verification = prompt(
        `DO YOU LIKE THIS CARDBOARD TO PLAY? TYPE 'Y' TO CONTINUE, 'N' TO GENERATE ANOTHER CARD.`
    );

    if (verification.toUpperCase() === 'N') {
        theCarton();
    } else if (verification.toUpperCase() === 'Y') {
        console.log(`LET'S PLAY!, GOOD LUCK!`);
    } else {
        theCarton();
    }
}

function checkNumbers() {
    shuffle();
    let numberGenerated = numsBingo.shift();
    console.log(`THE NUMBER HAS COME OUT: ${numberGenerated}`);

    for (i = 0; i < bingoCard.length; i++) {
        if (bingoCard[i].number === numberGenerated) {
            console.log(
                `CONGRATULATIONS!!, YOU HAVE THE NUMBER ${numberGenerated}`
            );
            bingoCard[i].matched = true;
            bingoCard[i].number = 'X';
            console.table(bingoCard);
        }
    }
}

function bingo() {
    turn += 1;
    checkNumbers();
    checkLines();

    let seguimos = confirm('We still playing?');

    if (seguimos === true) {
        bingo();
    } else {
        console.log('SEE YOU NEXT TIME');
    }
}

function checkLines() {
    let line1 = 0;
    let line2 = 0;
    let line3 = 0;

    for (i = 0; i < bingoCard.length; i++) {
        if (
            bingoCard[0].matched == true &&
            bingoCard[1].matched == true &&
            bingoCard[2].matched == true &&
            bingoCard[3].matched == true &&
            bingoCard[4].matched == true
        ) {
            line1++;
        }
        if (
            bingoCard[5].matched == true &&
            bingoCard[6].matched == true &&
            bingoCard[7].matched == true &&
            bingoCard[8].matched == true &&
            bingoCard[9].matched == true
        ) {
            line2++;
        }
        if (
            bingoCard[10].matched == true &&
            bingoCard[11].matched == true &&
            bingoCard[12].matched == true &&
            bingoCard[13].matched == true &&
            bingoCard[14].matched == true
        ) {
            line3++;
        }
    }

    if (line1 === 15 && lineCompleted1 === false) {
        if (sumLines === 0) {
            alert('LINE!');
            console.log(
                `-------------------------¡LINEEEEEEEE!-------------------------`
            );
            lineCompleted1 = true;
            sumLines++;
        } else {
            lineCompleted1 = true;
            sumLines++;
        }
    }

    if (line2 === 15 && lineCompleted2 === false) {
        if (sumLines === 0) {
            alert('LINE!');
            console.log(
                `-------------------------¡LINEEEEEE!-------------------------`
            );
            lineCompleted2 = true;
            sumLines++;
        } else {
            lineCompleted2 = true;
            sumLines++;
        }
    }

    if (line3 === 15 && lineCompleted3 === false) {
        if (sumLines === 0) {
            alert('LINE!');
            console.log(
                `-------------------------¡LINEEEEEEE!-------------------------`
            );
            lineCompleted3 = true;
            sumLines++;
        } else {
            lineCompleted3 = true;
            sumLines++;
        }
    }

    if (
        lineCompleted1 === true &&
        lineCompleted2 === true &&
        lineCompleted3 === true
    ) {
        console.log(
            `-------------------------¡BINGOOOO!-------------------------`
        );
        alert('BINGO!');

        ranking();
        playAgain();
    }
}

let rankingPlayers = [
    { name: 'Aitor', puntos: 100 },
    { name: ' Adrian', puntos: 250 },
    { name: 'Ignasi', puntos: 150 },
    { name: 'Eva', puntos: 50 },
];

function ranking() {
    let turnScore = turn * 10;
    let score = 500 - turnScore;
    console.log(`Your score has been ${score}`);

    rankingPlayers.push({ name: playerName, puntos: score });

    let rankingOrganized = rankingPlayers.sort(function (a, b) {
        return a.puntos - b.puntos;
    });

    console.table(rankingOrganized);
}

function playAgain() {
    let newGame = confirm(`Do you play again?`);

    if (newGame === true) {
        alert(`lET'S PLAY AGAIN!! GOOD LUCK`);
        console.clear();
        theCarton();
        numsBingo = Array(90)
            .fill()
            .map((element, index) => index + 1);
        line1 = 0;
        line2 = 0;
        line3 = 0;
        lineCompleted1 = false;
        lineCompleted2 = false;
        lineCompleted3 = false;
        bingo();
    } else if (newGame === false) {
        alert('See you nex time');
    }
}

bingoGame();
