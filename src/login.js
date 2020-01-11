import React from 'react';

class Login extends React.Component {
  render(){
    return <div>
      <div className="login">
        <p> Skriv in ditt användarnamn: </p>
        <form onSubmit={this.props.onSubmit}>
          <input onChange={this.props.onChange} className="usernameText" type="text" name="chat" placeholder="Användarnamn:" />
        </form>
      </div>
    </div>
  }
}

export default Login;
