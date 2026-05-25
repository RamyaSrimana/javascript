import { Box } from "@mui/material"
function MuliBox(){
    return(
       <>
        <Box sx = {{
            display :'flex',
            justifyContent : 'center',
            alignItems:'center',
            height:'100vh',
            margin:0,
        }}>Content</Box>
        </>
    )
}
export default MuliBox