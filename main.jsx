import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Bug,
  Calculator,
  Droplets,
  Egg,
  Fish,
  FlaskConical,
  HeartPulse,
  Leaf,
  Mail,
  ShieldCheck,
  Sparkles,
  ThermometerSnowflake,
  Wand2,
  Waves,
} from "lucide-react";
import "./index.css";

const calculatorCards = [
  "Tank Volume",
  "Substrate Depth",
  "Water Weight",
  "Water Change",
  "Heater Size",
  "PVC Tunnel Planner",
];

const guideCards = [
  {
    title: "Tank Cycling Guides",
    description:
      "Fishless cycling, beginner cycling, shrimp cycling, axolotl cycling, water testing, and safe livestock timing.",
    icon: FlaskConical,
  },
  {
    title: "Pest & Planaria Guides",
    description:
      "Planaria, hydra, detritus worms, algae outbreaks, bacterial blooms, and shrimp-safe treatment notes.",
    icon: Bug,
  },
  {
    title: "Axolotl Care Tools",
    description:
      "Cold-water alerts, feeding schedules, morph profiles, fungus tracking, floating logs, and healing photo journals.",
    icon: HeartPulse,
  },
  {
    title: "Aquascape Planning",
    description:
      "Plan hides, PVC tunnels, driftwood, plants, caves, substrate slopes, and territory zones for oddball setups.",
    icon: Leaf,
  },
];

const creatures = ["Axolotls", "Fire Eels", "Shrimp", "Puffers", "Planted Tanks", "Oddball Fish"];

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-cyan-300/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full justify-center px-4 py-2">
        <a href="#home" className="flex flex-col items-center justify-center text-center">
          <img
            src="/oddwater-logo.png"
            alt="Oddwater logo"
            className="block h-auto max-h-[72px] w-auto max-w-[190px] object-contain drop-shadow-[0_0_18px_rgba(34,211,238,.75)]"
          />
          <h1 className="mt-1 text-xl font-black leading-none text-cyan-300 neon-text">
            Oddwater
          </h1>
        </a>
      </div>
    </header>
  );
}

function BubbleField() {
  const bubbles = Array.from({ length: 18 }, (_, i) => ({
    left: `${(i * 17) % 100}%`,
    size: `${8 + (i % 5) * 7}px`,
    duration: `${9 + (i % 6) * 2}s`,
    delay: `${(i % 9) * -1.3}s`,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((bubble, index) => (
        <span
          key={index}
          className="bubble"
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            animationDuration: bubble.duration,
            animationDelay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
}

function MiniAppCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-cyan-300/15 bg-cyan-300/5 p-4">
      <Icon className="h-7 w-7 text-cyan-300" />
      <p className="mt-3 font-bold text-white">{title}</p>
      <p className="text-xs text-slate-300">{text}</p>
    </div>
  );
}

function AppPreview() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute inset-8 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="floaty relative rounded-[2.5rem] border border-cyan-300/25 bg-black p-3 shadow-[0_0_70px_rgba(34,211,238,.25)]">
        <div className="overflow-hidden rounded-[2rem] bg-[#03111f]">
          <div className="relative min-h-[560px] bg-[radial-gradient(circle_at_top,#155e75,#020617_45%,#000)] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-100">Welcome back</p>
                <h3 className="text-3xl font-black text-cyan-300 neon-text">Oddwater</h3>
              </div>
              <Wand2 className="h-8 w-8 text-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,.9)]" />
            </div>

            <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-black/35 p-5 shadow-aqua backdrop-blur">
              <p className="text-sm text-cyan-100">Main Tank</p>
              <h4 className="mt-1 text-2xl font-black text-white">Fire Eel Sanctuary</h4>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-cyan-50">
                <span className="rounded-2xl bg-cyan-300/10 p-3">125 gal</span>
                <span className="rounded-2xl bg-cyan-300/10 p-3">78°F</span>
                <span className="rounded-2xl bg-cyan-300/10 p-3">pH 7.2</span>
              </div>
              <div className="mt-5 h-3 rounded-full bg-cyan-950">
                <div className="h-3 w-[92%] rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,.9)]" />
              </div>
              <div className="mt-3 flex justify-between text-xs">
                <span className="text-lime-300">All Systems Normal</span>
                <span className="text-cyan-100">Health 92%</span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <MiniAppCard icon={Calculator} title="Calculators" text="Volume + substrate" />
              <MiniAppCard icon={Bug} title="Pest Guides" text="Planaria + hydra" />
              <MiniAppCard icon={ThermometerSnowflake} title="Axolotls" text="Cold-water alerts" />
              <MiniAppCard icon={Waves} title="Cycling" text="Track your cycle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pt-40">
      <BubbleField />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,.22),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,.16),transparent_30%)]" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 py-14 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-aqua">
            <Sparkles className="h-4 w-4" />
            Neon aquatic care is coming
          </div>

          <h2 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-7xl">
            <span className="text-cyan-300 neon-text">Track every tank.</span>
            <br />
            Care for every creature.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Oddwater is an aquatic ecosystem app and website for aquariums, axolotls,
            shrimp, eels, puffers, oddball fish, planted tanks, cycling guides, pest
            problems, and glowing habitat planning.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#beta" className="rounded-2xl bg-cyan-300 px-8 py-4 text-lg font-black text-slate-950 shadow-[0_0_35px_rgba(34,211,238,.6)] transition hover:scale-105">
              Join Beta
            </a>
            <a href="#calculators" className="rounded-2xl border border-cyan-300/35 bg-cyan-300/10 px-8 py-4 text-lg font-black text-cyan-100 transition hover:bg-cyan-300/20">
              Explore Tools
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-cyan-100">
            <span>✓ Tank calculators</span>
            <span>✓ Cycling help</span>
            <span>✓ Planaria guides</span>
            <span>✓ Axolotl support</span>
          </div>
        </div>

        <AppPreview />
      </div>
    </section>
  );
}

