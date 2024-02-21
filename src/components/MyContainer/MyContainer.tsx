import "./mycontainer.css";
// components
import { ControlPanel, Clock } from "../../components";
export default function MyContainer() {
  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
        <h1 className="text-[3rem]">25 + 5 Clock</h1>
        <ControlPanel />
        <Clock />
      </main>
    </>
  );
}
