import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login';
import Chat from './chat'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username: '', isLoggedIn: false};
    // 
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({username: e.target.value});
  }
  onSubmit = (e) => {
    this.setState({isLoggedIn: true});
  }


  render(){
    let el;
    if (this.state.isLoggedIn) {
      el = <Chat username={this.state.username} />;
    } else {
      el = <Login onChange={this.onChange} onSubmit={this.onSubmit}/>;
    }
    return <div>
      {el}
    </div>
  }
}

export default App;
