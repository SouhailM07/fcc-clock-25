import "./clock.css";
// assets
import play_logo from "/play-solid.svg";
import pause_logo from "/pause-solid.svg";
import restart_logo from "/arrows-rotate-solid.svg";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { TimeProvider } from "../../App.js";
import audioFile from "../../sounds/analog-timer-74998.mp3";

export default function Clock() {
  const {
    minutes,
    sec,
    defaultSec,
    defaultMinutes,
    defaultBreakLength,
    breakLength,
    setBreakLength,
    setMinutes,
    setSec,
  }: any = useContext(TimeProvider);
  const [timerRunning, setTimerRunning] = useState(false);
  const [toggleTime, setToggleTime] = useState(false);
  const arrOfTime: number[] = [minutes, breakLength];
  if ((minutes == 0 && sec == 14) || (breakLength == 0 && sec == 14)) {
    let audio = document.querySelector("audio") as HTMLAudioElement;
    audio.play();
  }
  useEffect(() => {
    let timer;
    if (timerRunning) {
      timer = setInterval(() => {
        if (breakLength == 0 && sec == 0) {
          // clearInterval(timer);
          // alert("Timer has finished!");
          setMinutes(defaultMinutes);
          setSec(defaultSec);
          setBreakLength(defaultBreakLength);
          setToggleTime(false);
        } else if (minutes == 0 && sec === 0) {
          // Timer completion logic, e.g., display a message
          setToggleTime(true);
          if (sec === 0) {
            // setMinutes(minutes - 1);
            setBreakLength(breakLength - 1);
            setSec(59);
          } else {
            setSec(sec - 1);
          }
        } else {
          if (sec === 0) {
            setMinutes(minutes - 1);
            setSec(59);
          } else {
            setSec(sec - 1);
          }
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [
    minutes,
    sec,
    timerRunning,
    defaultMinutes,
    defaultBreakLength,
    toggleTime,
  ]);
  const startTimer = () => {
    setTimerRunning(true);
  };
  const stopTimer = () => {
    setTimerRunning(false);
    let audio = document.querySelector("audio") as HTMLAudioElement;
    audio.pause();
  };
  const handleReset = () => {
    let audio = document.querySelector("audio") as HTMLAudioElement;
    audio.pause();
    setTimerRunning(false);
    setMinutes(defaultMinutes);
    setSec(defaultSec);
    setBreakLength(defaultBreakLength);
    setToggleTime(false);
  };
  interface controls {
    img: string;
    ariaLabel: string;
    f: any;
  }
  let controls: controls[] = [
    { img: play_logo, ariaLabel: "start timer", f: () => startTimer() },
    { img: pause_logo, ariaLabel: "pause timer", f: () => stopTimer() },
    { img: restart_logo, ariaLabel: "restart timer", f: () => handleReset() },
  ];
  return (
    <>
      <article className="flex flex-col items-center space-y-[1rem] mt-[1rem]">
        <audio className="hidden" controls src={audioFile}></audio>
        <section
          className={`${
            toggleTime ? "border-red-500" : "border-green-500"
          } text-center border-4 rounded-full p-3 w-[20rem] ${
            minutes == 0 && !toggleTime ? "text-red-500" : ""
          }`}
        >
          <h1 className="text-[2rem]">Session</h1>
          <div className="text-[5rem]">
            {arrOfTime[+toggleTime].toString().length > 1
              ? arrOfTime[+toggleTime]
              : "0" + arrOfTime[+toggleTime]}
            :{sec.toString().length > 1 ? sec : "0" + sec}
          </div>
        </section>
        <section className="flex space-x-[1rem]">
          {controls.map((e, i) => {
            return (
              <img
                key={i}
                src={e.img}
                aria-label={e.ariaLabel}
                role="button"
                alt="logo"
                className="h-[4rem] w-[4rem]"
                onClick={() => e.f()}
              />
            );
          })}
        </section>
      </article>
    </>
  );
}
