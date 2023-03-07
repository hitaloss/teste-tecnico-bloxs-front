import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

function CustomHeader() {
  const [anchor, setAnchor] = useState(null);

  const open = Boolean(anchor);

  return (
    <AppBar sx={{ p: 1, backgroundColor: "primary.light" }} position="static">
      <Toolbar>
        <Typography
          variant="h4"
          component="div"
          sx={{
            flexGrow: 1,
          }}
        >
          Bloxs Bank
        </Typography>
        <Stack spacing={2} direction="row">
          <IconButton
            onClick={() =>
              window.open("https://www.instagram.com/hitaloss/", "_blank")
            }
            sx={{
              color: "text",
            }}
            size="large"
            edge="start"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            onClick={() => window.open("https://github.com/hitaloss", "_blank")}
            sx={{
              color: "text",
            }}
            size="large"
            edge="start"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/hitalosantossilva/",
                "_blank"
              )
            }
            sx={{
              color: "text",
            }}
            size="large"
            edge="start"
          >
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default CustomHeader;