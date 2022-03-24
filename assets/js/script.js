const cells = document.querySelectorAll('.cell');
const reset_btn = document.querySelector('.reset-btn');
var result_area = document.querySelector('.result-area');
var human_turn = true;
var cells_map = ['','','','','','','','',''];
var cells_row = [[], [], []];
var cells_column = [[], [], []];
var cells_cross = [[], []];
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
        let index = Array.prototype.indexOf.call(cells,cell);
        if (human_turn == true) {
            cell.innerHTML = 'O';
            human_turn = false;
        } else {
            cell.innerHTML = 'X';
            human_turn = true;
        }
        cells_map[index] = cell.innerHTML;
        result_check();
    }
}
reset_btn.onclick = function () {
    for (let cell of cells) {
        cell.innerHTML = '';
    }
    human_turn = false;
}
function result_check() {
    for (let index = 0; index < 9; index++) {
        if (index % 3 == 0) {
            cells_row[index/3] = cells_map.slice(index, index + 3);
        }
        if (index == 0 || index == 1 || index == 2) {
            cells_column[index] = [cells_map[index], cells_map[index + 3], cells_map[index + 6]];
        }
        if (index == 0 || index == 2) {
            cells_cross[0] = [cells_map[0], cells_map[4], cells_map[8]];
            cells_cross[2] = [cells_map[2], cells_map[4], cells_map[6]];

        }
    }
    for (let condition of win_condition) {
        for (let index = 0; index < 3; index++) {
            if (condition == cells_column[index] 
            || condition == cells_row[index]
            || condition == cells_cross[index - 1]) {
                console.log(win);
                if (condition[0] == 'X') {
                    result_area.innerHTML = 'Player X win';
                }
                else {
                    result_area.innerHTML = 'Player O win';
                }
            }
        }
    }

}