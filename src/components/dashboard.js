import React, {Component} from 'react';
import firebase from '../firebase';
import 'firebase/auth';

export default class Dashboard extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  componentWillMount(){
    let user = firebase.auth().onAuthStateChanged(function(user) {
      if(user.email != localStorage.getItem('email')){
        this.props.history.push('/signin');
      }
    });
  }

  render(){
    return(
      <div>Dashboard</div>
    );
  }
}