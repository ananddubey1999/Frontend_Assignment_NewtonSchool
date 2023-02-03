# Bored API React

In this project we will be making use of th api Bored Activity.
<code>const makeURL = (type) => `http://www.boredapi.com/api/activity?type=${type}`<code>
The function <code>makeURL</code> takes a string and returns a string which is URL we will make the request.
We can use two types <b>recreational</b> or <b>education</b>.
Both urls will return an object of this structure<br />
<code>
{
&nbsp;&nbsp;activity: "Learn about a distributed version control system such as Git",<br />
&nbsp;&nbsp;type: "education",<br />
&nbsp;&nbsp;participants: 1,<br />
&nbsp;&nbsp;price: 0,<br />
&nbsp;&nbsp;link: "https://en.wikipedia.org/wiki/Distributed_version_control",<br />
&nbsp;&nbsp;key: "9303608",<br />
&nbsp;&nbsp;accessibility: 0<br />
}
</code>

On intital page load make request to 'education' url and display the activity(ignore all other like type and price etc) inside div with id="activity".

You will notice the component <code>Loader<code>, display it while the request is being made i.e while data is loading and remove once we get the data from url.
Note:- Use fetch for making network requests.

Below #activity div make two buttons with id="btn-education" and id="btn-recreation", 
Upon clicking the make the request to relevant urls ("education" or "recreational") and shows Loader while loading and when data is 
received it shows the new activity inside #activity div.
