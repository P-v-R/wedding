import React, { useEffect, useState } from "react";

const Timer = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div>
    <div className="hidden md:flex text-2xl text-olive justify-center">
      <div className="px-4">{leading0(days)} Days</div>
      <div className="px-4">{leading0(hours)} Hours</div>
      <div className="px-4">{leading0(minutes)} Minutes</div>
      <div className="px-4">{leading0(seconds)} Seconds</div>
    </div>
    <div className="md:hidden text-xl text-olive justify-center">
      <div className="">{leading0(days)} Days</div>
      <div className="mx-4">{leading0(hours)} Hours</div>
      <div className="mx-4">{leading0(minutes)} Minutes</div>
      <div className="">{leading0(seconds)} Seconds</div>
    </div>

    </div>
  );
};

export default Timer;
