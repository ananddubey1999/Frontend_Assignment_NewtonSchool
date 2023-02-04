# Todo Fetcher

In this we will fetch data from an external API and use its data to show content.

<code>https://jsonplaceholder.typicode.com/todos</code> Making a GET request to this URL
returns an array of 200 todos. But we only have to display the <em>first 20</em> of them.

1) When page loads, call the API, while api is loading/waiting for data from the backend display the <code>Loader</code>
component.

2) When the api returns the data, remove the Loader component (stop displaying it). And show the <code>Todo</code>(more info how to implement it later) components for each of the 20 todos in an ordered list.

3) Just below the list,  make a div with id="filter-holder" which holds two check boxes(input element with type relevant for checkbox).
    a) First checkbox with id="completed-checkbox" which is checked by default,and on unchecking it, it stops showing all 
    the todos which are completed.
    b) second checkbox with id="incompleted-checkbox" which is also checked by default,and on unchecking it, it stops showing all 
    the todos which are incompleted.
    So by default all 20 todos will be shown since both checkboxes will be checked.

Also Only one of the two checkboxes will be unchecked at a time, so you don't need to worry about the case where both checkboxes are unchecked.

4) The <code>Todo</code> component, will take 3 props, id,title,completed(boolean) which are all present in api response. It will be a div with class="todo" and id="todo-${id}" where id is the id of the todo returned by the api. Inside the div
make another div with class="todo-title" which will contain title and another div with class="todo-status" which will show "Complete" if completed boolean is true else false. This completed boolean will also be used to filter when the above checkboxes are unchecked.


Note:- You have predefined styles in App.css, you can change them as per your style.


