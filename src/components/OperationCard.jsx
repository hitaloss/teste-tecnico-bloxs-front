import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function OperationCard(props) {
  return (
    <Card
      width={{ xs: 250, sm: 300, md: 325 }}
      sx={{
        minWidth: 325,
        minHeight: 250,
        mt: 15,
        alignItems: "flex-end",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        width={{ xs: 250, sm: 300, md: 325 }}
        component="img"
        alt={props.alt}
        height="70"
        image={props.image}
      />

      <CardContent width={{ xs: 250, sm: 300, md: 325 }} sx={{ mr: "auto" }}>
        <Typography
          gutterBottom
          color="text.contrast"
          variant="h5"
          component="div"
        >
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions width={{ xs: 250, sm: 300, md: 325 }} sx={{ mt: "auto" }}>
        <Button size="small" onClick={props.function}>
          Abrir
        </Button>
      </CardActions>
    </Card>
  );
}

export default OperationCard;
