import { useState } from "react";
export function useInput(defaultValue, validationfn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);
  const valueIsValid = validationfn(enteredValue);

  function handleInput(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }
  function handleInputBlur() {
    setDidEdit(true);
  }
  return {
    value: enteredValue,
    handleInput,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
