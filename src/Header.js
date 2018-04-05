import React from 'react';

const Header = () => {
  return(
    <nav className="navbar navbar-dark bg-primary nav col-md-12">
      <a className="navbar-brand">
      The Weather</a>
      <form class="form-inline">
  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form>
</nav>
  )
}
export default Header
