import React from 'react';
import './App.css';
import {emojify} from 'react-emojione';
import Linkify from 'react-linkify';
import io from 'socket.io-client';


class Chat extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      myMessage: '',
      messages: [],
      newMessage: {
                    username: '',
                    content: '',
                    timestamp: null,
                    id: '',
                  },
  };
    this.socket = null;
    this.ref = React.createRef();
  }

  componentDidMount = () => {
    this.socket = io("http://3.120.96.16:3000");
    this.socket.on("messages", this.allMessages);
    this.socket.on("new_message", this.newMessage);
  }

  componentDidUpdate = () => {
    this.ref.current.scrollIntoView();
  }

  allMessages = (data) => {
    this.setState({messages: data})
  }
  newMessage = (data) => {
    this.setState({messages: [...this.state.messages, data] })
  }
  message = (e) => {
    this.setState({myMessage: e.target.value})
  }

  sumbit = (e) => {
    e.preventDefault();

    if (this.state.myMessage.length >= 1 && this.state.myMessage.length <= 200) {
      this.setState({ myMessage: '' });
      this.socket.emit('message', {
        username: this.props.username,
        content: this.state.myMessage
      }, (response => {
        console.log(response.data);
        this.newMessage(response.data.newMessage)
      }));
  } else {

  }

}

  render(){
    return (
      <div>
      <div className="content">
        <div className="chat">
          <button className="logoutButton" onClick={this.props.onLogout}>&times;</button>
          <p className="headerText"> Mandatory 1 Chat </p>
          <p className="headerText"> Ditt användarnamn är: {this.props.username} </p>
        </div>
          <div className="dialogBox">

            <ul>
              {
                this.state.messages.map(msg => {
                   return (
                   <li
                   key={msg.id}>
                   <span className="ChatUsername">{msg.username}:</span>
                   <span className="ChatContent"><Linkify>{emojify(msg.content)}</Linkify></span>
                   </li>
                 )
                })
              }
              <div ref={this.ref}> </div>
            </ul>

          </div>

          <form onSubmit={this.sumbit}>
            <input className="typeArea" type="text" value={this.state.myMessage} onChange={this.message} placeholder="Ditt meddelande" />
          </form>

        </div>
      </div>
  )
  }
}

export default Chat;
