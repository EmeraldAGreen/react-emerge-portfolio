import React from 'react';
import ShyGuyFinance from '../assets/ShyGuy-Finance.png';
import WeatherDashboard from '../assets/weather-dashboard.png'
import WoW from '../assets/world-of-workouts.png'
import eCommerce from '../assets/insomnia-logo.jpeg'
import employeeTracker from ''
import dayPlanner from '../assets/dayPlanner'

export default function Portfolio() {
  return (
    <div id="deployed-projects" className="deployed-projects">
      <h1>My Work</h1>
          <div className="row">
            <div className="col-sm-6">
                <div className="card border-dark rounded">
                    <div className="card-body">
                        <h5 className="card-title">ShyGuyFinance </h5>
                          <img src={ShyGuyFinance} className="card-img-top" alt="..."/>
                          <a href="https://mtnbiker72.github.io/Project1-Finance/" className="btn btn-dark">GitHub Pages</a>
                          <a href="https://github.com/mtnbiker72/Project1-Finance" className="btn btn-dark">Github Repo</a>
                    </div>
                  </div>
                </div>
              <div className="col-sm-6">
                  <div className="card border-dark">
                      <div className="card-body">
                          <h5 className="card-title">Weather Dashboard</h5>
                          <img src={WeatherDashboard} className="card-img-top" alt="..."/>
                          <a href="https://emeraldagreen.github.io/city-weather-forecast/" className="btn btn-dark">Github Pages</a>
                          <a href="https://github.com/EmeraldAGreen/city-weather-forecast" className="btn btn-dark">Github Repo</a>
                      </div>
                  </div>
              </div>
              <div className="col-sm-6">
                <div className="card border-dark rounded">
                    <div className="card-body">
                        <h5 className="card-title">World of Workouts</h5>
                          <img src={WoW} className="card-img-top" alt="..."/>
                          <a href="https://world-of-workouts.herokuapp.com/" className="btn btn-dark">Deployed Link</a>
                          <a href="https://github.com/EmeraldAGreen/WoW" className="btn btn-dark">Github Repo</a>
                    </div>
                  </div>
                </div>
              <div className="col-sm-6">
                <div className="card border-dark rounded">
                    <div className="card-body">
                        <h5 className="card-title">E-Commerce Backend</h5>
                          <img src={eCommerce} className="card-img-top" alt="..."/>
                          <a href="https://drive.google.com/file/d/1-rVOt2sXMUgDdPudmEFGuAVXB4sP2JUx/view" className="btn btn-dark">Walkthrough Video</a>
                          <a href="https://github.com/EmeraldAGreen/my-ecommerce" className="btn btn-dark">Github Repo</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                <div className="card border-dark rounded">
                    <div className="card-body">
                        <h5 className="card-title">Content Management System</h5>
                          <img src={employeeTracker} className="card-img-top" alt="..."/>
                          <a href="https://drive.google.com/file/d/1ek07O607MQr0BpJGK6BULbZg0eWvIkea/view" className="btn btn-dark">Walkthrough Video</a>
                          <a href="https://github.com/EmeraldAGreen/employee-tracker-CMS" className="btn btn-dark">Github Repo</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                <div className="card border-dark rounded">
                    <div className="card-body">
                        <h5 className="card-title">Day Planner</h5>
                          <img src={dayPlanner} className="card-img-top" alt="..."/>
                          <a href="https://emeraldagreen.github.io/third-party-api-day-planner/" className="btn btn-dark">Deployed Link</a>
                          <a href="https://github.com/EmeraldAGreen/third-party-api-day-planner" className="btn btn-dark">Github Repo</a>
                    </div>
                  </div>
                </div>
          </div>
    </div>
  );
}
