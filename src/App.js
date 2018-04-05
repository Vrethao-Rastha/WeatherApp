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
    extWeather: [],

    search: [],
  }
  search = (searchField) => {
    console.log('searchField', searchField)
    this.setState({
      "search": searchField
    })
  }

  componentDidMount() {
    Promise.all([
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=gilbert,us&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`),
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=gilbert,us,us&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`)
    ])
      .then(data =>  {
        let [ weather, extWeather ] = data
        this.setState({weather: weather.data, extWeather: extWeather.data})
    })
  }

  changeCity = (city)=>{
    Promise.all([
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},us&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`),
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},us,us&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`)
    ])
      .then(data =>  {
        let [ weather, extWeather ] = data
        this.setState({weather: weather.data, extWeather: extWeather.data})
    })
  }

  render() {
    console.log('this:', this.state.search)

    if(this.state.weather.weather) {

      return (
        <div>
        <Header changeCity={this.changeCity} search={ this.search } searchField={ this.state.searchField }/>
        <WeatherIndividual current={ this.state.weather.weather[0].main }  location={ this.state.weather.name } weather={ this.state.weather.main } />
        <hr/>
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
