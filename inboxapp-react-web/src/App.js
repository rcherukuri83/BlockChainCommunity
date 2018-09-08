import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import inbox from './inbox';

class App extends Component {

  state = {
    message: '',
    inboxAddress: '',
    greeting: '',
    blkGreeting:''
  };

  async componentDidMount() {
    const greeting = await inbox.methods.message().call();
    
    const inboxAddress = await inbox.options.address;
    const message = '-->Set a Greeting Message and see what Happens';
    const blkGreeting = ' NULL ';
    this.setState({ message, inboxAddress , greeting});
  }

  onSubmit = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();    

    this.setState({ message: 'Waiting on setting message...' });

    await inbox.methods.setMessage(this.state.greeting).send({from: accounts[0], gas:'1000000'});


    this.setState({ blkGreeting: await inbox.methods.message().call()})

    this.setState({ message: 'Your message is now Set! as "'+ this.state.blkGreeting+'"'});
  };

  render() {
    return (
      <div>
        <h2> User Interface to InboxApp</h2>
        <p>
          This contract is managed by {this.state.inboxAddress}.           
        </p>
        
        <hr />

        <form onSubmit={this.onSubmit}>
          <h4>Want to send a message?</h4>
          <div>
            <label>Set the Message</label>
            <input
              //greeting={this.state.greeting}
              //onChange={event => this.setState({ greeting: event.target.value })}
              onChange={event => this.setState({ greeting: event.target.value})}
            />
          </div>
          <button>Enter</button>
        </form>

        <hr />

        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default App;
