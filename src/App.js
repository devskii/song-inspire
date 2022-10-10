import { useState } from "react";

const KEYS = [
  { major: "A", minor: "F#m" },
  { major: "E", minor: "C#m" },
  { major: "B", minor: "G#m" },
  { major: "F#", minor: "D#m" },
  { major: "Db", minor: "Bbm" },
  { major: "Ab", minor: "Fm" },
  { major: "Eb", minor: "Cm" },
  { major: "Bb", minor: "Gm" },
  { major: "F", minor: "Dm" },
  { major: "C", minor: "Am" },
  { major: "G", minor: "Em" },
  { major: "D", minor: "Bm" },
];
const NO_KEY = null;
const NO_TEMPO = null;

function App() {
  const [isTempoChecked, setIsTempoChecked] = useState(false);
  const [isKeyChecked, setIsKeyChecked] = useState(false);

  const [tempo, setTempo] = useState(NO_TEMPO);
  const [key, setKey] = useState(NO_KEY);

  const toggleIsTempoChecked = () => setIsTempoChecked(!isTempoChecked);
  const toggleKeyChecked = () => setIsKeyChecked(!isKeyChecked);

  const isFormValid = isKeyChecked || isTempoChecked;

  const getRandomIntBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRandomTempo = () => {
    const MIN_TEMPO = 40;
    const MAX_TEMPO = 240;
    return getRandomIntBetween(MIN_TEMPO, MAX_TEMPO);
  };

  const getRandomKey = () => {
    const isMinor = getRandomIntBetween(0, 1) === 0;
    const index = getRandomIntBetween(0, 11);
    return isMinor ? KEYS[index].minor : KEYS[index].major;
  };

  const inspire = () => {
    setTempo(isTempoChecked ? getRandomTempo() : NO_TEMPO);
    setKey(isKeyChecked ? getRandomKey() : NO_KEY);
  };

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
        <div className="space-x-1">
          <input id="tempo" type="checkbox" onClick={toggleIsTempoChecked} />
          <label for="tempo">Tempo</label>
          <input id="key" type="checkbox" onClick={toggleKeyChecked} />
          <label for="key">Key</label>
        </div>
        <button
          disabled={!isFormValid}
          className="text-3xl shadow-lg rounded bg-purple-700 text-white enabled:hover:bg-purple-500 p-3 disabled:bg-slate-400"
          onClick={() => inspire()}
        >
          Inspire Me
        </button>
      </div>
      {!isFormValid && (
        <p className="text-sm text-red-700">
          Please select at least one constraint to continue!
        </p>
      )}
      {tempo && <p>Randomly Chosen Tempo: {tempo}</p>}
      {key && <p>Randomly Chosen Key: {key}</p>}
      {/* Consider adding legal disclaimer (fine print at the bottom) that we don't own any rights to the songs created */}
    </div>
  );
}

export default App;
