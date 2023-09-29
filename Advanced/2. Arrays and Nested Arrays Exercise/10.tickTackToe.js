function solve(turn) {
    let playerOne = 'X';
    let playerTwo = 'O';
    let dashboardState = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    for (let i = 0; i < turn.length; i++) {

        for (let j = 0; j < dashboardState.length; j++) {
            let moves = turn[i].split(' ');
            let playerOneMove = moves[0];
            let playerTwoMove = moves[1];
            let dashboardRowOne = dashboardState[j];

            if (dashboardRowOne[playerOneMove] == false && dashboardRowOne[playerTwoMove] == false) {
                dashboardRowOne[playerOneMove] = playerOne;
                dashboardRowOne[playerTwoMove] = playerTwo;
            } else {
                console.log("This place is already taken.Please choose another!");
            }
        }

    }

}
solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
])