import React, { Component } from 'react';

class Output extends Component {
  toFeet(n){
    let realFeet = ((n*0.393700) /12);
    let feet = Math.floor(realFeet);
    let inches = Math.round((realFeet - feet) * 12);
    return feet + "'" + inches;
  };

  tolbs(n){
    let nearExact = n/0.45359237;
    let lbs = Math.floor(nearExact);
    return lbs;
  }
  render() {
    let height = this.toFeet(this.props.value.height);
    let weight = this.tolbs(this.props.value.weight);
    let bmi = this.props.value.bmi;
    let bmiClass = this.props.value.bmiClass;
    return (
      <div className="output">
        <h3>{height}</h3>
        <h3>{weight}</h3>
        <h3>{bmi}</h3>
        <h3 className = {(this.props.value.bmiClass === 'Obese') ? "danger" : ""}> {bmiClass} {(this.props.value.bmiClass === 'Obese') ? <a href='https://www.livestrong.com/article/506222-how-to-stop-being-obese/'>How do I help myself?</a> : ""}</h3>
      </div>
    );
  }
}

export default Output;
