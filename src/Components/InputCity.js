import React, { useState } from "react";

const InputCity = ({ onSubmitHandler, city, onInputHandler }) => {
    const [inputCity, setInputCity] = useState("Seattle");
  return (
    <div className="input">
      <input
        type="text"
        value={city}
        onChange={onInputHandler}
        placeholder="City..."
      />
      <br />
      <button className="input_btn" type="submit" onClick={onSubmitHandler}>
        Search
      </button>
    </div>
  );
};

export default InputCity;