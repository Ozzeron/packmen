addEventListener('keydown', (e) => {
    let currentPackmenPosition = document.getElementById('packmen').attributes.position;
    let currentApplePosition = document.getElementById('apple');
    let currentPackmenBox = document.getElementById('pacmen');
    let currentAppleBox = document.getElementById('apple');
    console.log(currentPackmenBox);
    console.log(currentAppleBox);
    switch (e.key) {
        case 'ArrowLeft':
            currentAppleBox.firstChild.src = 'assets/pac_left.png';
            break;
        case 'ArrowUp':
            console.log('Кнопка вверх');
            break;
        case 'ArrowRight':
            console.log('Кнопка вправо');
            break;
        case 'ArrowDown':
            console.log('Кнопка вниз')
    }
});

function Move(arrow) {

}