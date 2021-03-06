// Function to show button which receives onClickFxn via its props
function Button(props) { 
  // you can't do <button onClick={props.onClickFxn(props.incrementVal)} because this is not a reference to a function, it's an invocation.
  const handleClick = () => props.onClickFxn(props.increment)  
  return (
      // props.onClickFxn calls the incrementCounter function which can be seen in App()
      <button onClick={handleClick}>
        +props.increment
      </button>
    );
  }
  
  // Function to display the current number of times the button has been clicked. Receives counter via its props
  function Display(props){
      return(
          <div>No. Clicks: {props.message}</div>
      )
  }
  
  // Contains all of components. Consider it a master component.
  function App(){
    // To access "counter", its scope must be altered to be accessible by both the "Button" and "Dispay" components. Before, it was local to "Button" so "Display" could not access it.
    // Counter, setCounter, incrementCounter, can all be passed to App's child components
    const [counter, setCounter] = useState(0) // Getters and setters for the number of times the button has been clicked
    const incrementCounter = (incrementVal) => setCounter(counter + incrementVal); // Fxn to increment counter
    return(
      <div>
        <Button onClickFxn={incrementCounter} increment = {1} />
        <Button onClickFxn={incrementCounter} increment = {5} />
        <Button onClickFxn={incrementCounter} increment = {10} />
        <Button onClickFxn={incrementCounter} increment = {20} />
        <Button onClickFxn={incrementCounter} increment = {50} />
        <Display message={counter} />
      </div>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('mountNode'),
  )
  