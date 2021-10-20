import { Component } from 'react';
import Form from './Components/Form/Form.js'
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      name: '',
      ed: 'ECE'
    }
  }
  componentDidMount(){
    this.setState({name: 'Yash'})
  }
  
  handleSubmit() {
    this.setState({name: 'Akhilesh'})
  }
  render(){
    return(
      <div className='App'>
        <Form />
      </div>
    )
  }
}

export default App;
