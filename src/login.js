import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      validUsername: false,
    }
  }

  submit = (e) => {
    e.preventDefault();

    if (this.state.validUsername){
      this.props.onSubmit(this.state.username);
    }
  }

  validation = (e) => {
    const regex = /^[A-Za-z0-9-_\s]{1,12}$/;
    const valid = regex.test(e.target.value)
    if (valid) {
      this.setState({validUsername: true, username: e.target.value});
    } else {
      this.setState({validUsername: false})
    }
  }

  render(){
    return <div>
      <div className="login">
        <p> Skriv in ditt användarnamn: </p>
        <form onSubmit={this.submit}>
          <input
            onChange={this.validation}
            className="usernameText"
            type="text" name="chat"
            placeholder="Användarnamn:"
          />
        </form>
      </div>
    </div>
  }
}

export default Login;
