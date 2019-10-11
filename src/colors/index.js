import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const colorOptions = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "yellow", label: "Yellow" },
  { value: "orange", label: "Orange" },
  { value: "purple", label: "Purple" },
  { value: "green", label: "Green" },
  { value: "black", label: "Black" }
];

export const initialSelection = [
  colorOptions[0],
  colorOptions[1],
  colorOptions[2]
];

export default props => (
  <p class="control" style={{ marginBottom: 16 }}>
    <Select
      closeMenuOnSelect={false}
      components={makeAnimated()}
      defaultValue={initialSelection}
      isMulti
      options={colorOptions}
      {...props}
    />
    <p class="help">Select the colors</p>
  </p>
);
