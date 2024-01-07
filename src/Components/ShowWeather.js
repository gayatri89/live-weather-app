import React, { useEffect, useState } from "react";

const ShowWeather = ({ data }) => {

    const [dynamicBackground, setDynamicBackground] = useState("");
    const city = data.name;
    const country = data.sys ? data.sys.country : null;
    const temperature = data.main ? data.main.temp : null;
    const pressure = data.main ? data.main.pressure : null;
    const visibility = data ? data.visibility : null;
    const humidity = data.main ? data.main.humidity : null;
    const clouds = data.clouds ? data.clouds.all : null;
    const sunriseTime = data.sys ? data.sys.sunrise : null;
    const sunsetTime = data.sys ? data.sys.sunset : null;

    // Change border dynamically
    const dynamicBackgroundColor = (temp) => {
        if (temp < 10) {
            setDynamicBackground("#bbeafa");
        }
        if (temp > 10 && temp <= 30) {
            setDynamicBackground("#fcfa5b");
        }

        if (temp > 30) {
            setDynamicBackground(" #ff512f");
        }
    };

    // Values in standard units
    const pressureInAtm = (pressure / 1000).toFixed(2);
    const tempInCelcius = (temperature / 10).toFixed(2);
    const visibilityInKM = (visibility / 1000).toFixed(2);
    const sunrisetimestamp = new Date(sunriseTime * 1000);
    const sunsettimestamp = new Date(sunsetTime * 1000);

    useEffect(() => {
        dynamicBackgroundColor(tempInCelcius);
        console.log(sunrisetimestamp.getHours())
    }, [tempInCelcius]);

    return (
        <React.Fragment>
            <div className="weather_main" style={{ background: dynamicBackground }}>
                <div className="weather_main" >
                    <h1 className="weather_heading">
                        {city} weather <br /> <span> {country}</span>
                    </h1>
                    <h3 className="temp">Temperature: {tempInCelcius} C , </h3>
                    <div className="weatherData">
                        <p>{data.weather ? data.weather[0].main : null}:{data.weather ? data.weather[0].description : null}</p>
                        <p>
                            sunrise: {data.sys ? sunrisetimestamp.getHours() : null}:{data.sys ? sunrisetimestamp.getMinutes() : null}:{data.sys ? sunrisetimestamp.getSeconds() : null} | sunset: {data.sys ? sunsettimestamp.getHours() : null}:{data.sys ? sunsettimestamp.getMinutes() : null}
                        </p>
                    </div>
                    <hr />
                    <div className="weatherData">
                        <p>
                            Air Quality: {humidity}%{" "}
                        </p>
                        <p>
                            Wind: {clouds} %{" "}
                        </p>
                        <p>Wind Gusts: </p>
                    </div>
                    <div className="weatherData">
                        <p>
                            Pressure:{pressureInAtm} atm{" "}
                        </p>
                        <p>
                            Visibility: {visibilityInKM} Km
                        </p>
                    </div>
                    <div className="weatherData">
                        <p>
                            Humidity: {humidity}%{" "}
                        </p>
                        <p>
                            Clouds: {clouds} %{" "}
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ShowWeather;