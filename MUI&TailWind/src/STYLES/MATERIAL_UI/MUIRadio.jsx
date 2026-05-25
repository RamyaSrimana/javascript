import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

function MUIRadio() {
  const [gender, setGender] = useState('');
    
  function handleGender(event) {
    setGender(event.target.value);
  }

  return (
    <>
      <FormControl>
        <FormLabel id="gender-radio-buttons-group-label">Select Gender</FormLabel>
        <RadioGroup 
          aria-labelledby="gender-radio-buttons-group-label"
          value={gender} 
          onChange={handleGender}
        >
          <FormControlLabel 
            value="Male" 
            control={<Radio />} 
            label="Male" 
          />
          <FormControlLabel 
            value="Female" 
            control={<Radio />} 
            label="Female" 
          />
        </RadioGroup>
      </FormControl>
      
      <Typography sx={{ mt: 2 }}>
        The Gender Selected is {gender}
      </Typography>
    </>
  );
}

export default MUIRadio;