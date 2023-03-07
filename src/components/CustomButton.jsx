import { Button } from "@mui/material";

function CustomButton(props) {
  return (
    <Button
      size="small"
      sx={{
        padding: ".4rem",
        width: "9rem",
        borderColor: "white",
        borderRadius: "30px",
        color: props.color,
        fontSize: "10px",
      }}
      variant={props.variant}
      onClick={props.function}
    >
      {props.text}
    </Button>
  );
}

export default CustomButton;
