# Stateful list 

In this project we will be building a stateful list for showing movies.

We have a data object in <code>src/components/App.js</code> where the keys are years and values are array containing movie names.

Make a select input, where options are the years available in the data object.
Also since we want to the select to have no option selected by default, make an option which has its value attribute set to null
<code>&lt;option value={null}>&lt;/option></code>.

So total number of options will be number of keys in the data object + 1 for the empty option.

Make a div with id="selected-year" which shows "No year selected" by default when no option(empty option)
or when year is selected for example 2020 it shows "Selected year-2020".

On selecting the year from it shows the relevant movies from that year in an unordered list like in the demo.