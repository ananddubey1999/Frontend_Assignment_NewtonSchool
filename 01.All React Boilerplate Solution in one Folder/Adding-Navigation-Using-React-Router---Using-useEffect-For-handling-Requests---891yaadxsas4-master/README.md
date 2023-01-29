# Adding Navigation to React App
We all know we need to navigate on different web pages to get different pieces of information (Home / About / Contact-us etc.) <br>
But sometimes this can be tedious because it may require refreshing the page which may involve loading new as well as old contents. <br>
React Router is an API for React Applications that allows us to build a single-page web application with navigation without the page refreshing as the user navigates. <br>

## Acceptance Criteria:
- [ ] Create React Application and add Navigation feature to it.
- [ ] Put all your components in App.js and export them. Make **App** as default export.
- [ ] Component **App** is your compelete Application.
- [ ] Component **LocationDisplay** should display your current location pathname in DOM. Like if user on route '/' LocationDisplay should render **"/" (without quotes)** on screen or Like any route '/any-route' LocationDisplay should render **"/any-route" (without quotes)**. *Hint:* useLocation ()
- [ ] there will be two routes '/' and '/about'
- [ ] default route will be '/' (home page)
- [ ] on '/' should be able to see **You are home**. Note: other contents can be there but this must.
- [ ] on '/about' should be able to see **You are on the about page**. Note: other contents can be there but this must.
- [ ] By clicking on About able to go to '/about'
- [ ] By clicking on Home able to get '/'
- [ ] If the user goes to some random URL, display 'No match' on screen.
- [ ] user should be able to go back and forth.
