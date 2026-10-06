const canvas = document.querySelector('#juego')
const game = canvas.getContext('2d')
const botonArriba = document.querySelector('#btnArriba')
const botonIzquierda = document.querySelector('#btnIzquierda')
const botonDerecha = document.querySelector('#btnDerecha')
const botonAbajo = document.querySelector('#btnAbajo')
const live = document.querySelector('#lives')
const timeSpan = document.querySelector('#time')
const newTime = document.querySelector('#record')
const resultTime = document.querySelector('#result')

window.addEventListener('load', startGame)
window.addEventListener('resize', handleResize)

let canvasSize
let elmentosSize
const playerPosition = { x: undefined, y: undefined }
const giftPosition = { x: undefined, y: undefined }
let level = 0
let lives = 3
let timeStart
let timePlayer
let timeInterval

let enemigs = []


function setCanvasSize() {
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.7
    } else {
        canvasSize = window.innerHeight * 0.7
    }

    canvas.setAttribute('width', canvasSize)
    canvas.setAttribute('height', canvasSize)

    elmentosSize = canvasSize / 10
}

function handleResize() {
    const previousSize = elmentosSize
    const previousPlayer = {
        column: undefined,
        row: undefined,
    }

    if (playerPosition.x !== undefined && playerPosition.y !== undefined && previousSize) {
        previousPlayer.column = Math.floor(playerPosition.x / previousSize)
        previousPlayer.row = Math.floor(playerPosition.y / previousSize)
    }

    setCanvasSize()

    if (previousPlayer.column !== undefined && previousPlayer.row !== undefined) {
        playerPosition.x = (previousPlayer.column + 0.5) * elmentosSize
        playerPosition.y = (previousPlayer.row + 0.5) * elmentosSize
    }

    startGame()
}

function startGame() {
    setCanvasSize()
    jugadorLives()

    game.font = elmentosSize + 'px Verdana'
    game.textAlign = 'center'
    game.textBaseline = 'middle'

    const map = maps[level]
    if (!map) {
        gameWin()
        return
    }

    if (!timeStart) {
        timeStart = Date.now()
        timeInterval = setInterval(time, 100)
        record()
    }
    const mapRows = map.trim().split('\n')
    const mapRowCols = mapRows.map(row => row.trim().split(''))
    console.log(mapRowCols, mapRows)
    enemigs = []
    game.clearRect(0, 0, canvasSize, canvasSize)
    mapRowCols.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            const emoji = emojis[col]
            const x = elmentosSize * colIndex + elmentosSize / 2
            const y = elmentosSize * rowIndex + elmentosSize / 2
            if (col == 'O') {
                if (playerPosition.x === undefined && playerPosition.y === undefined) {
                    playerPosition.x = x
                    playerPosition.y = y
                    console.log({ playerPosition })
                }
            } else if (col == 'I') {
                giftPosition.x = x
                giftPosition.y = y
            } else if (col == 'X') {
                enemigs.push({
                    x: x,
                    y: y
                })
            }
            game.fillText(emoji, x, y)
        })
    })

    movePlayer()

}


function movePlayer() {
    const playerColumn = Math.floor(playerPosition.x / elmentosSize)
    const playerRow = Math.floor(playerPosition.y / elmentosSize)
    const giftColumn = Math.floor(giftPosition.x / elmentosSize)
    const giftRow = Math.floor(giftPosition.y / elmentosSize)
    const huboColision = playerColumn === giftColumn && playerRow === giftRow

    if (huboColision) {
        levelWin()

    }

    const enemyCollision = enemigs.find(enemy => {
        const enemyColumn = Math.floor(enemy.x / elmentosSize)
        const enemyRow = Math.floor(enemy.y / elmentosSize)
        return enemyColumn === playerColumn && enemyRow === playerRow
    })

    if (enemyCollision) {
        lost()
    }

    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}

function gameWin() {
    console.log("Terminaste el Juego ")
    clearInterval(timeInterval)

    const recordTime = localStorage.getItem('Record_time')
    const playerTime = Date.now() - timeStart
    if (recordTime) {
        const playerTime = Date.now() - timeStart
        if (recordTime >= playerTime) {
            localStorage.setItem('Record_time', playerTime)
            resultTime.innerHTML = ('Superaste el Record')
        } else {
            resultTime.innerHTML = ('Lo siento , no superaste el records :(')
        }
    } else {
        resultTime.innerHTML = ('Primera vez? Muy bien , pero ahora trata de superar tu tiempo')

        localStorage.setItem('Record_time', playerTime)
    }
    console.log({ recordTime, playerTime })
}

function record() {
    newTime.innerHTML = localStorage.getItem('Record_time')
}

function time() {
    timeSpan.innerHTML = Date.now() - timeStart

}


function lost() {
    lives -= 1
    if (lives <= 0) {
        lives = 3
        level = 0
        timeStart = undefined
    }
    playerPosition.x = undefined
    playerPosition.y = undefined
    startGame()

}

function jugadorLives() {
    const heartArray = Array(lives).fill(emojis['HEART'])

    live.innerHTML = ""
    heartArray.forEach(heart => live.append(heart))

}

function levelWin() {
    console.log("sube de nivel")
    level++
    startGame()

}
window.addEventListener('keydown', moveByKeys)
botonArriba.addEventListener('click', moveUp)
botonIzquierda.addEventListener('click', moveLeft)
botonDerecha.addEventListener('click', moveRight)
botonAbajo.addEventListener('click', moveDown)

function moveByKeys(event) {
    if (event.key === 'ArrowUp') {
        moveUp()
    } else if (event.key === 'ArrowLeft') {
        moveLeft()
    } else if (event.key === 'ArrowRight') {
        moveRight()
    } else if (event.key === 'ArrowDown') {
        moveDown()
    }
}

function moveUp() {

    if (playerPosition.y - elmentosSize < 0) {
        console.log('OUT')
        return
    } else {
        playerPosition.y -= elmentosSize
        startGame()
    }

}

function moveLeft() {

    if (playerPosition.x - elmentosSize < 0) {
        console.log('OUT')
        return
    } else {
        playerPosition.x -= elmentosSize
        startGame()
    }
}

function moveRight() {
    if (playerPosition.x + elmentosSize > canvasSize) {
        console.log('OUT')
        return
    } else {
        playerPosition.x += elmentosSize
        startGame()
    }
}

function moveDown() {
    if (playerPosition.y + elmentosSize > canvasSize) {
        console.log('OUT')
        return
    } else {
        playerPosition.y += elmentosSize
        startGame()
    }

}