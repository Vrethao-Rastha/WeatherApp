import React, { Component } from 'react';

class WeatherMain extends Component {

  state = {
    weather: []
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=85233,us&APPID=2ce0afc5fdd9c6670a6ae67ee6005b28&units=imperial

`)
      .then(response => response.json())
      .then(data =>  this.setState({weather: data}))
  }


  render() {
    console.log('this:' , this.state.weather.main);

    return (

      <div>

      <div id="openweathermap-widget-11"> {this.state.main}</div>


  </div>
    );
  }
}

export default WeatherMain;
