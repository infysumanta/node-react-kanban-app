import React, { useState } from "react";
import { Box } from "@mui/system";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const createBoard = () => {};

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoadingButton
        variant="outlined"
        color="success"
        onClick={createBoard}
        loading={loading}
      >
        Click here to create your first board
      </LoadingButton>
    </Box>
  );
};

export default Home;
