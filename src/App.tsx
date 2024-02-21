import "./style/input.css";
import "./App.css";
import React, { useState, useEffect } from "react";
// components
import { MyContainer } from "./components";
export const TimeProvider: any = React.createContext("");
function App() {
  const [defaultMinutes, setDefaultMinutes] = useState<number>(25);
  const [minutes, setMinutes] = useState(defaultMinutes);
  const [defaultSec, setDefaultSec] = useState(0);
  const [sec, setSec]: any = useState(defaultSec);
  const [defaultBreakLength, setDefaultBreakLength] = useState(5);
  const [breakLength, setBreakLength] = useState<number>(defaultBreakLength);
  useEffect(() => {
    console.log("check render from app");
  }, [defaultBreakLength, defaultMinutes]);
  return (
    <>
      <TimeProvider.Provider
        value={{
          minutes,
          sec,
          defaultSec,
          defaultMinutes,
          defaultBreakLength,
          breakLength,
          setDefaultMinutes,
          setDefaultBreakLength,
          setBreakLength,
          setDefaultSec,
          setMinutes,
          setSec,
        }}
      >
        <MyContainer />
      </TimeProvider.Provider>
    </>
  );
}
export default App;
