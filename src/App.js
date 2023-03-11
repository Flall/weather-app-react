import React from "react";
import Form from "./Form";
import Overview from "./Overview";
import Humidity from "./Humidity";
import Wind from "./Wind";
import FeelsLike from "./FeelsLike";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Form />
            <Overview />

            <div className="row">
              <div className="col-6 d-flex">
                <div className="d-flex weather-temperature">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="sunny icon"
                    id="icon"
                  />
                  <div className="float-left">
                    <strong>6</strong>
                    <span className="units">
                      <a href="/" id="celsius-link" class="active">
                        °C{" "}
                      </a>
                      |
                      <a href="/" id="fahrenheit-link">
                        °F
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex">
                <div className="float-right">
                  <ul>
                    <li>
                      <Humidity />
                    </li>
                    <li>
                      <Wind />
                    </li>
                    <li>
                      <FeelsLike />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
      <footer>
        Coded by
        <a
          href="https://www.linkedin.com/in/francescalalli/"
          class="footer"
          target="_blank"
          rel="noreferrer"
        >
          Francesca Lalli{" "}
        </a>
        open-sourced on
        <a
          href="https://github.com/Flall/weather-app-react"
          target="_blank"
          rel="noreferrer"
          class="footer"
        >
          {" "}
          GitHub
        </a>
        and hosted on
        <a
          href="https://zesty-biscochitos-178337.netlify.app/"
          class="footer"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify
        </a>
      </footer>
    </div>
  );
}
