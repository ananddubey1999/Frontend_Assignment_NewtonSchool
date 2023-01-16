import React, { Component, useState } from "react";
import City from "./City";

function StateDetails(props) {
  const [showCities, setCities] = useState(false);

  function show() {
    return props.stateVar.cities.map((citiesName, citiId) => {
      return (
        <City
          cityVar={citiesName}
          cityName={citiesName.name}
          cityId={citiId}
          key={citiId}
        />
      );
    });
  }

  return (
    <>
      <div
        id={"state" + (props.stateId + 1)}
        onClick={() => {
          setCities(!showCities);
        }}
      >
        {props.stateName}
      </div>
      <div style={{ color: "red", paddingLeft: "20px" }}>
        {showCities ? show() : ""}
      </div>
    </>
  );
}

export { StateDetails };
