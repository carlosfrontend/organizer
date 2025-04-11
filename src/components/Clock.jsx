import { useEffect, useState } from "react";
import { ClockIcon } from "./icons/ClockIcon";
const date = new Date();
export const Clock = () => {
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div
      className="absolute top-20 right-2 flex justify-end gap-2 rounded p-2 text-blue-50 text-shadow-indigo-500 text-shadow-md"
      aria-label="A digital clock with hours, minutes and seconds"
      title="A digital clock with hours, minutes and seconds"
    >
      <ClockIcon />
      <div className="font-primary font-bold">
        {dateTime.hours}:
        {dateTime.minutes > 9 ? dateTime.minutes : `0${dateTime.minutes}`}:
        {dateTime.seconds > 9 ? dateTime.seconds : `0${dateTime.seconds}`}{" "}
        {dateTime.hours >= 12 ? "PM" : "AM"}
      </div>
    </div>
  );
};
