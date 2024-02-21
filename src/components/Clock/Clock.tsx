import "./clock.css";
// assets
import play_logo from "/play-solid.svg";
import pause_logo from "/pause-solid.svg";
import restart_logo from "/arrows-rotate-solid.svg";

export default function Clock() {
  interface controls {
    img: string;
    ariaLabel: string;
    f: any;
  }
  let controls: controls[] = [
    { img: play_logo, ariaLabel: "start timer", f: "" },
    { img: pause_logo, ariaLabel: "pause timer", f: "" },
    { img: restart_logo, ariaLabel: "restart timer", f: "" },
  ];
  return (
    <>
      <article className="flex flex-col items-center space-y-[1rem] mt-[1rem]">
        <section className="text-center border-green-500 border-2 rounded-full p-3 w-[20rem]">
          <h1 className="text-[2rem]">Session</h1>
          <div className="text-[5rem]">25:00</div>
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
              />
            );
          })}
        </section>
      </article>
    </>
  );
}
