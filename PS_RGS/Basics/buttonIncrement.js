// Using the useState() function to maintain values for the button component
function Test() {
  return <h1>This is a test</h1>
}

function Button() {
    /*
    counter = getter, setCounter = setter.  useState() returns an array containing two values, meaning JS array destructuring has to be used
    useState() is a "hook"
    useState(0) sets the inital value of the button to 0
    An onClick element is added to increment the value of the button using the setter (setCounter) 
    */
    const [counter, setCounter] = useState(0)
    return <button onClick={() => setCounter(counter+1)}>{counter}</button>; // {} is used to access elements of a component
  }
  
  // Rendering multiple components at once 
  ReactDOM.render(
    <div>
      <Test />
      <Button />
    </div>, 
    document.getElementById('mountNode'),
  )
  