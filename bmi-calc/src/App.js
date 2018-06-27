import React, { Component } from 'react';
import './App.css';
import Output from './Components/Outputs.js';
import Range from './Components/Range.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: 170,
      weight: 65,
      bmi: 22.49,
      bmiClass: 'Normal'
    }
  }

  handleHeightChange(height){
    this.setState({height:height}, this.setBmi);
  }

  handleWeightChange(weight){
    this.setState({weight:weight}, this.setBmi);
    console.log(this.state);
  }

  setBmi(){
    let bmi = ((this.state.weight/ this.state.height / this.state.height)*10000).toFixed(2);
    this.setState({bmi:bmi, bmiClass: this.getBmiClass(bmi)});
  }

  getBmiClass(bmi){
    if(bmi < 18.5){
      return 'UnderWeight';
    }
    else if (bmi >=18.5 && bmi<= 24.9) {
      return 'Normal';
    }
    else if(bmi >= 25 && bmi <= 29.9){
      return 'Overweight';
    }
    else if(bmi >= 30){
      return 'Obese';
    }
  }

  render() {
    return (
      <div className="App">
        <h1> BMI Calculator </h1>
        <form>
          <div>
            <label>Height</label>
            <Range value={this.state.height} onChange={this.handleHeightChange.bind(this)} />
          </div>
          <div>
            <label>Weight</label>
            <Range value={this.state.weight} onChange={this.handleWeightChange.bind(this)} />
          </div>
        </form>
        <br />
        <Output value={this.state}/>
      </div>
    );
  }
}

export default App;
