import React, { Component } from 'react'
import './navbar.css'
class Navbar extends Component {
  render() {
    return (
    <div className = "navbar">
      <div className="navbar-left">
      <h2 className="navbar-brand">Tourism NZ</h2>
      <a className = "navbar-link" href="">Home</a>
      <a className = "navbar-link" href="">About</a>
      </div>
      <div className ="navbar-right">
      <button>Sign In</button>
      <button>Sign Up</button>
      </div>
      
    </div>
  )}
}

export default Navbar