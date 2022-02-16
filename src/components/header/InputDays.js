import React from "react";

import Input from "./FormConfig";

import "./_header.css";

export default function InputDay() {
  return (
    <>
      <Input
        className="header-input-days"
        type="number"
        name="day1"
        required={true}
      />
      <Input
        className="header-input-days"
        type="number"
        name="day2"
        required={true}
      />
      <Input
        className="header-input-days"
        type="number"
        name="day3"
        required={true}
      />
      <Input
        className="header-input-days"
        type="number"
        name="day4"
        required={true}
      />
      <Input
        className="header-input-days"
        type="number"
        name="day5"
        required={true}
      />
      <Input
        className="header-input-days"
        type="number"
        name="day6"
        required={true}
      />
      <Input
        className="header-input-days"
        type="number"
        name="day7"
        required={true}
      />
    </>
  );
}
