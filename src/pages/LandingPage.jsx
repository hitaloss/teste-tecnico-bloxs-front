import React from "react";
import { Stack, Typography } from "@mui/material";
import Lottie from "react-lottie";
import animationData from "../lotties/131298-04-schedule-payment.json";

import CustomHeader from "../components/CustomHeader";
import business from "../assets/business.jpg";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const navigate = useNavigate();

  return (
    <>
      <Stack
        sx={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)
          ), url(${business})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <CustomHeader />
        <Stack
          flexDirection={{ xs: "column", sm: "column", md: "row" }}
          alignItems="center"
          flex={1}
          spacing={{ xs: 2, sm: 5 }}
          justifyContent="center"
          marginX={{ xs: 0, sm: 1, md: 7 }}
        >
          <Stack
            width={{ xs: "100%", sm: "100%", md: "50%" }}
            alignItems="center"
            spacing={2}
          >
            <Typography
              color="text"
              textAlign="center"
              fontSize={{
                xs: "2.9rem",
                sm: "4rem",
                lg: "4rem",
              }}
              fontWeight="600"
            >
              Solução para o controle das suas finanças
            </Typography>
            <CustomButton
              text="Entrar"
              variant="outlined"
              function={() => {
                navigate("/dashboard");
              }}
            />
          </Stack>
          <Stack width={{ xs: "9rem", sm: "20rem", md: "40rem" }}>
            <Lottie options={defaultOptions} height="100%" width="100%" />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default LandingPage;
