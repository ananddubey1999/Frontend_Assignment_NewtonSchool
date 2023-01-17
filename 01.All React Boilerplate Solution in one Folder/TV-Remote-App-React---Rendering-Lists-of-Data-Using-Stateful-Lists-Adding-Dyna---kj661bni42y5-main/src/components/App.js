@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');


#main {
  text-align: center;
}

body {
  margin: 0;
  padding: 0;
  font-family: roboto, serif;
}
.wrapper {
 
  display: flex;
  flex:0.5;
  margin: 40 10%;
  align-items: center;
  
}

.tv-space {
  
  position: relative;
  padding: 10px;
  height: auto;
  width: 500px;
  display: inline-block;
}
.tv-border {
  float: left;
  border-radius: 3px;
  background: rgb(100,100,100) radial-gradient(circle at 50% 0, rgba(255,255,255,.65), rgba(255,255,255,.35));
  box-shadow:
  inset rgba(0,0,0,.6) 0 -1px 7px,
  inset rgba(252,255,255,.3) 0px 1px 8px,
  rgba(0,0,0,.8) 0 3px 8px 0px;
  position: relative;
  z-index: 100;
}
button {
  cursor: pointer;
}
.tv-container {
  margin: 7px;
  margin-bottom: 0px;
  background-color:white;
  font-weight: 25px;
  width: 480px;
  height: 320px;
  box-shadow: inset  0 5px 5px rgba(0,0,0,.9);
  overflow: hidden;
}


.tv-container .screen-off {
  background-color: #000;
  height: 320px;
  width: 480px;
  opacity: 0;
}

.pult {
  display: inline-block;
  background-color: #eee;
  width: 213px;
  margin: 10px auto;
  font-family: 'console', 'PT Sans';
  padding: 10px 10px 20px 10px;
  border-radius: 10px;
  
  transform: translateX(-50%);
  text-align: center;  
  background: rgb(100,100,100) radial-gradient(circle at 50% 0, rgba(255,255,255,.65), rgba(255,255,255,.35));
  box-shadow:
  inset rgba(0,0,0,.6) 0 -3px 8px,
  inset rgba(252,255,255,.7) 0 3px 8px,
  rgba(0,0,0,.8) 0 3px 8px -3px;
}
.title {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  width: 75px;
  height: 30px;
}



.btn {
  box-sizing: border-box;
  display: inline-block;
  border: 0;
  text-align: center;
  vertical-align: top;
  width: 40px;
  height: 40px;
  line-height: 30px;
  margin: 5px;
  box-shadow: 0 0 10px 0px rgba(0,0,0,0.5);
}
.btn:active {
  box-shadow: inset 0 0 10px 0px rgba(0,0,0,0.5);
}
.btn-big-inner:focus,
.btn:focus {
  outline: none;
}
.block {
  display: inline-block;
  vertical-align: top;
}
.block-channel {
  width: 159px;
}
.block-navigate,
block-round {
  width: 213px;
}
.pult .btn.text {
  font-size: 15px;
  padding: 0;
}
.top-navigate,
.channel,
.round {
  background-color: #1c1c1c;
  color: #eee;
  font-size: 35px;
  font-weight: bold;
  border-radius: 4px;
}
.active-channel {
  color: #239B56;
}
.power-off {
  background-color: #B03A2E;
  position: relative;
}
.power-off:after {
  content: '\f011';
  font-family: FontAwesome;
  position: absolute;
  font-style: normal;
  font-weight: normal;
[2:23 pm, 21/08/2022] Deepshika: text-decoration: inherit;
  position: absolute;
  font-size: 20px;
  top: 5px;
  left: 11.5px;
}

.dot{
  height: 10px;
  width: 10px;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  display: inline-block;
}

.dot.clicked {
  height: 10px;
  width: 10px;
  background-color: rgb(244, 9, 9);
  border-radius: 50%;
  display: inline-block;
}
#block{
    width: 200px;
    height: 300px;
    border: 2px solid rgb(3, 1, 2);
    border-radius: 15px;
    padding: 20px;
    background-color: black;
}
#container{
width: 200px;
height: 200px;
border: 1px solid gray;
margin: 10px;
display: flex;
align-items: center;
justify-content: center;

}
.block .block-navigate{
    width: 100%;
    height: 50px;
    
    
}
#power-on{
    padding: 5px;
    width: 40px;
    height: 40px;
    background-color: green;
    float: left;
    border-radius: 50px;
}
#power-off{
    padding: 5px;
    width: 40px;
    height: 40px;
    background-color: red;
    float: right;
    border-radius: 50px;
    

}

.block .block-channel{
    padding: 10px;
    width: 100%;
    height: 200px;
    margin-left: 6px;
    margin-top: 10px;
}
.block .block-channel button{
    padding: 20px;
    margin: 2px;
    border: 1px solid rgb(47, 204, 27);
    border-radius: 50px;

}
