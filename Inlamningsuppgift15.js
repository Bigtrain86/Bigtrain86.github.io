class Calculator extends React.Component {
constructor(props) {
    super(props);
    this.handleResult = this.handleResult.bind(this);
    this.state = {
      numOne: 0,
      numTwo: 0
    };
  };
  
  handleResult(event){
  console.log('App.inputChange körs');
  this.setState({[event.target.name]: event.target.value})
  }
  
  
  
render () {
    var result = +this.state.numOne + + this.state.numTwo;
    console.log(this.state.numOne)
    
    return (
    <div>
    <input  name="numOne"  onChange={this.handleResult} /><span> + </span>  
    <input   name="numTwo"  onChange={this.handleResult} /> 
    <p>Svaret är:</p>
    <div>{parseInt(result)}</div>
    </div>

    )      
}
}

ReactDOM.render(
  <Calculator/>,
  document.getElementById('calc')
);