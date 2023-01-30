# React Router Easy
In this project, you will be making use of core concepts of the react-router v6.

Firstly implement the components for the page in pages directory.
Inside <code>src/pages/Home.js</code>, display a div with id="home-page"
with text "Home Page" inside it.

Do the same for <code>src/pages/Index.js</code>, display a div with id="index-page"
with text "Index Page" inside it.

In the <code>src/pages/NotFound.js</code>,
display a div with id="not-found-page" with text "Not found page" inside it.

These will be all the pages we will be needing.

Now in <code>src/components/NavBar.js</code>, Make a semantic navbar
(ex:- nav ul li) which has two links.
Use NavLink component, first link will have class =  "index-link" with path pointing to "/" ,
and second link will have class = "home-link" with path pointing to "/home".

Now the heart of our App, the routes will be set up in <code>src/AppRoutes.js</code>
You will be making 3 routes, one for Index page which shows the Index page component with path="/",
one for Home page with path="/home".

All other paths will lead to showing NotFound page component.




