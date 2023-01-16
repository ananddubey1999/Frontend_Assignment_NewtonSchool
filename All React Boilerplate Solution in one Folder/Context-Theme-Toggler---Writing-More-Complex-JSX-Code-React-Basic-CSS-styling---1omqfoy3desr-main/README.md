# Context theme toggler

Building a theme toggler using context which toggles between light and dark theme.

In the ThemeProvider.js file you will be implementing a Higher Order Component(HOC) which 
uses context internally and provides rest of the app with the current theme and a function 
to change the theme.Initially theme will be set to light mode.

Note:- A HOC is a component which takes children components and displays them under it by
wrapping itself around them, in this ThemeProvider should use the <code>Context.Provider</code>
internally to be the container component.
Like this:-
<code>
<Context.Provider>
 {props.children}
</Context.Provider>
</code>
props are the props of the ThemeProvider Component.

In Page.js, most of the structure is already laid out, but are not following the themed styles.
The classes can be found in src/styles/App.css.The classes ending in "-dark" and "-light" signify 
their use in the respective themes.

The ThemeToggleButton component contains a button with id="global-theme-toggler", which as the id 
says is responsible for toggling the global theming. Clicking on this button toggles the global theme.
The text inside the button should display "Switch to dark theme" when theme is light and vice-versa.

The component LocalThemedBox also follows the global theme settings but can change its internal theme without 
affecting the global theme, but whenever global theme changes the LocalThemedBox also changes its theme.
The div#local-themed-box will have classname "bg-dark" or "bg-light" depending on the local theme, but needs to change if global theme changes.
Inside this component create a p tag with id="local-themed-text-container" which contains some Text and toggles
between using "txt-light" and "txt-dark".
Also create a button with id="local-theme-toggler" which as the name suggests changes the local theme of the component.The text inside that button should be "Toggle local theme to dark" if current them is light and vice versa. 



The following are the classnames required to follow theming spec:-
<ul>
    <li>div#themed-page should have classname "bg-light" or "bg-dark"</li>
    <li>p#themed-text-container should have classname "txt-light" or "txt-dark"</li>
    <li>btn#themed-button should have classname "btn-light" or "btn-dark" in addition to "btn"</li>
    <li>div#local-themed-box should have classname "bg-light" or "bg-dark" depending on local or global theme</li>
    <li>p#local-themed-text-container should have classname "txt-light" or "txt-dark" depending on local or global theme</li>
    <li>button#local-theme-toggler should have classname "btn-light" or "btn-dark" depending on local or global theme</li>
    <li>button#global-theme-toggler should have classname "btn-light" or "btn-dark" in addition to "btn"</li>
</ul>

The final structuring of components is in App.js, please dont change it.

Do not change any existing classnames or styles.


Find the demo below:-

![Demo gif](/React-context-theme-toggler.gif)