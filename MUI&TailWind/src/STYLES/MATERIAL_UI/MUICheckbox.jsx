import { FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";

// 1. Rename your function so it doesn't conflict with MUI's Checkbox
function TermsCheckbox() {
  const [checked, setChecked] = useState(false);

  function handleChange() {
    setChecked(!checked);
  }

  return (
    <>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange} />}
        label="Accept terms and Conditions"
      />
    </>
  );
}

export default TermsCheckbox;
