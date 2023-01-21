const grid = document.querySelector('.grid');
const flagsLeft = document.getElementById('flagsLeft');
const result = document.getElementById('result');
let validCounter = 0;
let flagsCounter = 0;
let totalFlags = 10;
let gameOver = false;

(function createBoxes() {
    flagsLeft.innerHTML = totalFlags;
    let classArray = []
    for (let i = 0; i < 100; i++) {
        if (i > 89) {
            classArray.push('bomb')
        } else classArray.push('valid')
    }
    for (let i = 0; i < 100; i++) {
        let box = document.createElement('div');
        let index = Math.floor(Math.random() * classArray.length);
        let className = classArray[index];
        classArray.splice(index, 1);
        box.setAttribute('id', i);
        box.setAttribute('class', className);
        grid.appendChild(box);
    }
})();

const getBombsFromNeighbour = (target, val) => {
    if (val === 0 || val === 9 || val === 90 || val === 99) {
        setNumberOfBombs(target, cornerCase, val);
    }
    else if (val > 0 && val < 9 ||
        val > 90 && val < 99 ||
        val === 10 || val === 20 || val === 30 || val === 40 || val === 50 || val === 60 || val === 70 || val === 80 ||
        val === 19 || val === 29 || val === 39 || val === 49 || val === 59 || val === 69 || val === 79 || val === 89) {
        setNumberOfBombs(target, edgeCase, val);
    } else {
        setNumberOfBombs(target, generalCase, val);
    }
}

const cornerCase = (val) => {
    let arr;
    if (val === 0) {
        arr = [val + 1, val + 10, val + 10 + 1];
    }
    else if (val === 9) {
        arr = [val - 1, val + 10, val + 10 - 1];
    }
    else if (val === 90) {
        arr = [val + 1, val - 10, val - 10 + 1];
    }
    else if (val === 99) {
        arr = [val - 1, val - 10, val - 10 - 1];
    }
    return countBombs(arr);
}

const edgeCase = (val) => {
    let arr;
    if (val > 0 && val < 9) {
        arr = [val + 1, val - 1, val + 10, val + 10 + 1, val + 10 - 1];
    } else if (val === 10 || val === 20 || val === 30 || val === 40 || val === 50 || val === 60 || val === 70 || val === 80) {
        arr = [val - 10, val + 10, val + 1, val - 10 + 1, val + 10 + 1];
    } else if (val > 90 && val < 99) {
        arr = [val + 1, val - 1, val - 10, val - 10 + 1, val - 10 - 1];
    } else if (val === 19 || val === 29 || val === 39 || val === 49 || val === 59 || val === 69 || val === 79 || val === 89) {
        arr = [val - 10, val + 10, val - 1, val - 10 - 1, val + 10 - 1];
    }
    return countBombs(arr);
}

const generalCase = (val) => {
    let arr = [val - 1, val + 1, val - 10, val + 10, val - 10 - 1, val - 10 + 1, val + 10 - 1, val + 10 + 1];
    return countBombs(arr);
}

const countBombs = (arr) => {
    let bombsInNeighbourHood = 0;
    arr.forEach(item => {
        let element = document.getElementById(item.toString());
        if (element.classList.contains('bomb')) bombsInNeighbourHood++;
    });
    return bombsInNeighbourHood;
}

const setNumberOfBombs = (target, cases, val) => {
    let bombsInNeighbourHood = cases(val);
    target.setAttribute('data', bombsInNeighbourHood);
    if (bombsInNeighbourHood === 1) {
        target.classList.add('one');
    } else if (bombsInNeighbourHood === 2) {
        target.classList.add('two');
    } else if (bombsInNeighbourHood === 3) {
        target.classList.add('three');
    } else if (bombsInNeighbourHood === 4) {
        target.classList.add('four');
    }
}

const setDataAttribute = () => {
    let boxes = document.querySelectorAll('.valid, .bomb');
    boxes.forEach((box, index) => {
        getBombsFromNeighbour(box, index);
    })
}
setDataAttribute();

const showAllBombs = () => {
    let bombs = document.querySelectorAll('.bomb');
    bombs.forEach(bomb => {
        bomb.innerHTML = '💣';
        if (!bomb.classList.contains('checked')) {
            bomb.classList.add('checked');
        }
    })
}

const checkFlagedBoxesContainBomb = () => {
    let flagedBoxes = document.querySelectorAll('.flag');
    for (let i = 0; i < flagedBoxes.length; i++) {
        if (!flagedBoxes[i].classList.contains('bomb'))
            return false;
    }
    return true;
}


grid.addEventListener('click', (e) => {
    e.stopPropagation();

    if (!gameOver) {
        let target = e.target;
        let numberOfBombsSurrounded = target.getAttribute('data');
        let targetClasslist = e.target.classList;

        if (targetClasslist.contains('bomb')) {
            gameStatusMessage('LOSE');
            return;
        }

        else if (targetClasslist.contains('valid')) {

            if (target.classList.contains('flag')) {
                target.classList.remove('flag');
                flagsCounter--;
                flagsLeft.innerHTML = totalFlags - flagsCounter;
                target.innerHTML = numberOfBombsSurrounded;
            }

            if (!targetClasslist.contains('checked')) {
                targetClasslist.add('checked');
                target.innerHTML = numberOfBombsSurrounded;
                validCounter += 1;

                if (validCounter === 90) {
                    gameStatusMessage('WIN');
                }
            }
        }
    }
}, false);

grid.addEventListener('contextmenu', e => {
    e.stopPropagation();

    e.preventDefault();
    if (!gameOver) {
        let target = e.target;
        if (flagsCounter < totalFlags) {

            if (target.classList.contains('flag')) {
                target.classList.remove('flag');
                flagsCounter--;
                flagsLeft.innerHTML = totalFlags - flagsCounter;
                target.innerHTML = '';
            }
            else if (!target.classList.contains('flag')) {
                target.classList.add('flag');
                flagsCounter++;
                flagsLeft.innerHTML = totalFlags - flagsCounter;
                target.innerHTML = '🚩';

                if (flagsCounter === totalFlags && checkFlagedBoxesContainBomb()) {
                    gameStatusMessage('WIN');
                } else if (flagsCounter === 10 && !checkFlagedBoxesContainBomb()) {
                    gameStatusMessage('LOSE');
                }
            }
        }
    }
});

const gameStatusMessage = (winOrLose) => {
    result.innerHTML = `GAME OVER: YOU ${winOrLose}!`;
    gameOver = true;
    showAllBombs();
}
