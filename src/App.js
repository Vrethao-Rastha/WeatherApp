import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'
import WeatherIndividual from './WeatherIndividual';
import WeatherFiveDay from './WeatherFiveDay';

class App extends Component {

  state = {
    weather: [
      "temp": '',
      "pressure": '',
      "humidity": '',
      "temp_min": '',
      "temp_max":'',
    ],
    extWeather: [

    ],
  }

  componentDidMount() {
    Promise.all([
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=85233,us&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`),
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=85233,us&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`)
    ])
      .then(data =>  {
        let [ weather, extWeather ] = data
        this.setState({weather: weather.data, extWeather: extWeather.data})
    })
  }

  render() {
    if(this.state.weather.weather) {

      return (
        <div>
        <Header />
        <WeatherIndividual current={ this.state.weather.weather[0].main }  location={ this.state.weather.name } weather={ this.state.weather.main } />
        <WeatherFiveDay weather={ this.state.extWeather } />
      </div>
      );
    }else{
      return <div className="container">
        <div className="row">
          <p className="fix2"> Please Wait </p>
      <div className="progress fix col-md-8">
  <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Loading...</div>
</div>
</div>
</div>
    }

  }
}

export default App;
