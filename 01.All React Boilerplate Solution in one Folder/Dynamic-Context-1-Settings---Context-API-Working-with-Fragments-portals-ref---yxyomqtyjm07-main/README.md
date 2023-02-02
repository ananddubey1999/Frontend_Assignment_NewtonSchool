# Making context dynamic

Inside <code>src/context/userContext</code>, we are using a wrapper component
which supplies(using a context) an object which has a key "greeting" set to "Hello" to <code>Home</code>
component.

What we need to implement is a function <code>changeGreeting</code> which is passed along with greeting property in context
which triggers when we type inside <code>Setttings</code> component.

So by default input is empty in Settings component and inside home "greeting" is set to default "Hello"
but when we start typing it changes to whatever is being typed in settings component as we type.
