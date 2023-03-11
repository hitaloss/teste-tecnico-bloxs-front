import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function AccountModal(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(props.schema) });

  return (
    <Dialog
      component="form"
      onSubmit={handleSubmit(props.accountFunction)}
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <DialogTitle
        variant="h6"
        color="text.contrast"
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "1rem",
            sm: "1.25rem",
          },
        }}
      >
        {props.title}
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2} alignItems="center" padding={4}>
          <TextField
            label="Id Pessoal"
            placeholder="3"
            variant="outlined"
            type="number"
            helperText={errors.id_pessoa?.message}
            error={errors.id_pessoa !== undefined ? true : false}
            sx={{
              width: "100%",
              input: {
                color: "#121212",
              },
            }}
            {...register("id_pessoa")}
          />
          <TextField
            label="Saldo"
            placeholder="3500.00"
            variant="outlined"
            helperText={errors.saldo?.message}
            error={errors.saldo !== undefined ? true : false}
            sx={{
              width: "100%",
              input: {
                color: "#121212",
              },
            }}
            {...register("saldo")}
          />

          <TextField
            label="Limite Diário de Saque"
            placeholder="300"
            variant="outlined"
            helperText={errors.limite_saque_diario?.message}
            error={errors.limite_saque_diario !== undefined ? true : false}
            sx={{
              width: "100%",
              input: {
                color: "#121212",
              },
            }}
            {...register("limite_saque_diario")}
          />

          <TextField
            label="Estado da Conta"
            placeholder='"ativo" ou "inativo"'
            variant="outlined"
            helperText={errors.flag_ativo?.message}
            error={errors.flag_ativo !== undefined ? true : false}
            sx={{
              width: "100%",
              input: {
                color: "#121212",
              },
            }}
            {...register("flag_ativo")}
          />
          <TextField
            label="Tipo de conta"
            placeholder="202"
            variant="outlined"
            type="number"
            helperText={errors.tipo_conta?.message}
            error={errors.tipo_conta !== undefined ? true : false}
            sx={{
              width: "100%",
              input: {
                color: "#121212",
              },
            }}
            {...register("tipo_conta")}
          />
        </Stack>
      </DialogContent>
      <DialogActions
        sx={{
          margin: "auto",
          pb: "2rem",
        }}
      >
        <Button type="submit" onClick={() => props.setOpen(false)}>
          Salvar Conta
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AccountModal;
