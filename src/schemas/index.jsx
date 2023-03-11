import * as yup from "yup";

export const accountSchema = yup.object().shape({
  id_pessoa: yup
    .number()
    .typeError("Apenas valores numéricos serão aceitos")
    .required("Campo obrigatório"),
  saldo: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^(?!0\d)\d{1,15}(?:\.\d{1,2})?(?<=\d)$/,
      "O campo deve seguir o padrão monetário. Ex.: 400100.20"
    ),
  limite_saque_diario: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^\d+(\.\d{1,2})?$/,
      "O campo deve seguir o padrão monetário. Ex.: 400100.20"
    ),
  flag_ativo: yup
    .string()
    .oneOf(["ativo", "inativo"], "Deve ser 'ativo' ou 'inativo'")
    .required("Campo obrigatório"),
  tipo_conta: yup
    .number("Apenas valores numéricos serão aceitos")
    .typeError("Apenas valores numéricos serão aceitos")
    .required("Campo obrigatório"),
});

export const transactionSchema = yup.object().shape({
  id_pessoa: yup
    .number()
    .typeError("Apenas valores numéricos serão aceitos")
    .required("Campo obrigatório"),
  valor: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^(?!0\d)\d{1,15}(?:\.\d{1,2})?(?<=\d)$/,
      "O campo deve seguir o padrão monetário. Ex.: 100.20"
    ),
});
