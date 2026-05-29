import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Calculator,
  Droplets,
  Fish,
  Flame,
  Leaf,
  Ruler,
  Thermometer,
  Waves,
} from "lucide-react";
import "./index.css";

function Card({ children, className = "" }) {
  return <div className={`glass-card rounded-[2rem] p-6 ${className}`}>{children}</div>;
}

function NumberField({ label, value, setValue }) {
  return (
    <label>
      <span className="text-sm font-bold text-cyan-100">{label}</span>
      <input
        type="number"
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        className="mt-2 w-full rounded-2xl border border-cyan-300/20 bg-black/35 px-4 py-3 text-white outline-none focus:border-cyan-300"
      />
    </label>
  );
}

function ResultBox({ label, value }) {
  return (
    <div className="rounded-2xl bg-cyan-300/10 p-4 text-center">
      <p className="text-2xl font-black text-cyan-200 neon-text">{value}</p>
      <p className="text-xs font-bold text-cyan-100">{label}</p>
    </div>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-300/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/oddwater-logo.png"
            alt="Oddwater logo"
            className="h-16 w-16 object-contain drop-shadow-[0_0_18px_rgba(34,211,238,.75)]"
          />
          <div>
            <h1 className="text-2xl font-black text-cyan-300 neon-text">Oddwater</h1>
            <p className="text-xs font-semibold text-cyan-100">Aquatic ecosystem tools</p>
          </div>
        </a>

        <nav className="hidden gap-5 text-sm font-bold text-cyan-100 sm:flex">
          <a href="#calculators">Calculators</a>
          <a href="#guides">Guides</a>
          <a href="#beta">Beta</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,.22),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,.18),transparent_28%)]" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
            Neon aquarium care tools
          </div>

          <h2 className="text-5xl font-black leading-tight text-white sm:text-7xl">
            <span className="text-cyan-300 neon-text">Oddwater</span>
            <br />
            Track every tank.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Aquarium calculators, cycling help, pest and planaria guides, axolotl support,
            and oddball tank planning for real aquatic keepers.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#calculators" className="rounded-2xl bg-cyan-300 px-7 py-4 font-black text-slate-950 shadow-aqua">
              Use Calculators
            </a>
            <a href="#beta" className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-7 py-4 font-black text-cyan-100">
              Join Beta
            </a>
          </div>
        </div>

        <Card>
          <div className="text-center">
            <img
              src="/oddwater-logo.png"
              alt="Oddwater logo"
              className="mx-auto h-52 w-52 object-contain drop-shadow-[0_0_30px_rgba(34,211,238,.75)]"
            />
            <h3 className="mt-4 text-3xl font-black text-cyan-300 neon-text">
              Aquatic care, but magical.
            </h3>
            <p className="mt-3 text-slate-300">
              Built for planted tanks, shrimp, axolotls, fire eels, puffers, and oddballs.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

