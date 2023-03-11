import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";
import { getBalanceAccount } from "../api/api";
import { ModalContext } from "../contexts/modal";
import { Skeleton } from "@mui/material";

function BalanceModal(props) {
  const { accounts, loading } = useContext(ModalContext);

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleListItemClick = (value) => {
    getBalanceAccount(Number(value));
    handleClose();
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
    </Dialog>
  );
}

export default BalanceModal;
