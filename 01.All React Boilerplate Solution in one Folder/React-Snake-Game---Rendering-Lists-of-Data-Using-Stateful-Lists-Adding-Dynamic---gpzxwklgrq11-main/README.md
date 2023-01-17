# boilerplate-react-functional-public
The goal of this project is to create a snake game

Accaptance Criteria
<ul>

<li>the snake will be able to move in all directions </li>
<li>the snake will be able to eat food </li>
<li>the snake will grow by size 1 when it eats food </li>
<li>the snake will die if it hits the wall or itself </li>
<li>the snake will be able to move faster as it grows </li>
<li>by default snake will move in direction of right every 200ms </li>
<li>and will be able to change direction by pressing arrow keys </li>
<li>upon eating food, the snake will grow by 1 and the food will be repositioned </li>
<li>also speed of the snake will increase by 10ms i.e 200-10=190ms and so on with lowest being 10ms </li>
</ul>

Game Mechanics
<ul>
<li> the game area will be 600px x 600px which will have class <code>game-area</code> and position relative</li>
<li> the snake will be made of 2 divs with class <code>snake-dot</code> and position absolute with heigth and width set to 2%(parent container <code>game-area</code>)
<li> the food will be made of 1 div with class <code>food-dot</code> and position absolute with heigth and width set to 2%(parent container <code>game-area</code>)
<li> So when snake's length is to be increase we just add one more div with class <code>snake-dot</code>

</ul>

When game is over show alert using <code>window.alert()</code> with message <code>`Game Over. Snake length is ${this.state.snakeDots.length}`</code>
