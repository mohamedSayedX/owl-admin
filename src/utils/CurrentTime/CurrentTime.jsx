import React, {useState, useEffect} from "react";
import "./style.css";
import {formatDate} from "../../customHooks/GeneralHooks/dateFormats";
const CurrentTime = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState(new Date());
  const [state, setState] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";
      setState(ampm);
      const formattedTime = `${hours % 12 || 12}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      // :${seconds.toString().padStart(2, "0")} ${ampm}
      const date = now.toLocaleDateString();

      setTime(`${formattedTime}`);
      setDate(now);
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // return <div style={{ fontFamily: "Arial" }}>{time}</div>;

  return (
    <div className='currentTime_card'>
      <p className='time-text'>
        <span>{time}</span>
        <span className='time-sub-text'>{state}</span>
      </p>
      <p className='day-text'> {formatDate(date, false)}</p>
    </div>
  );
};

export default CurrentTime;
