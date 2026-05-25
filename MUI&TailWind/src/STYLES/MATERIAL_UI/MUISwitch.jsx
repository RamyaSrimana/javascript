import { FormControlLabel, Switch, Typography, Box } from "@mui/material";
import { useState } from "react";

// Toggle is called as Switch
function MUIswitch() {

    const [darkMode, setDarkMode] = useState(false);
    const [bcolor, setBcolor] = useState('white');

    function handleDarkMode() {
        setDarkMode(!darkMode);
        setBcolor(bcolor === 'white' ? 'black' : 'white');
    }

    return (
        <>
            <Box sx={{ backgroundColor: bcolor, p: 5 }}>
            </Box>

            <FormControlLabel
                control={
                    <Switch
                        checked={darkMode}
                        onChange={handleDarkMode}
                    />
                }
                label="Dark Mode"
            ></FormControlLabel>

            <Typography>
                {darkMode ? "ON" : "OFF"}
            </Typography>
        </>
    );
}

export default MUIswitch;