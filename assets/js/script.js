const cells = document.querySelectorAll('.cell');
// console.log(cells);
var human_turn = true;

const win_condition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
for (let cell of cells) {
    cell.onclick = function () {
        if (human_turn === true) {
            cell.innerHTML = 'O';
            human_turn = false;
        } else {
            cell.innerHTML = 'X';
            human_turn = true;
        }
    }
}
console.log(win_condition);