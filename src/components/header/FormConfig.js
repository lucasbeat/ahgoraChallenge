import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import "./_header.css";

function FormIndex({ className, name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return <input className={className} ref={inputRef} {...rest} />;
}

export default FormIndex;
