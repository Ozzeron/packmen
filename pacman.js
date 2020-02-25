addEventListener('keydown', (e) => {
    let currentPackmenPosition = document.getElementById('pacman').attributes.position;
    let currentApplePosition = document.getElementById('apple');
    let currentPackmenBox = document.getElementById('pacman');
    let currentAppleBox = document.getElementById('apple');
    console.log(currentPackmenBox);
    console.log(currentAppleBox);
    switch (e.key) {
        case 'ArrowLeft':
            currentPackmenBox.firstChild.src = 'assets/pac_left.jpg';
            break;
        case 'ArrowUp':
            currentPackmenBox.firstChild.src = 'assets/pac_up.png';
            console.log('Кнопка вверх');
            break;
        case 'ArrowRight':
            currentPackmenBox.firstChild.src = 'assets/pac_right.png';
            console.log('Кнопка вправо');
            break;
        case 'ArrowDown':
            currentPackmenBox.firstChild.src = 'assets/pac_down.png';
            console.log('Кнопка вниз')
    }
});

function Move(arrow) {

}