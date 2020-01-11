import React from 'react';
import logo from './logo.svg';
import './App.css';
import {emojify} from 'react-emojione';
import Linkify from 'react-linkify';
import io from 'socket.io-client';


class Chat extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      messages: [],
      newMessage: {
                    username: '',
                    content: '',
                    timestamp: null,
                    id: '',
                  },
  };
    this.socket = null;
  }

  componentDidMount = () => {
    this.getChat();
  }



  getChat = () => {
    const socket = io("http://3.120.96.16:3000");

    socket.on("new_message", data => console.log(data));
    socket.on("messages", data => {
      this.setState({
        messages: data
      })
    });
    // socket.emit("message"){
    //   username: this.props.username;
    //   content:
    // }
  }

  render(){
    return (
      <div>
        <div className="chat">
          <p className="headerText"> Mandatory 1 Chat </p>
          <p className="headerText"> Ditt användarnamn är: {this.props.username} </p>
          <div className="dialogBox">
            <ul>
              {
                this.state.messages.map(msg => {
                   return (
                   <li
                   key={msg.id}>
                   <span className="ChatUsername">{msg.username}</span>
                   <span className="ChatContent">{msg.content}</span>
                   </li>
                 )
                })
              }
            </ul>

            <input className="typeArea" type="text" name="chat" placeholder="Ditt meddelande" />
          </div>
        </div>
      </div>
  )
  }
}

export default Chat;
