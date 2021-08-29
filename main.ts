input.onButtonPressed(Button.A, function () {
    AFORO += -1
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    AFORO = 0
})
input.onButtonPressed(Button.B, function () {
    AFORO += 1
})
let AFORO = 0
AFORO = 0
basic.forever(function () {
    basic.showNumber(AFORO)
    if (true) {
        if (AFORO >= 5) {
            basic.showIcon(IconNames.Skull)
            music.playMelody("C - C - C - C - ", 120)
        } else {
            basic.showIcon(IconNames.Heart)
            music.playMelody("A - C5 C5 - - - - ", 300)
        }
        basic.pause(5000)
    }
})
