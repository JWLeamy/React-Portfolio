// React can run on phones, tablets, tv's and even game console.

// react.dev is the react library library
// react-dom is what connects to the app and maniltales the 

// _______SYNTAX FOR CRAEATING REACT ELEMENTS_______

// createElement accepts 3 arguments that will establish the element you are trying to create
// technically, this is an object
/*
1. Usually a string of the HTML element you want to make (in this case h1)
2. Object cotaning any attribute or element you want to pass into the HTML element {if it has no att/elements, pass an empty object or null}
3. The contents or children of the element you are creating (can be other ele)
*/
const title = React.createElement(
    'h1',
    { id: 'main-title', title: 'This is a title'},
    'my first react element'

)


/*
ReactDOM.render() = renders react objects to the DOM --- it accepts 2 arguments
1.  
2.
*/