function CalculatorHub() {
  const [active, setActive] = useState("tank");

  const tabs = [
    ["tank", "Tank Size"],
    ["water", "Water Change"],
    ["heater", "Heater"],
    ["pvc", "PVC Tunnel"],
    ["stocking", "Stocking"],
  ];

  return (
    <section id="calculators" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-200">
            Working Calculators
          </p>
          <h2 className="mt-3 text-4xl font-black text-white sm:text-6xl">
            Aquarium math made easy.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
            These calculators are live and update instantly.
          </p>
        </div>

        <Card className="mb-6">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {tabs.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`rounded-2xl px-4 py-3 font-black ${
                  active === key
                    ? "bg-cyan-300 text-slate-950"
                    : "bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/20"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Card>

        {active === "tank" && <TankCalculator />}
        {active === "water" && <WaterChangeCalculator />}
        {active === "heater" && <HeaterCalculator />}
        {active === "pvc" && <PvcCalculator />}
        {active === "stocking" && <StockingCalculator />}
      </div>
    </section>
  );
}

function TankCalculator() {
  const [length, setLength] = useState(72);
  const [width, setWidth] = useState(18);
  const [height, setHeight] = useState(22);
  const [depth, setDepth] = useState(3);

  const gallons = ((length * width * height) / 231).toFixed(1);
  const waterWeight = (Number(gallons) * 8.34).toFixed(0);
  const substrate = (((length * width * depth) / 1728) * 100).toFixed(0);

  return (
    <Card>
      <div className="mb-6 flex items-center gap-3">
        <Ruler className="h-9 w-9 text-cyan-300" />
        <div>
          <h3 className="text-3xl font-black text-white">Tank Size + Substrate</h3>
          <p className="text-slate-300">Estimate gallons, water weight, and substrate pounds.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Length in" value={length} setValue={setLength} />
        <NumberField label="Width in" value={width} setValue={setWidth} />
        <NumberField label="Height in" value={height} setValue={setHeight} />
        <NumberField label="Substrate depth in" value={depth} setValue={setDepth} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultBox label="Gallons" value={gallons} />
        <ResultBox label="Water Weight lbs" value={waterWeight} />
        <ResultBox label="Substrate lbs" value={substrate} />
      </div>
    </Card>
  );
}

function WaterChangeCalculator() {
  const [gallons, setGallons] = useState(40);
  const [currentNitrate, setCurrentNitrate] = useState(40);
  const [targetNitrate, setTargetNitrate] = useState(20);

  const percent =
    currentNitrate <= 0
      ? 0
      : Math.max(0, Math.min(100, (1 - targetNitrate / currentNitrate) * 100)).toFixed(0);

  const gallonsOut = ((gallons * percent) / 100).toFixed(1);

  return (
    <Card>
      <div className="mb-6 flex items-center gap-3">
        <Droplets className="h-9 w-9 text-cyan-300" />
        <div>
          <h3 className="text-3xl font-black text-white">Water Change Calculator</h3>
          <p className="text-slate-300">Estimate water change needed to reduce nitrate.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Tank gallons" value={gallons} setValue={setGallons} />
        <NumberField label="Current nitrate ppm" value={currentNitrate} setValue={setCurrentNitrate} />
        <NumberField label="Target nitrate ppm" value={targetNitrate} setValue={setTargetNitrate} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultBox label="Water Change %" value={`${percent}%`} />
        <ResultBox label="Gallons to Change" value={gallonsOut} />
      </div>
    </Card>
  );
}

function HeaterCalculator() {
  const [gallons, setGallons] = useState(40);
  const [roomTemp, setRoomTemp] = useState(68);
  const [targetTemp, setTargetTemp] = useState(78);

  const tempRise = Math.max(0, targetTemp - roomTemp);
  const watts = Math.ceil(gallons * tempRise * 3);

  return (
    <Card>
      <div className="mb-6 flex items-center gap-3">
        <Thermometer className="h-9 w-9 text-cyan-300" />
        <div>
          <h3 className="text-3xl font-black text-white">Heater Size Helper</h3>
          <p className="text-slate-300">Rough wattage estimate. Always verify heater safety.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Tank gallons" value={gallons} setValue={setGallons} />
        <NumberField label="Room temp °F" value={roomTemp} setValue={setRoomTemp} />
        <NumberField label="Target temp °F" value={targetTemp} setValue={setTargetTemp} />
      </div>

      <div className="mt-6">
        <ResultBox label="Estimated watts" value={watts} />
      </div>
    </Card>
  );
}

function PvcCalculator() {
  const [pipeLength, setPipeLength] = useState(48);
  const [runs, setRuns] = useState(2);
  const [diameter, setDiameter] = useState(3);
  const [elbows, setElbows] = useState(4);

  const totalPipe = pipeLength * runs;

  return (
    <Card>
      <div className="mb-6 flex items-center gap-3">
        <Waves className="h-9 w-9 text-cyan-300" />
        <div>
          <h3 className="text-3xl font-black text-white">PVC Tunnel Planner</h3>
          <p className="text-slate-300">Plan eel and oddball hiding tunnel layouts.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Pipe length per run in" value={pipeLength} setValue={setPipeLength} />
        <NumberField label="Number of runs" value={runs} setValue={setRuns} />
        <NumberField label="Pipe diameter in" value={diameter} setValue={setDiameter} />
        <NumberField label="Elbows/fittings" value={elbows} setValue={setElbows} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultBox label="Total Pipe Inches" value={totalPipe} />
        <ResultBox label="Pipe Diameter" value={`${diameter} in`} />
        <ResultBox label="Fittings" value={elbows} />
      </div>

      <p className="mt-5 rounded-2xl bg-cyan-300/10 p-4 text-sm font-semibold text-cyan-100">
        Tip: sand all cut edges smooth, leave multiple exits, and avoid trapping fish.
      </p>
    </Card>
  );
}

function StockingCalculator() {
  const [gallons, setGallons] = useState(40);
  const [smallFish, setSmallFish] = useState(8);
  const [heavyFish, setHeavyFish] = useState(2);

  const score = Math.max(
    0,
    Math.min(100, 100 - ((smallFish * 3 + heavyFish * 10) / (gallons || 1)) * 20)
  ).toFixed(0);

  const status =
    score > 75 ? "Light/Moderate" : score > 45 ? "Watch bioload" : "High bioload risk";

  return (
    <Card>
      <div className="mb-6 flex items-center gap-3">
        <Fish className="h-9 w-9 text-cyan-300" />
        <div>
          <h3 className="text-3xl font-black text-white">Simple Stocking Estimator</h3>
          <p className="text-slate-300">A rough bioload helper, not species compatibility advice.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Tank gallons" value={gallons} setValue={setGallons} />
        <NumberField label="Small fish count" value={smallFish} setValue={setSmallFish} />
        <NumberField label="Heavy bioload fish" value={heavyFish} setValue={setHeavyFish} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultBox label="Stocking Score" value={`${score}%`} />
        <ResultBox label="Status" value={status} />
      </div>
    </Card>
  );
}

function Guides() {
  const items = [
    ["Cycling Guides", "Fishless cycling, ammonia, nitrite, nitrate, and safe livestock timing.", Leaf],
    ["Pest Guides", "Planaria, hydra, detritus worms, shrimp-safe warnings, and prevention.", Fish],
    ["Axolotl Support", "Cold-water care, temperature alerts, feeding notes, and health tracking ideas.", Flame],
  ];

  return (
    <section id="guides" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-4xl font-black text-white sm:text-6xl">
          Care guides coming into focus.
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map(([title, text, Icon]) => (
            <Card key={title}>
              <Icon className="h-10 w-10 text-cyan-300" />
              <h3 className="mt-4 text-2xl font-black text-cyan-100">{title}</h3>
              <p className="mt-3 text-slate-300">{text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Beta() {
  return (
    <section id="beta" className="px-5 py-24">
      <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-cyan-300/15 bg-cyan-300/5 p-10 text-center shadow-aqua">
        <h2 className="text-4xl font-black text-white sm:text-6xl">Join the Oddwater beta</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
          The app beta will support saved tanks, water logs, health scoring, and future reminders.
        </p>
        <input
          placeholder="Email address"
          className="mt-8 w-full max-w-md rounded-2xl border border-cyan-300/20 bg-black/35 px-5 py-4 text-white outline-none"
        />
        <p className="mt-3 text-sm text-slate-400">Signup form is visual for now.</p>
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020817] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,#07598566,transparent_34%),linear-gradient(180deg,transparent,#020817)]" />
      <div className="relative z-10">
        <Header />
        <Hero />
        <CalculatorHub />
        <Guides />
        <Beta />
        <footer className="border-t border-cyan-300/10 px-5 py-10 text-center text-sm text-slate-400">
          <p className="font-bold text-cyan-100">Oddwater Aquatics</p>
          <p className="mt-2">Aquarium tools, care guides, and oddball aquatic planning.</p>
        </footer>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
