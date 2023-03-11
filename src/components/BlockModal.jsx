import React, { useContext, useState } from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Dialog,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";
import { blockAccount } from "../api/api";
import { ModalContext } from "../contexts/modal";
import { Skeleton } from "@mui/material";

function ConfirmModal(props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  const handleBlock = async () => {
    await blockAccount(props.idPerson);
    handleClose();
  };

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle color="text.contrast">{"Desativar Conta"}</DialogTitle>
      <DialogContent>
        <DialogContentText color="text.contrast">
          Deseja realmente desativar conta selecionada?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleBlock} autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function BlockModal(props) {
  const [confirm, setConfirm] = useState(false);
  const [idPerson, setIdPerson] = useState(null);
  const { accounts, loading } = useContext(ModalContext);

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleListItemClick = (idPerson) => {
    setIdPerson(idPerson);
    setConfirm(true);
  };

  return (
    <Dialog onClose={handleClose} open={props.open}>
      <DialogTitle color={"text.contrast"}>
        Selecione a conta (Id pessoal)
      </DialogTitle>
      <List sx={{ pt: 0 }}>
        {loading === false ? (
          accounts.map((item) => (
            <ListItem key={item.id} disableGutters>
              <ListItemButton
                onClick={() => handleListItemClick(item.id_pessoa)}
                sx={{
                  color: "text.contrast",
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.id_pessoa} />
              </ListItemButton>
            </ListItem>
          ))
        ) : (
          <Skeleton variant="rectangular" width="18.211rem" height="3.498rem" />
        )}
      </List>
      <ConfirmModal open={confirm} idPerson={idPerson} setOpen={setConfirm} />
    </Dialog>
  );
}

export default BlockModal;
