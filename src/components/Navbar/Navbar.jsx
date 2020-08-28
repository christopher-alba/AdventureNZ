import React, { Component } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-brand">Tourism NZ</div>
          <Link className="navbar-link" to="/">Home</Link>
          <Link className="navbar-link" to="/about">About</Link>
        </div>
        <div className="navbar-right">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>

      </div>
    )
  }
}

export default Navbar