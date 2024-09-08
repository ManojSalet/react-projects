import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("aqua");
  return (
    <>
      <div
        className="body align-content-end"
        style={{ backgroundColor: color }}
      >
        <div className="Demo d-flex flex-wrap justify-content-center flex-wrap mb-3 rounded-1 h-auto">
          <div className="d-flex flex-wrap justify-content-around gap-3  bg-light rounded-3 p-2 ">
            <button
              className="p-2 rounded-1 border-0 text-white"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="p-2 rounded-1 border-0 text-white"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="p-2 rounded-1 border-0 text-white"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >
              Black
            </button>
            <button
              className="p-2 rounded-1 border-0 text-white"
              style={{ backgroundColor: "aqua" }}
              onClick={() => setColor("aqua")}
            >
              Aqua
            </button>
            <button
              className="p-2 rounded-1 border-0 text-white"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="p-2 rounded-1 border-0 text-white"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
