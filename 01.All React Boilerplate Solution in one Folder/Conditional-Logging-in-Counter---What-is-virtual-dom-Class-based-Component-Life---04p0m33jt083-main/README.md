# Check before rendering

 In the app we have a simple counter, which works as expected, it updates by one each time we click
and prints to console "Rendering with count:-{count}".
But we need to make a change, we want the component only to <em>update</em> if count is even.

So count starts with zero and we click, so normally count will update by one and show it on screen since render is called,
but using the correct lifecycle method, change that the render method is only called when count is even.

First click:- Count value 1, does not call render, hence no console.log or change on screen
Second click:- Count value 2, since number is even, we call render and screen is updated and console.log is called with "Rendering with count:-2"