// When shook, a number between 0 and 2 is chosen and the corresponding message is displayed.
input.onGesture(Gesture.Shake, function () {
    Output = randint(0, 2)
    if (Output == 2) {
        basic.showString("YES")
    } else if (Output == 1) {
        basic.showString("NO")
    } else if (Output == 0) {
        basic.showString("MAYBE")
    }
})
// When the program starts it tells the user to ask a question.
let Output = 0
basic.showString("ASK A QUESTION")
basic.forever(function () {
	
})
