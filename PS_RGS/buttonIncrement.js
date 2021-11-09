// Using the useState() function to maintain values for the button component
function Button() {
    /*
    counter = getter, setCounter = setter.  useState() returns an array containing two values, meaning JS array destructuring has to be used
    useState() is a "hook"
    useState(0) sets the inital value of the button to 0
    An onClick element is added to increment the value of the button using the setter (setCounter) 
    */
    const [counter, setCounter] = useState(0)
    return <button onClick={() => setCounter(counter+1)}>{counter}</button>;
  }
  
  ReactDOM.render(
    <Button />, 
    document.getElementById('mountNode'),
  )
  