# boilerplate-react-functional-public

In <code>src/components/App.js</code>, there are two inputs,
what we want to is whenever someone types inside them it prints to console in the following manner

When we type in #text-input o
> Input in #text-input is o
When we type in #text-input k (earlier typed o then k so new value is ok)
> Input in #text-input is ok

When we type in #num-input 1
> Input in #num-input is 1
> When we type in #num-input 5 
Input in #num-input is 15(earlier typed 1, now 5 so new value is 15)

Modify the <code>handleInput</code> function, and use it on the inputs using relevant event listener
so it emulates that following behaviour.
