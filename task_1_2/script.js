'use strict';

function genChessDesk() {
    const cellCount = 9;
    const cellLetters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
    const figures = ['', 'Лд', 'Кн', 'Сл', 'Фр', 'Кр', 'Сл', 'Кн', 'Лд', ''];

    document.querySelector('body').insertAdjacentHTML('afterbegin', '<table class="table"></table>');
    let conteinerTrTd = document.querySelector('.table');
    conteinerTrTd.innerHTML = '';

    drawDesk();

    function drawDesk() {
        for (let i = 0; i <= cellCount; i++) {
            let tr = document.createElement('tr');
            conteinerTrTd.appendChild(tr);

            for (let j = 0; j <= cellCount; j++) {
                let td = document.createElement('td');
                getRandorDesksElements(i, j, td);
                getRandorDesksFigures(i, j, td);
                tr.appendChild(td);
            }
        }
    }

    function getRandorDesksElements(i, j, element) {
        if (i === 0 && j !== 0 && j !== cellCount) {
            element.innerText = `${cellLetters[j]}`;
            element.className = 'letters_top';
        }
        else if ((i !== cellCount && j !== 0 && j !== cellCount) && (i % 2 !== 0 && j % 2 !== 0)) {
            element.className = 'cells_white';
        }
        else if ((i !== cellCount && j !== 0 && j !== cellCount) && (i % 2 === 0 && j % 2 === 0)) {
            element.className = 'cells_white';
        }
        else if ((i !== cellCount && j !== 0 && j !== cellCount) && (i % 2 !== 0 && j % 2 === 0)) {
            element.className = 'cells_black';
        }
        else if ((i !== cellCount && j !== 0 && j !== cellCount) && (i % 2 === 0 && j % 2 !== 0)) {
            element.className = 'cells_black';
        }
        else if ((i > 0 && i !== cellCount) && j === 0) {
            element.innerText = `${9 - i}`;
            element.className = 'numbers_left';
        }
        else if ((i > 0 && i !== cellCount) && j === cellCount) {
            element.innerText = `${9 - i}`;
            element.className = 'numbers_right';
        }
        else if (i === cellCount && j !== 0 && j !== cellCount) {
            element.innerText = `${cellLetters[j]}`;
            element.className = 'letters_bottom';
        }

    }

    function getRandorDesksFigures(i, j, element) {
        if (i === 1 && j !== 0 & j !== cellCount) {
            element.classList.add('black_figures');
            element.innerText = `${figures[j]}`;
        }
        else if (i === 2 && j !== 0 & j !== cellCount) {
            element.classList.add('black_figures');
            element.innerText = 'Пш';
        }
        else if (i === 7 && j !== 0 & j !== cellCount) {
            element.classList.add('white_figures');
            element.innerText = 'Пш';
        }
        else if (i === 8 && j !== 0 & j !== cellCount) {
            element.classList.add('white_figures');
            element.innerText = `${figures[j]}`;
        }
    }

}

genChessDesk();