function NumberInput({ label, value, setValue }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-cyan-100">{label}</span>
      <input
        type="number"
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        className="mt-2 w-full rounded-2xl border border-cyan-300/20 bg-black/35 px-4 py-3 text-white outline-none focus:border-cyan-300"
      />
    </label>
  );
}

function ResultCard({ label, value }) {
  return (
    <div className="rounded-3xl border border-cyan-300/15 bg-black/35 p-6 text-center">
      <p className="text-4xl font-black text-cyan-300 neon-text">{value}</p>
      <p className="mt-2 text-sm font-bold text-cyan-100">{label}</p>
    </div>
  );
}

function LiveCalculator() {
  const [length, setLength] = useState(48);
  const [width, setWidth] = useState(18);
  const [height, setHeight] = useState(21);
  const [depth, setDepth] = useState(2);

  const gallons = useMemo(() => ((length * width * height) / 231).toFixed(1), [length, width, height]);
  const waterWeight = useMemo(() => (Number(gallons) * 8.34).toFixed(0), [gallons]);
  const substrate = useMemo(() => (((length * width * depth) / 1728) * 100).toFixed(0), [length, width, depth]);

  return (
    <div className="mt-12 rounded-[2rem] border border-cyan-300/15 bg-cyan-300/5 p-6 shadow-aqua">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Working Demo</p>
          <h3 className="mt-3 text-3xl font-black text-white">Tank Size + Substrate Calculator</h3>
          <p className="mt-4 text-slate-300">Enter tank dimensions and substrate depth to estimate gallons, water weight, and substrate pounds.</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <NumberInput label="Length inches" value={length} setValue={setLength} />
            <NumberInput label="Width inches" value={width} setValue={setWidth} />
            <NumberInput label="Height inches" value={height} setValue={setHeight} />
            <NumberInput label="Substrate depth" value={depth} setValue={setDepth} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <ResultCard label="Gallons" value={gallons} />
          <ResultCard label="Water Weight lbs" value={waterWeight} />
          <ResultCard label="Substrate lbs" value={substrate} />
        </div>
      </div>
    </div>
  );
}

function CalculatorHub() {
  return (
    <section id="calculators" className="relative px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-200">Free Tools</p>
          <h2 className="mt-3 text-4xl font-black text-white sm:text-6xl">Aquarium calculators that do the hard math for you.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">Plan tanks, substrate, water weight, water changes, heater sizing, and PVC tunnel layouts without guessing.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {calculatorCards.map((item) => (
            <div key={item} className="glass-card rounded-3xl p-7 transition hover:-translate-y-1 hover:border-cyan-300/35">
              <Calculator className="h-10 w-10 text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,.8)]" />
              <h3 className="mt-5 text-2xl font-black text-cyan-100">{item}</h3>
              <p className="mt-3 text-slate-300">A fast, visual, mobile-friendly calculator for aquarium planning and setup decisions.</p>
            </div>
          ))}
        </div>

        <LiveCalculator />
      </div>
    </section>
  );
}

