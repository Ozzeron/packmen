const imagesPath = {
    'left': 'assets/pac_left.png',
    'up': 'assets/pac_up.png',
    'right': 'assets/pac_right.png',
    'down': 'assets/pac_down.png'
};

let playerPoints = 0;

addEventListener('keydown', (e) => {
    let currentPacmanPosition = document.getElementById('pacman').attributes.position.value;
    let currentApplePosition = document.getElementById('apple').attributes.position.value;
    let currentPacmanBox = document.getElementById('pacman');
    let currentAppleBox = document.getElementById('apple');
    let fullContainer = document.getElementsByClassName('container')[0];
    Move(e.key, currentPacmanPosition, currentPacmanBox, fullContainer, currentApplePosition, currentAppleBox);
});

function Move(direction, currentPacmanPosition, currentPacmanBox, fullContainer, currentApplePosition, currentAppleBox) {
    switch (currentPacmanPosition) {
        case '1': {
            if (direction === 'ArrowRight') {
                removeUpdate(currentPacmanBox, fullContainer, 1, "right", currentApplePosition, currentAppleBox);
            } else if (direction === 'ArrowDown') {
                removeUpdate(currentPacmanBox, fullContainer, 3, "down", currentApplePosition, currentAppleBox);
            }
        }
            break;
        case '2': {
            if (direction === 'ArrowLeft') {
                removeUpdate(currentPacmanBox, fullContainer, 0, "left", currentApplePosition, currentAppleBox);
            } else if (direction === 'ArrowRight') {
                removeUpdate(currentPacmanBox, fullContainer, 2, "right", currentApplePosition, currentAppleBox);
            } else if (direction === 'ArrowDown') {
                removeUpdate(currentPacmanBox, fullContainer, 4, "down", currentApplePosition, currentAppleBox);
            }
        }
            break;
        case '3': {
            if (direction === 'ArrowLeft') {
                removeUpdate(currentPacmanBox, fullContainer, 1, "left", currentApplePosition, currentAppleBox);
            } else if (direction === 'ArrowDown') {
                removeUpdate(currentPacmanBox, fullContainer, 5, "down", currentApplePosition, currentAppleBox);
            }
        }
            break;
        case '4': {
            if (direction === 'ArrowUp') {
                removeUpdate(currentPacmanBox, fullContainer, 0, "up", currentApplePosition, currentAppleBox);
            } else if (direction === 'ArrowRight') {
                removeUpdate(currentPacmanBox, fullContainer, 4, "right", currentApplePosition, currentAppleBox);
            } else if (direction === 'ArrowDown') {
                removeUpdate(currentPacmanBox, fullContainer, 6, "down", currentApplePosition, currentAppleBox);
            }
        }
            break;
        case '5': {
            if (direction === 'ArrowUp') {
                removeUpdate(currentPacmanBox, fullContainer, 1, "up", currentApplePosition, currentAppleBox);
            } else if (direction === 'ArrowRight') {
                removeUpdate(currentPacmanBox, fullContainer, 5, "right", currentApplePosition, currentAppleBox);
            } else if (direction === 'ArrowDown') {
                removeUpdate(currentPacmanBox, fullContainer, 7, "down", currentApplePosition, currentAppleBox);
            } else if (direction === 'ArrowLeft') {
                removeUpdate(currentPacmanBox, fullContainer, 3, "left", currentApplePosition, currentAppleBox);
            }
            break;
        }
        case '6': {
            if (direction === 'ArrowLeft') {
                removeUpdate(currentPacmanBox, fullContainer, 4, "left", currentApplePosition, currentAppleBox);
            } else if (direction === 'ArrowUp') {
                removeUpdate(currentPacmanBox, fullContainer, 2, "up", currentApplePosition, currentAppleBox);
            } else if (direction === 'ArrowDown') {
                removeUpdate(currentPacmanBox, fullContainer, 8, "down", currentApplePosition, currentAppleBox);
            }
        }
            break;
        case '7': {
            if (direction === 'ArrowRight') {
                removeUpdate(currentPacmanBox, fullContainer, 7, "right", currentApplePosition, currentAppleBox);
            } else if (direction === 'ArrowUp') {
                removeUpdate(currentPacmanBox, fullContainer, 3, "up", currentApplePosition, currentAppleBox);
            }
        }
            break;
        case '8': {
            if (direction === 'ArrowLeft') {
                removeUpdate(currentPacmanBox, fullContainer, 6, "left", currentApplePosition, currentAppleBox);
            } else if (direction === 'ArrowRight') {
                removeUpdate(currentPacmanBox, fullContainer, 8, "right", currentApplePosition, currentAppleBox);
            } else if (direction === 'ArrowUp') {
                removeUpdate(currentPacmanBox, fullContainer, 4, "up", currentApplePosition, currentAppleBox);
            }
        }
            break;
        case '9': {
            if (direction === 'ArrowLeft') {
                removeUpdate(currentPacmanBox, fullContainer, 7, "left", currentApplePosition, currentAppleBox);
            } else if (direction === 'ArrowUp') {
                removeUpdate(currentPacmanBox, fullContainer, 5, "up", currentApplePosition, currentAppleBox);
            }
        }
            break;
    }
}

function removeUpdate(currentPacmanBox, fullContainer, boxNum, direction, currentApplePosition, currentAppleBox) {
    currentPacmanBox.children[0].src = '';
    currentPacmanBox.id = '';
    fullContainer.children[boxNum].children[0].src = imagesPath[direction];
    fullContainer.children[boxNum].id = 'pacman'
    if (+currentApplePosition === boxNum + 1 || currentAppleBox === null) {
        let randBox = getRandomInt(0, 8);
        let selectedBox = Array.from(fullContainer.children).filter(n => n.id !== 'pacman')[randBox];
        selectedBox.children[0].src = 'assets/apple.png';
        selectedBox.id = 'apple';
        playerPoints++;
        document.getElementById('playerPoints').innerHTML = `Your score: ${playerPoints}`;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}