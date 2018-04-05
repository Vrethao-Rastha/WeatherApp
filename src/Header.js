import React from 'react';

class Header extends React.Component {
state = {
  city:'Gilbert'
}


submitHandler = (e) => {
  e.preventDefault()
  this.props.changeCity(this.state.city)
}

render(){
  return(
    <nav className="navbar navbar-dark bg-primary nav col-md-12">
      <a className="navbar-brand">
      The Weather</a>
      <form onSubmit={this.submitHandler} className="form-inline">
  <input className="form-control mr-sm-2" onChange={ (e) => this.setState({city:e.target.value}) } type="search" placeholder="Search" aria-label="Search"/>
  <button className="btn btn btn-dark my-2 my-sm-0" type="submit">Search</button>
</form>
</nav>
  )
}

}
export default Header
