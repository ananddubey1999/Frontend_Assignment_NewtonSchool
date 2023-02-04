# Form using useReducer

While making forms we use multiple useStates for the fields, and then also use fields 
for setting their respective errors, We will be changing it by making use of useReducer 
hook.

Implement the <code>src/reducers/signUpFormReducer.js</code> such that,
it can work with any amount of input fields, i.e dont hardcode fieldnames 
or actions for changing particular fields.
Your reducer should function the same if initial state is {name:'',password:''}
or {fName:'',lName:'',password:''}.

Your reducer should work with this type of intial state:
<code>
<br>
{
    input:{
        name:'',
        email:'',
        password:''
    },
    errors:{
        name:'',
        email:'',
        password:''
    }
}
</code>
input can have multiple keys,and each input key will have corresponding error key.

Now with the reducer made lets create a form in <code>src/components/FormUsingReducer.js</code>
Use this as you initial Form state.

const initialFormState = {
    input:{
        "name":'',
        "email":'',
        "password":'',
        "consent":false
    },
    errors:{
        "name":'',
        "email":'',
        "password":'',
    }

}
The form element will have id="reducer-form".
Inside the form use the valid type of input and assign id of the corresponding key from the state.
i.e name key will have input element with id="name".
Also use button type submit.

Forms should always be validated before submitting, so we already have a validator function in
<code>src/utils/signupformvalidation.js</code>, use this function to validate the fields, and subsequently 
display the errors. Do not change the validation messages.





