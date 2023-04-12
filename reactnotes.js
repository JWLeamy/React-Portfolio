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
1.  The element that describes what you want to render (cons title above)
2.  The location/element you want to update or render to 
*/

ReactDOM.render(
    title,
    document.getElementById('')
)

// --------JSX--------
// Essentailly a shortened way to store react style object in a variable
// The following two blocks of code share the same result
const story = React.createElement(
    'h1',
    {},
    'this is my story',
)

const storyy = <h1>this is my story</h1>

//----------you can use js variables using curly brackets {}-------
const john = 'my name is john'
const gender = 'I am a man'

const header = (
    <header>
        <h1>{john}</h1>
        <p>{gender}</p>
    </header>
)