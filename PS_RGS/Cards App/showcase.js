
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
    render(){
      return(
        <form action="">
          <input type="text" placeholder="GitHub Username"/>
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
    render() {
    return (
        // Wrapping components in a div to allow them to be displayed at the same time.
        <div>
            <div className="header">{this.props.title}</div>
            <Form />
            <CardList profiles={testData}/>
        </div>
    );
    }
}


ReactDOM.render(
<App title="The GitHub Cards App" />,
mountNode,
);