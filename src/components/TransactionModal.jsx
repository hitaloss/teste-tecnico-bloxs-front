import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function TransactionModal(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(props.schema) });

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog
      onSubmit={handleSubmit(props.submitFunction)}
      open={props.open}
      onClose={handleClose}
      component="form"
    >
      <DialogTitle color="text.contrast">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText color="text.contrast">
          {props.description}
        </DialogContentText>
        <TextField
          sx={{
            input: {
              color: "#121212",
            },
          }}
          autoFocus
          variant="filled"
          placeholder="12"
          type="number"
          helperText={errors.id_pessoa?.message}
          error={errors.id_pessoa !== undefined ? true : false}
          {...register("id_pessoa")}
        />
        <TextField
          sx={{
            input: {
              color: "#121212",
            },
          }}
          fullWidth
          variant="filled"
          placeholder="500.00"
          type="number"
          helperText={errors.valor?.message}
          error={errors.valor !== undefined ? true : false}
          {...register("valor")}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleClose} type="submit">
          {props.buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TransactionModal;
