import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
      <nav className="header navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <NavLink className="navbar-brand" to="/">Budget Helper App</NavLink>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><NavLink to="/incomeAndExpenses">Income and Expenses</NavLink>
              </li>
              <li><NavLink to="/categories">Categories</NavLink></li>
              <li><NavLink to="/charts">Charts</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;