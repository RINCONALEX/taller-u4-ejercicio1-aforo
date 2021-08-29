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
    if (AFORO >= 10) {
        basic.showIcon(IconNames.Skull)
        music.playMelody("C - C - C - C - ", 120)
    }
})
