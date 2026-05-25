import { Button, TextField } from "@mui/material";
function LoginForm() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "400px" }}>
        <TextField
          label="Username"
          variant="outlined"
          type="text"
          sx={{ mb: 2 }}
        />
        <TextField
          label="password"
          variant="outlined"
          type="password"
          sx={{ mb: 2 }}
        />
        <br/>
        <Button
          variant="contained"
          sx={{ width: "100px", backgroundColor: "blue" }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          sx={{ width: "100px", ml: 2, backgroundColor: "red" }}
        >
          cancel
        </Button>
      </div>
    </div>
  );
}
export default LoginForm;
