import { useState } from "react";
import First from "./First";

function App() {
  const [item, setItem] = useState("");
  const [value, setValue] = useState("");
  const [name, setName] = useState(["Tamil", "English", "Telugu", "Malayalam"]);

  const arr = ["this is from first component", "this is form second component"];

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <br />
      {item}
      <br />
      <button onClick={() => setValue(item)}>get data</button>
      <br />
      {value}
      <First name={name} arr={arr} setName={setName} />
    </div>
  );
}

export default App;
