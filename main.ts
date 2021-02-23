let indexX = 0
let indexY = 0
input.onButtonPressed(Button.A, function () {
    indexX = 0
    indexY = 0
    for (let indexY = 0; indexY <= 4; indexY++) {
        for (let indexX = 0; indexX <= 4; indexX++) {
            led.plot(indexX, indexY)
            basic.pause(200)
        }
    }
})
