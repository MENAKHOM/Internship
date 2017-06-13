import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'

class App extends Component {
    constructor() {
      super();
      this.state = {
        data:[],
        message:"Unlike",
        type:""
      }
      this.changeMessage = this.changeMessage.bind(this);
      this.insertData = this.insertData.bind(this);
    }

    
    changeMessage(){
      if(this.state.message == "Unlike"){
          this.setState({message:"Like"});

      } else {
        this.setState({message:"Unlike"});
      }
    }

    insertData() {
      var item = "React";
      var myArray = this.state.data;
      myArray.push(item);
      this.setState({data: myArray});

    }

    onChange(event){
      this.setState({type:event.target.value})
    }

    render() {
      return (
        <div>
          <Header />
          <h1>MENAKHOM</h1>
          <h1><a href="/Header">Header</a></h1>
          <h1><a href="/Footer">Footer</a></h1>          
          <h1>{this.state.message}</h1>
          <button onClick={this.changeMessage}>{this.state.message}</button><br />
          <h1>{this.state.data}</h1>
          <button onClick={this.insertData}>Insert</button>
          <input type="text" onChange={this.onChange.bind(this)}/>
          <h1>WELCOME : {this.state.type}</h1>
        </div>
      );
    }
}

export default App;
