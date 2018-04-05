import React from 'react'
import Day from './Day';

const WeatherFiveDay = ({ weather }) => {

  console.log('?', weather)

      let theWeather = weather.list.filter(time => time.dt_txt.includes('12:00:00')).map((day, idx) => <Day key = { idx } day={ day }/>)
    return(
      <div className="container-fluid">
        <div className="row">
        <h1> Your extended forcast: </h1>
      </div>
      <div className="row">
        <h3 className="col-md-2">Day</h3> <h3 className="col-md-2">Temp</h3> <h3 className="col-md-2">Low</h3> <h3 className="col-md-2">High</h3>
      </div>
      { theWeather }
    </div>

    );

}

export default WeatherFiveDay
