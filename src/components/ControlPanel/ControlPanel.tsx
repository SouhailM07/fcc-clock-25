import "./controlpanel.css";
// assets
import arrowDown from "/arrow-down-solid.svg";
import arrowUp from "/arrow-up-solid.svg";

export default function ControlPanel() {
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
            />
            <span className="text-[2rem]">5</span>
            <img
              className="h-[3rem] w-[3rem]"
              src={arrowUp}
              alt="logo"
              role="button"
              aria-label="increase break length"
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
            />
            <span className="text-[2rem]">25</span>
            <img
              className="h-[3rem] w-[3rem]"
              src={arrowUp}
              alt="logo"
              role="button"
              aria-label="increase Session Length"
            />
          </div>
        </section>
      </article>
    </>
  );
}
