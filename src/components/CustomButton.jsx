import { Button } from "@mui/material";

function CustomButton(props) {
  return (
    <Button
      size="large"
      type={props.type}
      sx={{
        padding: ".4rem",
        width: "9rem",
        color: "primary.light",
        fontSize: "15px",
      }}
      variant={props.variant}
      onClick={props.function}
    >
      {props.text}
    </Button>
  );
}

export default CustomButton;
