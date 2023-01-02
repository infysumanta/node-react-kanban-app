import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../api/authApi";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [usernameErrText, setUsernameErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameErrText("");
    setPasswordErrText("");

    const data = new FormData(e.target);
    const username = data.get("username").trim();
    const password = data.get("password").trim();

    let err = false;

    if (username === "") {
      err = true;
      setUsernameErrText("Please fill this field");
    }
    if (password === "") {
      err = true;
      setPasswordErrText("Please fill this field");
    }

    if (err) return;

    setLoading(true);

    try {
      const res = await authApi.login({ username, password });
      setLoading(false);
      localStorage.setItem("token", res.token);
      navigate("/");
    } catch (err) {
      const errors = err.data.errors;
      errors.forEach((e) => {
        if (e.param === "username") {
          setUsernameErrText(e.msg);
        }
        if (e.param === "password") {
          setPasswordErrText(e.msg);
        }
      });
      setLoading(false);
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }} noValidate>
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="Usernme"
        value="sumantablog"
        name="username"
        disabled={loading}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        type="password"
        label="Password"
        name="password"
        value="Sumanta@1998"
        error={usernameErrText !== ""}
        helperText={usernameErrText}
        disabled={loading}
      />
      <LoadingButton
        sx={{ mt: 3, mb: 2 }}
        variant="outlined"
        fullWidth
        color="success"
        type="submit"
        error={passwordErrText !== ""}
        helperText={passwordErrText}
        loading={loading}
      >
        Login
      </LoadingButton>
      <Button component={Link} to="/signup" sx={{ textTransform: "none" }}>
        Don't have an account? Signup
      </Button>
    </Box>
  );
};

export default Login;
