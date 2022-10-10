function App() {
  return (
    <div>
      <h1>SongInspire</h1>
      <p>
        Need help getting inspired in your songwriting? Ever look at the blank
        piece of paper in front of you and not know where to start?
      </p>
      <p>
        Here at SongInspire, we believe the best way to spark inspiration is to
        introduce constraints on your creative endeavor. You're giving yourself
        guardrails, carving out a space from which to create.
      </p>
      <p>
        Use this app to select any number of constraints. Give yourself a fun
        challenge; give yourself somewhere to start. Then write your song with
        that constraint applied! For example, you could say, "All right, I'm
        going to write a song at 120bpm."
      </p>
      <p>
        All selections are random, so there's a ton of variety you can harness
        in your creative endeavors!
      </p>
      <h2>Select your constraint(s):</h2>
      <div>
        <label for="tempo">Tempo</label>
        <input id="tempo" type="checkbox" />
        <label for="key">Key</label>
        <input id="key" type="checkbox" />
      </div>
      <button>Inspire Me</button>
      {/* Consider adding legal disclaimer (fine print at the bottom) that we don't own any rights to the songs created */}
    </div>
  );
}

export default App;
