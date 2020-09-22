import React, { Component } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { Button, Responsive, Segment  } from 'semantic-ui-react'
class Navbar extends Component {

  state = {
    navbarToggle: true
  }

  componentDidMount = () => {
    var prevScrollpos = window.pageYOffset
    window.onscroll = () => {
      var currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        this.setState({ navbarToggle: true })
      } else {
        this.setState({ navbarToggle: false })
      }
      prevScrollpos = currentScrollPos
    }
  }
  render() {
    return (
      <Segment.Group>
        <Responsive as={Segment} minWidth={1000}>
          <div className={`navbar ${this.state.navbarToggle ? "show" : "hide"}`}>
            <div className="navbar-left">
              <div className="navbar-brand">Tourism NZ</div>
              <Link className="navbar-link" to="/">Home</Link>
              <Link className="navbar-link" to="/about">About</Link>
            </div>
            <div className="navbar-right">
              <Button primary>Sign In</Button>
              <Button color='purple'>Sign Up</Button>
            </div>

          </div >
        </Responsive>
        <Responsive as={Segment} minWidth={0} maxWidth={1000}>
          <div className={`navbar ${this.state.navbarToggle ? "show" : "hide"}`}>
            <div className="navbar-left">
              <div className="navbar-brand">Tourism NZ</div>
              <Link className="navbar-link" to="/">Home</Link>
              <Link className="navbar-link" to="/about">About</Link>
            </div>
          </div >
        </Responsive>
      </Segment.Group>
    )
  }
}

export default Navbar