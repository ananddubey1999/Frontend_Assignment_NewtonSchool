# boilerplate-react-functional-public
In this porject, you will be creating a creating a paginated posts fetching app.
Using this API endpoint <code>https://jsonplaceholder.typicode.com/posts</code>,
but it returns all 200 posts, so instead we will use this endpoint
<code>https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5</code>
Where we can change the numbers for limit and page.
We will only be changing numbers of page parameter,and showing only 5 results per page.
So on page load hit the api for page 1 and display the 5 <code> &lt;Post> </code> components.
<code> &lt;Post> </code> will have class "post" and and will display title of post in <code>h3</code>
and body in a <code>p</code> tag.

<code>PaginationButtonList</code> Component:-
Since we know that there only 200 posts and 5 posts per page, we can stattically render 
all 20 buttons. Each button will have theire corresponding page-number inside as text.
Also each button will have id as <code>button-${page-number}</code>.

The current active page's button will have class <code>active-btn</code>, So initially 
#button-1 will have active class, but upon clicking another page, it will be rmeoved from #button-1
and instead by put on the button clicked.


<code>PostList</code> Component:-
This should contain fetching logic and will also display the posts and loading component with id="loader" when the data is loading. Also render the <code>PaginationButtonList</code> Component here.

So initially the page will show the loading component while data is loading for first request, 
when data fetching is complete,it will remove #loader element and show the 5 posts.




