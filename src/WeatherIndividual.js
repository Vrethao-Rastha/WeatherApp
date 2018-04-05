import React from 'react';

const WeatherIndividual = ({weather, location, current }) => {

  if(current){
    return(
      <div className="container-fluid">
      <div className="row">
        <img className="nav-pic col-md-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE57OQzgdXd04ZnA7b5PuhoTFg8bufsUs8HP7s01LPnr9WA5w7"/>
        <h1 className="col-md-4"> { location } </h1>
          <h1 className="col-md-6">Current Conditions: { current } </h1>
      </div>
      <hr/>
      <div className="row">


        </div>

        <div className="row">

        <div className="col-md-2">Temperature { weather.temp }&deg;</div>
          <div className="col-md-2">Pressure { weather.pressure }</div>
          <div className="col-md-2">Humidity { weather.humidity }%</div>
          <div className="col-md-2">Low { weather.temp_min }&deg;</div>
          <div className="col-md-2">High { weather.temp_max }&deg;</div>

        </div>
      </div>

    )
  }else{
    return (
      <div className="container">
        <div className="row">
          <p className="fix2"> Please Wait </p>
      <div className="progress fix col-md-8">
  <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Loading...</div>
</div>
</div>
</div>
)
  }
}






export default WeatherIndividual
