import React, { useState, Fragment } from "react";
import { createMap, setOrigin } from "./game/tiles";
import Container from "./container";

export default () => {
  const [columns, setColumns] = useState(6);
  const [lines, setLines] = useState(6);
  const [start, setStart] = useState(false);
  const [square, setSquare] = useState([]);
  const [color, setColor] = useState("");

  const startGame = () => {
    setStart(true);
    setSquare(createMap(columns, lines));
  };

  return (
    <Container>
      <div class="field is-grouped">
        <p class="control">
          <input
            class="input"
            value={columns}
            onChange={e => setColumns(e.target.value)}
            type="text"
            placeholder="Columns"
          />
          <p class="help">Number of columns</p>
        </p>

        <p class="control">
          <input
            class="input"
            value={lines}
            onChange={e => setLines(e.target.value)}
            type="text"
            placeholder="Lines"
          />
          <p class="help">Number of lines</p>
        </p>
        <p class="control">
          <button onClick={startGame} class="button is-info">
            {start ? "Restart" : "Start"}
          </button>
        </p>
      </div>
      {start && (
        <Fragment>
          <table className="game">
            <tbody>
              {square.map(l => (
                <tr>
                  {l.map(c => (
                    <td className={c.color + (c.origin ? " origin" : "")}>
                      <div>{c.color}</div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div class="field is-grouped">
            <p class="control">
              <input
                class="input"
                value={color}
                onChange={e => setColor(e.target.value)}
                type="text"
                placeholder="Columns"
              />
              <p class="help">Inform the next color</p>
            </p>
            <p class="control">
              <button
                onClick={() => {
                  var x = setOrigin(square, color);
                  setSquare(x);
                }}
                class="button is-info"
              >
                Apply
              </button>
            </p>
          </div>
        </Fragment>
      )}
    </Container>
  );
};
