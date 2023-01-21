# React form validation

We will be creating a form with 4 fields.

1) Input with id="name" for taking the name of the user.
2) Input with id="email" for taking the email of the user.
3) Input with id="password" for taking the password of the user.
4) Checkbox input with id="consent" which is unchecked by default.
5) And a button for submitting the form with "Signup" as text inside.

Note:- All inputs should have their corresponding labels.
 
For validation , there is a helper function in <code>utils/validation.js</code>
which takes an object,with keys "email","password" and "name" and returns the relevant errors 
for those fields in an object. Display validation errors using this function(this only returns an error, you have to display the 
errors returned by the function). It returns null if there is no error.

Every time user clicks on submit button, display only the relevant users, so if initially user did not fill anything 
and all fields were showing error, but later filled "name" field with valid value, so the error below "name" field
should be removed, and all other fields still showing error.


Display the errors below the field they belong to, ex:- if error is in name validation, it shows the error below name input.
