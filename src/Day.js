import React from 'react';

const Day = (props) => {
  console.log('props:', props)

  if(props){
  return(
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-2">{ props.day.dt_txt }</div>
      <div className="col-md-2">{ props.day.main.temp }</div>
      <div className="col-md-2">{ props.day.main.temp_min }</div>
      <div className="col-md-2">{ props.day.main.temp_max }</div>
      <div className="col-md-2"></div>
      <div className="col-md-2"></div>

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
export default Day
