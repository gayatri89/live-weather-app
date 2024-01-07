import React, { useEffect, useState } from "react";
import "./styles.css"
import Header from "./Components/Header"
import InputCity from "./Components/InputCity"
import ShowWather from "./Components/ShowWeather";
const App = () => {
  const [inputCity, setInputCity] = useState("Seattle");
  const [cityName, setCityName] = useState("Seattle");
  const [weatherData, setWeatherData] = useState({})
  const [error, setError] = useState(false)

  //  Input element handler
  const inputHandler = (e) => {
    setInputCity(e.target.value);
  };

  //  Search button
  const submitHandler = (e) => {
    e.preventDefault();
    setError(false);
    setCityName(inputCity);
  };
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=de4c1ce0787a29e97e1140dd8dcfd435
    `;
  // Featching weather data
  async function fetchData(URL) {
    const response = await fetch(URL)
    const data = await response.json();
    if (data.cod === "404") {
      setError(true);
    } else {
      setWeatherData(data);
    }
  }

  // To call weather data
  useEffect(() => {
    fetchData(URL);
  }, [URL])

  return (
    <div>
      <Header />
      <InputCity
        city={inputCity}
        onInputHandler={inputHandler}
        onSubmitHandler={submitHandler}
      />
      {error ? (<h3 className="error">No data found for {inputCity && inputCity} :(  </h3>) : (<ShowWather data={weatherData} />)}

    </div>
  )
}

export default App