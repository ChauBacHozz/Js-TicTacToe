const cells = document.querySelectorAll('.cell');
const reset_btn = document.querySelector('.reset-btn');
var result_area = document.querySelector('.result-area');
var first_turn = true;
var not_won = true;
var x_pos = [];
var o_pos = [];
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
        if (not_won == true) {
            let index = Array.prototype.indexOf.call(cells,cell);
            if (!x_pos.includes(index) && !(o_pos.includes(index))) {
                if (first_turn == true) {
                    cell.innerHTML = 'O';
                    o_pos.push(index);
                    first_turn = false;
                    draw_check();
                } else {
                    cell.innerHTML = 'X';
                    x_pos.push(index);
                    first_turn = true;
                    draw_check();
                }         
                result_check(); 
            }
       }   
    }
}

reset_btn.onclick = function () {
    result_area.innerHTML = 'GAME START!';
    for (let cell of cells) {
        cell.innerHTML = '';
    }
    first_turn = false;
    not_won = true;
    x_pos = [];
    o_pos = [];
}

function result_check() {
    for (let condition of win_condition) {
        if (x_pos.includes(condition[0]) 
        && x_pos.includes(condition[1]) 
        && x_pos.includes(condition[2])) {
            result_area.innerHTML = 'Player X win!';
            not_won = false;
        }
        if (o_pos.includes(condition[0]) 
        && o_pos.includes(condition[1]) 
        && o_pos.includes(condition[2])) {
            result_area.innerHTML = 'Player O win!';
            not_won = false;
        }
    }
}

function draw_check() {
    if (x_pos.length + o_pos.length == 9) {
        result_area.innerHTML = 'Draw!';
    }
}