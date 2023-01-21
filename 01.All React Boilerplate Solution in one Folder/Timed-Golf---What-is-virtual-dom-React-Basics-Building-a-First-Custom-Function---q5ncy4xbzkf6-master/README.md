# Golf Game

### You are creating a golf game. The game starts with the click of the start button. You want to take the ball to the hole and you are timed with a timer. The ball moves with arrow keys on the keyboard.

## Acceptance Criteria
- Render a start button. The timer starts on clicking the start button. Timer counts in seconds.
- Render a ball and a hole(destiny).
- Before clicking the start button, the ball should not move with arrow keys.
- After clicking the start button, ball should move by using up, down, left and right arrow keys. (each key should shift the ball by 5px in respective direction).
- When the ball goes into the hole, timer should stop.
- Make sure you give the components the right class names as mentioned in the details below and that you use the right state variable names
- Carefully complete timer start and stop actions


## Details:
- The goal is to move the ball to the hole. To move the ball update top and left parameters in css with absolute positioning.
- Track the seconds using state variable time.
- Track the coordinate of the ball using state variable x and y
- Coordinates of the ball at starting should be 0, 0
- Coordinates of the hole should be (250px, 250px)
- class name of the ball - > ball
- class name of the hole -> hole
- class name of the display timer should be -> heading- timer
- class name of the start button -> start

