const url = country => 'http://forverkliga.se/JavaScript/api/simple.php?world'

class App extends React.Component {
constructor(props) {
        super(props)
        this.state = {
            requestFailed: false,
            list: []
        } 
        
}
    
componentDidMount() {    
    fetch(url(this.props.country))
    .then(response => {
        if(!response.ok) {
            throw Error("error! no data to receive")
        }     
        return response
    })
      .then(data => data.json())
      .then(data => {          
        this.setState({
            list: data
        })
    }, () => {       
        this.setState({
            requestFailed: true
        })
    })    
}  

deleteItem(index) {

 let countries = this.state.list;
 countries.splice(index, 1);

 this.setState({ list: countries })  
}  
    
  render() {
        if (this.state.requestFailed) return <h2>Something went wrong!</h2>
        if (this.state.list.length === 0) return <h2>Loading...</h2>
        
        else {
            return (
                <div>
                  
                    <ListOfCountries countries={this.state.list} onDelete={this.deleteItem.bind(this)}/>
                    
                </div>
            )}
    }
}


class ListOfCountries extends React.Component {
    constructor(props) {
            super(props)
            this.state = {
                    selectedCountry: null, 
                    DeleteBtn: false
            } 
        
    }
    
        handleClick(index, event) {
       
        if (event.target.id === 'delete') {
            this.props.onDelete(index);
            this.setState({
                selectedCountry: null
            });
        } else {
            this.setState({
                selectedCountry: this.state.selectedCountry !== index ? index : null
            });
        }
    }

    render() {
        const DeleteBtn = this.state.DeleteBtn;

        const listSorted = this.props.countries.map((country, index) =>
            <li
                onClick={this.handleClick.bind(this, index)}
                key={index}
                value={index}
                className={(this.state.selectedCountry === index ? 'selected' : '')}>

                {country.name}, {country.continent} 
                {this.state.selectedCountry === index &&
                    <button
                       id="delete"
                       onClick={this.handleClick.bind(this, index)}>
                       Delete
                    </button>
                }
                <div>{country.population}</div>
            </li>
        );

        return (
            <div>
                <ul>
                    {listSorted}
                </ul>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('uppgift16')
);