function Guides() {
  return (
    <section id="guides" className="relative px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] border border-cyan-300/10 bg-cyan-300/5 p-6 shadow-aqua sm:p-10">
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-200">Care Guides</p>
            <h2 className="mt-3 text-4xl font-black text-white sm:text-6xl">Built for the moments when something goes wrong.</h2>
            <p className="mt-5 max-w-3xl text-lg text-slate-300">
              Cycling crashes, planaria in shrimp tanks, axolotl temperature stress,
              algae outbreaks, bacterial blooms — Oddwater is designed to help keepers
              understand what is happening and what to do next.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {guideCards.map((guide) => (
              <div key={guide.title} className="rounded-3xl border border-cyan-300/10 bg-black/30 p-7">
                <guide.icon className="h-10 w-10 text-cyan-300" />
                <h3 className="mt-5 text-2xl font-black text-cyan-100">{guide.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{guide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CyclingSection() {
  return (
    <section className="relative px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <div className="glass-card rounded-[2rem] p-8">
          <FlaskConical className="h-12 w-12 text-cyan-300" />
          <h2 className="mt-5 text-4xl font-black text-white">Tank Cycling Wizard</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Guided cycling help for freshwater tanks, shrimp tanks, planted tanks,
            axolotl habitats, and oddball setups. Track ammonia, nitrite, nitrate,
            pH, temperature, and cycle progress.
          </p>
          <div className="mt-6 space-y-3 text-cyan-100">
            <p>✓ Fishless cycling walkthroughs</p>
            <p>✓ “Is my tank ready?” checks</p>
            <p>✓ Beginner-friendly nitrogen cycle explanations</p>
            <p>✓ Bacterial bloom help</p>
          </div>
        </div>

        <div className="glass-card rounded-[2rem] p-8">
          <Bug className="h-12 w-12 text-cyan-300" />
          <h2 className="mt-5 text-4xl font-black text-white">Pest & Planaria Help</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Aquarium pest guides for shrimp-safe decision making, especially planaria,
            hydra, detritus worms, leeches, algae, and treatment safety.
          </p>
          <div className="mt-6 space-y-3 text-cyan-100">
            <p>✓ Planaria ID support</p>
            <p>✓ Shrimp-safe treatment warnings</p>
            <p>✓ Snail safety notes</p>
            <p>✓ Feeding and cleanup prevention tips</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CreatureSection() {
  return (
    <section id="creatures" className="relative px-5 py-24">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-200">Creature-Focused</p>
        <h2 className="mt-3 text-4xl font-black text-white sm:text-6xl">More than a fish tracker.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
          Oddwater is designed for real aquatic hobbyists with real setups — from
          planted shrimp tanks to axolotl habitats and hidden eel tunnel systems.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {creatures.map((creature, index) => {
            const icons = [Egg, Fish, Droplets, ShieldCheck, Leaf, Waves];
            const Icon = icons[index];
            return (
              <div key={creature} className="glass-card rounded-3xl p-5">
                <Icon className="mx-auto h-9 w-9 text-cyan-300" />
                <p className="mt-4 font-black text-cyan-100">{creature}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Beta() {
  return (
    <section id="beta" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-cyan-300/15 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.16),rgba(2,8,23,.8)_45%)] p-8 text-center shadow-[0_0_70px_rgba(34,211,238,.16)] sm:p-14">
        <Mail className="mx-auto h-12 w-12 text-cyan-300" />
        <h2 className="mt-5 text-4xl font-black text-white sm:text-6xl">Join the Oddwater beta</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Early testers will help shape calculators, cycling guides, pest guides,
          axolotl tracking, aquascape tools, and the first mobile app experience.
        </p>

        <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
          <input type="email" placeholder="Your email address" className="min-h-14 flex-1 rounded-2xl border border-cyan-300/20 bg-black/35 px-5 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300" />
          <button className="min-h-14 rounded-2xl bg-cyan-300 px-7 font-black text-slate-950 shadow-[0_0_30px_rgba(34,211,238,.55)] hover:bg-cyan-200">
            Get Early Access
          </button>
        </form>

        <p className="mt-4 text-sm text-slate-400">
          Signup is a visual placeholder for now. Connect this later to Formspree,
          ConvertKit, Mailchimp, Firebase, Supabase, or a Vercel function.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-cyan-300/10 px-5 py-10 text-center text-sm text-slate-400">
      <div className="mx-auto max-w-7xl">
        <p className="font-semibold text-cyan-100">Oddwater</p>
        <p className="mt-2">
          Designed for aquariums, axolotls, eels, shrimp, planted tanks, oddballs,
          cycling guides, pest guides, and aquatic care tools.
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020817] pt-28 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,#07598566,transparent_34%),linear-gradient(180deg,transparent,#020817)]" />
      <Header />
      <Hero />
      <CalculatorHub />
      <Guides />
      <CyclingSection />
      <CreatureSection />
      <Beta />
      <Footer />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
