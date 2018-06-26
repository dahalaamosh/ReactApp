import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Testimonials from './components/testimonials';
import './App.css';
const request = require('request');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo : 'bar',
      resumeData: {},
      tweets: {}
    }
    this.getResumeData = this.getResumeData.bind(this);
  }

  getResumeData(){
    var that = this;
    request("http://localhost:3000/resumeData.json",function(err, request, body){
      if(!err && request.statusCode === 200){
        var result = JSON.parse(body);
        that.setState({resumeData: result})
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    console.log(this.state.resumeData)
    return (
      <div className="App">
        <Header data = {this.state.resumeData.main} />
        <About data = {this.state.resumeData.main} />
        <Resume data = {this.state.resumeData.resume}/>
        <Portfolio data = {this.state.resumeData.portfolio}/>
        <Testimonials data = {this.state.resumeData.testimonials} />
        <Contact data = {this.state.resumeData.main} />
        <Footer />
      </div>
    );
  }
}

export default App;
