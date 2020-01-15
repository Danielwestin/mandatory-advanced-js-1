import React from 'react';
import './App.css';
import Login from './login';
import Chat from './chat'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      isLoggedIn: false
    };
  }

  onSubmit = (username) => {
    this.setState({isLoggedIn: true, username: username});
  }

  onLogout = () => {
    this.setState({isLoggedIn: false, username: ''})
  }


  render(){
    let el;
    if (this.state.isLoggedIn) {
      el = <Chat username={this.state.username} onLogout={this.onLogout} />
    } else {
      el = <Login onSubmit={this.onSubmit}/>
    }
    return <div>
      {el}
    </div>
  }
}
export default App;
