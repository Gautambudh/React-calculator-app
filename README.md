# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![desktop view](https://github.com/Gautambudh/React-calculator-app/assets/112330342/96b4242c-1ffd-48d1-83c3-5df58dbcaf2c)


### Links

- Solution URL: [Solution code](https://github.com/Gautambudh/React-calculator-app.git)
- Live Site URL: [Live site](https://developer-gautam-calculator.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Css3
- MUI Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Material UI Components](https://mui.com/material-ui/getting-started/overview/) - For UI


### What I learned
- learnt to customize the slider component of MUI which i used in this project for theme toggle. It was quite tough to 
  figure out the css overrides for the slider thumb, track, rail but anyhow I found it and customized it as per my need.
- learnt how to switch to different themes on theme toggle. Initially I gave a default color-theme as an array of objects
  and then set it to different colors accordingly for the toggle values that I got from the themetoggler component.
- then i used the alternative concept of eval() method to calculate the output by evaluating the expression inputed by user.

### This is the code I am using for calculating output
```js
const [result, setResult] = React.useState("");

  const handleClick = (e) => {
    if (result == "Error") {
      setResult(e.target.name);
    } else setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    try {
      let output = Function("return " + result)();
      if (result.includes(".") || output.toString().includes(".")) 
      { // checking if any input contains decimal '.' , if so then setting output upto 2 decimal
        setResult(output.toFixed(2).toString());
      } else {
        setResult(output.toString()); // setting output with no decimal or say integer
      }
    } catch (err) {
      setResult("Error");
    }
  };
```

### Useful resources

- [React](https://reactjs.org/) - for front end.
- [material UI documentation](https://mui.com/material-ui/getting-started/overview/) The official documentation. I'd recommend it to anyone still learning this concept.
- [material UI slider component](https://mui.com/material-ui/react-slider/#discrete-sliders) this is the descrete slider component of material ui. I used it for themetoggler switch. Its very useful in creating switch button with more than 2 values. When you make a switch button you only switch between 2 values either true or false, with the help of this slider component, you can make as many values and can toggle between those values.

## Author

- Frontend Mentor - [@Gautambudh](https://www.frontendmentor.io/profile/Gautambudh)
