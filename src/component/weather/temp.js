import React, { useState, useEffect } from "react";
import "./style.css";
const Temp = () => {
  const [searchValue, setSearchValue] = useState("Kathmandu");
  const getWeatherInfo = async () => {
    try {
      let URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=cb4e23d95b1b1230941780c2d5b622ac`;

      const res = await fetch(URL);
      const data = await res.json();
      const { temp } = data.main;
      console.log(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      {/* Our temp card */}
      <article className="widget">
        <div className="weatherIcon">
          <i className={"wi wi-day-sunny"}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>25.5&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">Sunny</div>
            <div className="place">Kathmandu, Nepal</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        {/* Our 4 column section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-sunset"></i>
              </p>
              <p className="extra-info-leftside">
                19.19 PM <br /> Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className="wi wi-humidity"></i>
              </p>
              <p className="extra-info-leftside">
                19.19 PM <br /> Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-rain"></i>
              </p>
              <p className="extra-info-leftside">
                19.19 PM <br /> Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className="wi wi-strong-wind"></i>
              </p>
              <p className="extra-info-leftside">
                19.19 PM <br /> Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Temp;
