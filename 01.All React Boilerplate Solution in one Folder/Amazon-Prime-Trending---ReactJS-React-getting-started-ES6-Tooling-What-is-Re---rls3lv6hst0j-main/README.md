# React: Slideshow App

### Requirements: 

**Your task is to Create Simple SlideShow Application using React**

#### Acceptance Criteria:-
- The Slides component takes an array of slides as a prop. Each element of this array denotes a single slide and is an object with 2 properties: string title and string text.
- On application launch, the first slide must be rendered.
- Clicking on the "Next" button shows the next slide. This button is disabled when the current slide is the last one.
- Clicking on the "Prev" button shows the previous slide. This button is disabled when the current slide is the first one.
- Clicking on the "Restart" button returns to the first slide. This button is disabled when the current slide is the first one.
- You can assume that the passed slides array contains at least one slide.
- Slides data is in ```src/data.js```.
- Initially, the file is filled with boilerplate code. 
**Note the following:**
- The "Restart" button must have ```data-testid="button-restart"```.
- The "Prev" button must have ```data-testid="button-prev"```.
- The "Next" button must have ```data-testid="button-next"```.
- Each slide's title must be rendered as an ```<h1>``` element with ```data-testid="title"```.
- Each slide's text must be rendered as a ```<p>``` element with ```data-testid="text"```.
  
*Please note that the component has the above data-testid attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.*
