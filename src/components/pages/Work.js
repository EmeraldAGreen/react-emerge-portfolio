import React from 'react';
import ShyGuyFinance from '../assets/ShyGuy-Finance.png';
import WeatherDashboard from '../assets/weather-dashboard.png'

export default function Work() {
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
                  </div>
    </div>
  );
}
