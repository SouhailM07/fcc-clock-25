import "./mycontainer.css";
// components
import { ControlPanel, Clock } from "../../components";
export default function MyContainer() {
  return (
    <>
      <main className="flex flex-col justify-center space-y-[3rem] items-center min-h-screen bg-black text-white">
        <h1 className="text-[3rem] font-medium">25 + 5 Clock</h1>
        <ControlPanel />
        <Clock />
      </main>
    </>
  );
}
