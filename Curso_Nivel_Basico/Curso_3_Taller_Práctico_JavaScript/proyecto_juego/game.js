const canvas = document.querySelector('#juego')
const game = canvas.getContext('2d')
window.addEventListener('load', startGame)

function startGame() {
    // game.fillRect(0, 0, 300, 200)
    // game.clearRect(0, 0, 50, 50)
    game.font = '25px Verdana'
    game.fillStyle = 'blue'
    game.textAlign = 'center'
    game.fillText('Platzi', 100, 100)
}