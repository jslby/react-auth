import React, {Component} from 'react';
import firebase from '../firebase';
import 'firebase/auth';

export default class SignIn extends Component{
  constructor(props){
    super(props);

    this.state = {
      email: 'jslby@yandex.ru',
      password: 'Aj8bydd7'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('email', email);
      this.props.history.push('/dashboard');
    }).catch((error) => {
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