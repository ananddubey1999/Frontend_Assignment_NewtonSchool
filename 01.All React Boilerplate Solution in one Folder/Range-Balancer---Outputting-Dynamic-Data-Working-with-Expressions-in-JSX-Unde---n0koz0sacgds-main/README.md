# React range balancer

1)Create a div with id="max-sum-holder", inside which
create a input which takes numbers only, which has default value of 50(further refered to as max-sum).

This will be the max possible sum that the two ranges can have.

2) Create a div with id="range-a-holder". 
Inside this create a input of type range, which will have default value of 0 and "max" attribute set to 0.
Also inside the same div create another div with id="range-a-value" which will dispaly the current value of the
before created range input.

3) Like above div, create the same but with different ids and default value.

Create a div with id="range-b-holder". 
Inside this create a input of type range, which will have default value of 50 and "max" attribute set to 50.
Also inside the same div create another div with id="range-b-value" which will dispaly the current value of the
before created range input.

4) Now create a div with id="sum" which will hold the sum of value of range-a and range-b.

So if you have followed all the steps corectly you will see the the sum of ranges is 50 inside #sum div.
The output on your screen will roughly match the demo screenshot below.

Now the main objective of the project is to limit the slider's (range inputs) max value attribute such that
there is sum is <=  max-sum which is the first input element.

So in starting #range-a-holder input will have max attribute set to 0 since #range-b-holder input has defualt value set to 50 leading their sum to be 50. So the first range can not be moved since their sum is already 50.

But if we decrease the #range-b-holder input to 25 from 50, we will then be able to move the #range-a-holder input value upto 25,i.e max attribute of #range-a-holder input  will be set to 25.

Note:- Use proper semantics for all inputs,and make sure you set the "max" attribute of the sliders appropriately.

