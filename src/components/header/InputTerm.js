import React from "react";

import Input from "./FormConfig";

import "./_header.css";

export default function InputTerm({ term }) {
  return (
    <Input className="header-input" type="text" name={term} required={true} />
  );
}
