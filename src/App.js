import React, { useEffect, useState } from "react";
import "./styles.css"
import Header from "./Components/Header"
import InputCity from "./Components/InputCity"

const App = () => {
    const [inputCity, setInputCity] = useState("Seattle");
    const [cityName, setCityName] = useState("Seattle");


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

    return (
        <div>
            <Header />
            <InputCity
                city={inputCity}
                onInputHandler={inputHandler}
                onSubmitHandler={submitHandler}
            />
        </div>
    )
}

export default App