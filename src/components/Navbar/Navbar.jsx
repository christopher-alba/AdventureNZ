import React, { Component } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
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
          <Button primary>Sign In</Button>
          <Button color='purple'>Sign Up</Button>
        </div>

      </div>
    )
  }
}

export default Navbar