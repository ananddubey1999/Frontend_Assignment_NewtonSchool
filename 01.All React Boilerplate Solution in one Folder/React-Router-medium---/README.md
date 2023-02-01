# React routing 

In this project we will be testing the core skills required for react router.

Your app should will have 2 routes,

1) <code>/bgcolor/:colorname</code>, the colorname supplied will be a simple string like red,green or yellow.(Should be a dynamic route,'colorname' can be any colorname). On entering this route ex:- '/bgcolor/red', display the <code>BackgroundColorChanger</code> component. 
Inside this component, render a main element with height 100vh and backgroundColor property set to the parameter in URL, in this case set it to red. The main element should have text 'Background Color Changer' inside.

2) <code>calculator?num1=n1&num2=n2&op=operation</code>, where n1 and n2 are numbers and operation 
will be one of properly encoded characted from '+', '-', '*', '/' or '%'.
Example url:- '/calculator?num1=90&num2=90&op=%20B' here op='%20B' is the url encoded form for '+' character.
On matching this type of URL, render the <code>Calculator</code> component.
In this component display a div with text 'Your calculation Result is' followed by a span with id="calc-result", which shows the answer to calculation num1 op num2, in above case it will be
90 + 90 which equals 180.
So the final text displayed will be 'Your calculation Result is 180'

