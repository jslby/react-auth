import React, {Component} from 'react';
import firebase from '../firebase';
import 'firebase/auth';

export default class SignUp extends Component{
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function(){
      localStorage.setItem('email', this.state.email);
      this.history.push('/dashboard');
    }).catch(function(error) {
      console.log(error);
    });
  }

  handleChange(e){
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="email" value={this.state.email} onChange={this.handleChange}/>
          <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}