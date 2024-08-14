import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className="greet-main" id="banner">
        <div className="banner-main">
          <div className="banner-text-div">
            <div>
              <h1 className="banner-text">Hello, I'm Matthew!</h1>
              <p className="banner-text-p subTitle">
                I'm a developer with 10 years experience in building Web and Mobile applications with JavaScript , React/Angular, PHP, Laravel/CakePHP, Bootstrap, Flexbox and other cool libraries and frameworks.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner