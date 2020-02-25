const imagesPath = {
    'left': 'assets/pac_left.png',
    'up': 'assets/pac_up.png',
    'right': 'assets/pac_right.png',
    'down': 'assets/pac_down.png'
};


addEventListener('keydown', (e) => {
    let currentPacmanPosition = document.getElementById('pacman').attributes.position.value;
    let currentApplePosition = document.getElementById('apple');
    let currentPacmanBox = document.getElementById('pacman');
    let currentAppleBox = document.getElementById('apple');
    let fullContainer = document.getElementsByClassName('container')[0];
    switch (e.key) {
        case 'ArrowLeft':
            currentPacmanBox.firstChild.src = imagesPath.left;
            Move(e.key, currentPacmanPosition, currentPacmanBox, fullContainer, imagesPath);
            console.log(e.key);
            break;
        case 'ArrowUp':
            currentPacmanBox.firstChild.src = imagesPath.up;
            Move(e.key, currentPacmanPosition, currentPacmanBox, fullContainer, imagesPath);
            console.log(e.key);
            break;
        case 'ArrowRight':
            currentPacmanBox.firstChild.src = imagesPath.right;
            Move(e.key, currentPacmanPosition, currentPacmanBox, fullContainer, imagesPath);
            break;
        case 'ArrowDown':
            currentPacmanBox.firstChild.src = imagesPath.down;
            Move(e.key, currentPacmanPosition, currentPacmanBox, fullContainer, imagesPath);
            console.log(e.key);
            break;
    }
});

function Move(direction, curPos, currentPacmanBox, fullContainer, imagesPath) {
    console.log(direction, curPos);
    switch (curPos) {
        case '1': {
            if (direction === 'ArrowRight') {
                removeUpdate(currentPacmanBox, fullContainer, 1, "right");
            } else if (direction === 'ArrowDown') {
                removeUpdate(currentPacmanBox, fullContainer, 3, "down");
            }
        }
            break;
        case '2': {
            if (direction === 'ArrowLeft') {
                removeUpdate(currentPacmanBox, fullContainer, 0, "left");
            } else if (direction === 'ArrowRight') {
                removeUpdate(currentPacmanBox, fullContainer, 2, "right");
            } else if (direction === 'ArrowDown') {
                removeUpdate(currentPacmanBox, fullContainer, 4, "down");
            }
        }
            break;
        case '3': {
            if (direction === 'ArrowLeft') {
                removeUpdate(currentPacmanBox, fullContainer, 1, "left");
            } else if (direction === 'ArrowDown') {
                removeUpdate(currentPacmanBox, fullContainer, 5, "down");
            }
        }
            break;
        case '4': {
            if (direction === 'ArrowUp') {
                removeUpdate(currentPacmanBox, fullContainer, 0, "up");
            } else if (direction === 'ArrowRight') {
                removeUpdate(currentPacmanBox, fullContainer, 4, "right");
            } else if (direction === 'ArrowDown') {
                removeUpdate(currentPacmanBox, fullContainer, 6, "down");
            }
        }
            break;
        case '5': {
            if (direction === 'ArrowUp') {
                removeUpdate(currentPacmanBox, fullContainer, 1, "up");
            } else if (direction === 'ArrowRight') {
                removeUpdate(currentPacmanBox, fullContainer, 5, "right");
            } else if (direction === 'ArrowDown') {
                removeUpdate(currentPacmanBox, fullContainer, 7, "down");
            } else if (direction === 'ArrowLeft') {
                removeUpdate(currentPacmanBox, fullContainer, 3, "left");
            }
            break;
        }
        case '6': {
            if (direction === 'ArrowLeft') {
                removeUpdate(currentPacmanBox, fullContainer, 4, "left");
            } else if (direction === 'ArrowUp') {
                removeUpdate(currentPacmanBox, fullContainer, 2, "up");
            } else if (direction === 'ArrowDown') {
                removeUpdate(currentPacmanBox, fullContainer, 8, "down");
            }
        }
            break;
        case '7':{
            if (direction === 'ArrowRight') {
                removeUpdate(currentPacmanBox, fullContainer, 7, "right");
            } else if (direction === 'ArrowUp') {
                removeUpdate(currentPacmanBox, fullContainer, 3, "up");
            }
        }
            break;
        case '8':{
            if (direction === 'ArrowLeft') {
                removeUpdate(currentPacmanBox, fullContainer, 6, "left");
            } else if (direction === 'ArrowRight') {
                removeUpdate(currentPacmanBox, fullContainer, 8, "right");
            } else if (direction === 'ArrowUp') {
                removeUpdate(currentPacmanBox, fullContainer, 4, "up");
            }
        }
            break;
        case '9':{
            if (direction === 'ArrowLeft') {
                removeUpdate(currentPacmanBox, fullContainer, 7, "left");
            } else if (direction === 'ArrowUp') {
                removeUpdate(currentPacmanBox, fullContainer, 5, "up");
            }
        }
            break;
    }
}

function removeUpdate(currentPacmanBox, fullContainer, boxNum, direction) {
    currentPacmanBox.children[0].src = '';
    currentPacmanBox.id = '';
    console.log(direction);
    fullContainer.children[boxNum].children[0].src = imagesPath[direction];
    fullContainer.children[boxNum].id = 'pacman'
}