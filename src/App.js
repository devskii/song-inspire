import { useState } from "react";

function App() {
  const [randomizeTempo, setRandomizeTempo] = useState(false);
  const [randomizeKey, setRandomizeKey] = useState(false);

  const areAnyCheckboxesSelected = randomizeKey || randomizeTempo;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl">Welcome to SongInspire</h1>
      <br />
      <section className="text-center w-2/5 space-y-4">
        <p>
          Need help getting inspired in your songwriting? Ever look at the blank
          piece of paper in front of you and not know where to start?
        </p>
        <p>
          Here at SongInspire, we believe the best way to spark inspiration is
          to introduce constraints on your creative endeavor. You're giving
          yourself guardrails, carving out a space from which to create.
        </p>
        <p>
          Use this app to select any number of constraints. Give yourself a fun
          challenge; give yourself somewhere to start. Then, simply write your
          song with that constraint applied! For example, you could say, "All
          right, I'm going to write a song at 120bpm."
        </p>
        <p>
          All selections are random, so there's a ton of variety you can harness
          in your creative endeavors!
        </p>
      </section>
      <br />
      <h2 className="text-xl">Select your constraint(s):</h2>
      <div>
        <div>
          <label for="tempo">Tempo</label>
          <input
            id="tempo"
            type="checkbox"
            onClick={() => setRandomizeTempo(!randomizeTempo)}
          />
          <label for="key">Key</label>
          <input
            id="key"
            type="checkbox"
            onClick={() => setRandomizeKey(!randomizeKey)}
          />
        </div>
        <button
          disabled={!areAnyCheckboxesSelected}
          className="text-3xl shadow-lg rounded bg-purple-700 text-white enabled:hover:bg-purple-500 p-3 disabled:bg-slate-400"
        >
          Inspire Me
        </button>
      </div>
      {!areAnyCheckboxesSelected && (
        <p className="text-sm text-red-700">
          Please select at least one constraint to continue!
        </p>
      )}
      {/* Consider adding legal disclaimer (fine print at the bottom) that we don't own any rights to the songs created */}
    </div>
  );
}

export default App;
