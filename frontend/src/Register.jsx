import { useState } from "react";
import axios from "axios";
import { 
  TextField, 
  Button, 
  Container, 
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel 
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const roles = [
    { value: "Student1", label: "Student 1" },
    { value: "Student2", label: "Student 2" },
    { value: "Student3", label: "Student 3" },
    { value: "Staff", label: "Staff" },
    { value: "Admin", label: "Admin" }
  ];

  const handleRegister = async () => {
    if (!username || !password || !role) {
      alert("Please fill in all fields");
      return; 
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        { username, password, role },
        { headers: { "Content-Type": "application/json" } }
      );
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        backgroundColor: "#fff",
        border: "1px solid #d32f2f",
        borderRadius: "8px",
        padding: "20px",
        marginTop: "50px",
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ marginBottom: "20px", color: "#d32f2f" }}
      >
        Register
      </Typography>
      <TextField
        label="Username"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        InputLabelProps={{ style: { color: "#d32f2f" } }}
        sx={{ borderBottom: "1px solid #d32f2f" }}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputLabelProps={{ style: { color: "#d32f2f" } }}
      />
      
      <FormControl fullWidth margin="normal">
        <InputLabel sx={{ color: "#d32f2f" }}>Role</InputLabel>
        <Select
          value={role}
          label="Role"
          onChange={(e) => setRole(e.target.value)}
          sx={{
            color: "#d32f2f",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#d32f2f"
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#d32f2f !important"
            }
          }}
        >
          {roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        variant="contained"
        fullWidth
        onClick={handleRegister}
        sx={{
          backgroundColor: "#d32f2f",
          color: "#ffffff",
          marginTop: "20px",
          "&:hover": { backgroundColor: "#9a0007" },
        }}
      >
        Register
      </Button>
      <Typography
        align="center"
        sx={{
          marginTop: "20px",
          color: "#d32f2f",
          cursor: "pointer",
        }}
        onClick={() => navigate("/login")}
      >
        Already have an account? Log in
      </Typography>
    </Container>
  );
};

export default Register;