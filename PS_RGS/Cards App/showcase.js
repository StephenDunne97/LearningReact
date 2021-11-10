
const testData = [
    {name: "Stephen Dunne", avatar_url: "https://avatars.githubusercontent.com/u/23324044?v=4", company: "SAP"},
    {name: "Mark Zuckerberg", avatar_url: "https://avatars.githubusercontent.com/u/1891799?v=4", company: "Meta"},
];


// Function component
const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card {...profile}/>)}
    </div>
);

// Class component
class Form extends React.Component {
    // Used to read inptu from the form field
    state = {
        username: '',
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username);
    };

    render(){
      return(
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.username} 
            onChange={event => this.setState({ username: event.target.value })} 
            placeholder="GitHub Username" />
          <button>Add Card</button>
        </form>
      );
    }
  }
  

// Class component
class Card extends React.Component {
    render() {
    const profile = this.props;
    return(
        <div className="github-profile">
            <img src={profile.avatar_url}/>
            <div className="info">
                <div className="name">{profile.name}</div>
                <div className="company">{profile.company}</div>
            </div>
        </div>
    ); 
    }
}

class App extends React.Component {
    // Adding a state to allow both the Form and CardList class componenets to access the testData 
    state = {
        profiles: testData,
    };
    render() {
    return (
        // Wrapping components in a div to allow them to be displayed at the same time.
        <div>
            <div className="header">{this.props.title}</div>
            <Form />
            <CardList profiles={this.state.profiles}/>
        </div>
    );
    }
}


ReactDOM.render(
<App title="The GitHub Cards App" />,
mountNode,
);