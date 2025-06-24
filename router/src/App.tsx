import dayjs from "dayjs";
import "./App.css";

import isLeapYear from "dayjs/plugin/isLeapYear";
import calendar from "dayjs/plugin/calendar";
import dayOfYear from "dayjs/plugin/dayOfYear";
import { useRef, useState } from "react";

function App() {
  dayjs.extend(calendar);
  dayjs.extend(isLeapYear);
  dayjs.extend(dayOfYear);
  const today = useRef(dayjs().year());

  const [year, setYear] = useState<number>(today.current);
  function handlePrevious() {
    setYear((prev) => prev - 1);
  }
  function handleNext() {
    setYear((prev) => prev + 1);
  }
  const totalDay =
    year === today.current
      ? dayjs().dayOfYear()
      : year < today.current
      ? 366
      : 0;
  console.log(today.current);
  console.log(totalDay);
  return (
    <div>
      <div
        style={{
          border: "1px solid red",
          height: "400px",
          width: "400px",
          display: "flex",
          flexWrap: "wrap",
          margin: "1px",
        }}
      >
        {Array.from({ length: 365 }, (_, index) => (
          <div
            style={{
              height: "10px",
              width: "10px",
              borderRadius: "50%",
              backgroundColor: index + 1 <= totalDay ? "black" : "red",
              margin: "1px",
            }}
            key={index}
          ></div>
        ))}
      </div>
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
