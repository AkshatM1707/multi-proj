import { useState } from "react";
import data from "./data";
import "./files.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null); // for single selection
  const [multiple, setMultiple] = useState(false); // mode toggle
  const [multiSelected, setMultiSelected] = useState([]); // for multi selection

  // For single selection
  function handleSingleSelection(getCurrentId) {
    setSelected(selected === getCurrentId ? null : getCurrentId);
  }

  // For multi selection
  function handleMultiSelection(getCurrentId) {
    const copy = [...multiSelected];
    const index = copy.indexOf(getCurrentId);

    if (index === -1) {
      copy.push(getCurrentId); // open
    } else {
      copy.splice(index, 1); // close
    }

    setMultiSelected(copy);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setMultiple(!multiple)}>
        {multiple ? "Switch to Single Selection" : "Enable Multi Selection"}
      </button>

      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            const isOpen = multiple
              ? multiSelected.includes(dataItem.id)
              : selected === dataItem.id;

            return (
              <div
                className="item"
                onClick={() =>
                  multiple
                    ? handleMultiSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
                key={dataItem.id}
              >
                <div className="title">
                  <h3>{dataItem.title}</h3>
                  <span>{isOpen ? "-" : "+"}</span>
                </div>

                {isOpen && (
                  <div className="content">
                    <p>{dataItem.content}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
