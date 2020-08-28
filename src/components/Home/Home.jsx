import React, { Component } from 'react'
import './home.css'
class Home extends Component {
  render() {
    return (
      <>
        <div className="home-landing-container">
          <img className="home-landing" src="https://silvertrips.in/wp-content/uploads/2019/06/new-zealand.jpg" alt="" />
        </div>
        <div className="home-landing-text">
          <h1>Welcome to New Zealand</h1>
          <div className="home-inner">
            <div className="home-text">
              <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptatibus incidunt enim natus reiciendis expedita veritatis impedit temporibus officiis odio maiores voluptas dolore cumque odit iure alias mollitia, velit, voluptates exercitationem corrupti. Atque voluptatem expedita cum iusto ipsam voluptatum quae architecto repudiandae mollitia officia provident quibusdam impedit, aspernatur tenetur enim.</p>
            </div>
            <div className="home-icon">
              <i className="tree icon"></i>
            </div>
          </div>



        </div>
      </>
    )
  }
}

export default Home