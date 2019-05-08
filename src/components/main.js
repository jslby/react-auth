import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Main extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Link to="/signup">Go to SignUp</Link>
        <Link to="/signin">Go to SignIn</Link>
      </div>
    );
  }
}