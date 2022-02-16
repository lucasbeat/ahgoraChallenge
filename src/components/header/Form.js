import React from "react";
import { Form } from "@unform/web";

import InputTerm from "./InputTerm";
import InputDay from "./Form";

function FormData({ HandleData, HandleDuration, HandleTerm }) {
  return (
    <Form onSubmit={HandleData}>
      <InputTerm term="term" HandleTerm={HandleTerm} />
      <InputDay HandleDuration={HandleDuration} />
    </Form>
  );
}

export default FormData;
