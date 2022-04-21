import React, { useState, useEffect } from "react";
import "./style.css";

export const WorldTime = () => {
  const [datetime, setDatetime] = useState("2020-11-13T22:46");
  const [timezone, setTimezone] = useState("Europe/Prague");

  useEffect(() => {
    fetch(`https://worldtimeapi.org/api/timezone/${timezone}`)
      .then((response) => response.json())
      .then((data) => {
        setDatetime(data);
      });
      [timezone]        // druhá část úkolu, v první části by toto zůstalo prázdné 

  });

  const handleTimezone = (event) => {
      setTimezone(event.target.value)
  }

  
  return (
    <div className="wordtime">
      <h3>WordTime{datetime.datetime}</h3>
   
        <select onChange={handleTimezone} value={timezone}>
          <option value="America/New_York">New York</option>
          <option value="Europe/London">Londýn</option>
          <option value="Europe/Moscow">Moskva</option>
          <option value="Europe/Prague">Praha</option>
          <option value="Asia/Hong_Kong">Hong Kong</option>
          <option value="Asia/Jerusalem">Jeruzalém</option>
        </select>
      
    </div>
  );
};
