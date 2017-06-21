import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { flatten, times, range } from 'lodash';
import { StickyContainer, Sticky } from 'react-sticky';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'

class App extends Component {
    constructor() {
      super();
      this.state = {
        data:[],
        message:"Unlike",
        type:"",
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

      const NUMBER_OF_PARAGRAPHS = 1;
      const paragraphs = flatten(times(NUMBER_OF_PARAGRAPHS, (index) => 
        (<p key={index}>CT Asia is a leading best-in-class, innovative Contact Center based in Asia.
          We also provide seamless integrated multifunctional solution, front-end systems,
          CRM solution, IT services, IT-enable services and system integration services.
          Since our establishment in 1997, CT Asia has successfully undertaken various Contact Center projects for many leading mid-sized and large enterprises across industries from banking, 
          financial services, insurance, health care, telecoms, consumer trading to government sectors. </p>)
      ));

      const NUMBER_OF_KITTIES = 1;
      const kitties = range(0, NUMBER_OF_KITTIES).map((i) => {
        return (
          <div className="sidebar-kitties" key={i}>
            {/*<StickyContainer style={{zIndex: 2}}>
              <Sticky>
                  <img src="https://gotrainingtalk.files.wordpress.com/2009/02/ctasia1981.jpg" />
                </Sticky>
                <div style={{height: "300px"}}></div>
              </StickyContainer>*/}
            <img src="https://gotrainingtalk.files.wordpress.com/2009/02/ctasia1981.jpg" />
          </div>
        )
      });

      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <div className="App-intro">
            <Grid>
              <Row className="show-grid">
                <Col lg={8}>
                  {paragraphs.map(paragraphs=>paragraphs)}
                </Col>
                <Col lg={4}>{kitties}</Col>
              </Row>
            </Grid>
          </div>
          
          {/*<Header />
          <h1>MENAKHOM <a href="/Header">Header</a> <a href="/Footer">Footer</a></h1>        
          <h1>{this.state.message}</h1>
          <button onClick={this.changeMessage}>{this.state.message}</button><br />
          <h1>{this.state.data}</h1>
          <button onClick={this.insertData}>Insert</button>
          <input type="text" onChange={this.onChange.bind(this)}/>
          <h1>WELCOME : {this.state.type}</h1>*/}
        </div>
      );
    }
}

export default App;
