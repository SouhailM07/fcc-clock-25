import "./controlpanel.css";

import { useContext } from "react";
import { TimeProvider } from "../../App.js";
// assets
import arrowDown from "/arrow-down-solid.svg";
import arrowUp from "/arrow-up-solid.svg";

export default function ControlPanel() {
  const {
    defaultMinutes,
    defaultBreakLength,
    setDefaultMinutes,
    setDefaultBreakLength,
    setBreakLength,
    setMinutes,
  }: any = useContext(TimeProvider);
  return (
    <>
      <article className="flex w-[35rem] justify-between">
        <section className="flex flex-col items-center space-y-[1rem]">
          <h1 className="text-[2rem]">Break Length</h1>
          <div className="flex  items-center space-x-[2rem]">
            <img
              className="h-[3rem] w-[3rem]"
              src={arrowDown}
              alt="logo"
              role="button"
              aria-label="decrease break length"
              onClick={() => {
                if (defaultBreakLength > 1) {
                  setDefaultBreakLength(defaultBreakLength - 1);
                  setBreakLength(defaultBreakLength - 1);
                }
              }}
            />
            <span className="text-[2rem]">{defaultBreakLength}</span>
            <img
              className="h-[3rem] w-[3rem]"
              src={arrowUp}
              alt="logo"
              role="button"
              aria-label="increase break length"
              onClick={() => {
                setDefaultBreakLength(defaultBreakLength + 1);
                setBreakLength(defaultBreakLength + 1);
              }}
            />
          </div>
        </section>
        <section className="flex flex-col items-center space-y-[1rem]">
          <h1 className="text-[2rem]">Session Length</h1>
          <div className="flex  items-center space-x-[2rem]">
            <img
              className="h-[3rem] w-[3rem]"
              src={arrowDown}
              alt="logo"
              role="button"
              aria-label="decrease Session Length"
              onClick={() => {
                if (defaultMinutes > 1) {
                  setDefaultMinutes(defaultMinutes - 1);
                  setMinutes(defaultMinutes - 1);
                }
              }}
            />
            <span className="text-[2rem]">{defaultMinutes}</span>
            <img
              className="h-[3rem] w-[3rem]"
              src={arrowUp}
              alt="logo"
              role="button"
              aria-label="increase Session Length"
              onClick={() => {
                if (defaultMinutes > 0) {
                  setDefaultMinutes(defaultMinutes + 1);
                  setMinutes(defaultMinutes + 1);
                }
              }}
            />
          </div>
        </section>
      </article>
    </>
  );
}
