import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/anime-page"); // Перенаправление на /new-page
  }, [navigate]);

  return <p>Redirecting...</p>;
};

export default Home;
