let water = 0
basic.showIcon(IconNames.Tortoise)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    water = pins.analogReadPin(AnalogPin.P0)
})
