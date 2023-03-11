import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://127.0.0.1:8000/";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 50000,
});

export const registerAccount = async (data) => {
  if (data.flag_ativo === "ativo") {
    data.flag_ativo = true;
  } else {
    data.flag_ativo = false;
  }
  return await axios({
    url: `${BASE_URL}api/account/`,
    method: "POST",
    data: data,
  })
    .then((res) => {
      toast.success("Conta criada com sucesso!");
      return res;
    })
    .catch((err) => {
      console.log(err);
      if (
        err.response.data.id_pessoa[0] ===
        "account with this id pessoa already exists."
      ) {
        return toast.error("Este id pessoal já está sendo utilizado.");
      }
      toast.error("Dados inválidos, verifique os campos!");
    });
};

export const getBalanceAccount = async (accountId) => {
  axios({
    url: `${BASE_URL}api/account/${accountId}/balance/`,
    method: "GET",
  })
    .then((res) => {
      toast.warning(`Seu saldo é de R$ ${res.data["saldo"]}`, {
        autoClose: 10000,
      });
      return res;
    })
    .catch((err) => {
      if (
        err.response.data.detail ===
        "You account must be active for this request."
      ) {
        toast.error("Conta solicitada está desativada");
      }
    });
};

export const depositAccount = async (data) => {
  const accountId = data["id_pessoa"];
  if (data.id_pessoa) {
    delete data["id_pessoa"];
  }
  axios({
    url: `${BASE_URL}api/account/${accountId}/deposit/`,
    method: "POST",
    data: data,
  })
    .then((res) => {
      toast.success(`Saldo de R$ ${res.data["valor"]} depositado com sucesso`);
      return res;
    })
    .catch((err) => {
      if (err.response.data.detail === "Account not found") {
        toast.error("Conta não encontrada");
      } else if (
        err.response.data.detail ===
        "Your account must be active for this request."
      ) {
        toast.error("Conta solicitada está desativada");
      } else toast.error("Dados inválidos, verifique os campos!");
    });
};

export const withdrawAccount = async (data) => {
  const accountId = data["id_pessoa"];
  if (data.id_pessoa) {
    delete data["id_pessoa"];
  }
  axios({
    url: `${BASE_URL}api/account/${accountId}/withdraw/`,
    method: "POST",
    data: data,
  })
    .then((res) => {
      toast.success(`Saldo de R$ ${res.data["valor"]} sacado com sucesso`);
      return res;
    })
    .catch((err) => {
      if (err.response.data.detail === "Account not found") {
        toast.error("Conta não encontrada");
      } else if (
        err.response.data.detail ===
        "Your account must be active for this request."
      ) {
        toast.error("Conta solicitada está desativada");
      } else if (
        err.data.detail ===
        "Ensure that there are no more than 10 digits in total."
      ) {
        toast.error("Saldo insuficiente.");
      } else toast.error("Dados inválidos, verifique os campos!");
    });
};

export const blockAccount = async (accountId) => {
  const deactivate = { flag_ativo: false };

  axios({
    url: `${BASE_URL}api/account/${accountId}/flag/`,
    method: "PATCH",
    data: deactivate,
  })
    .then((res) => {
      console.log(res);
      toast.success(`Conta desativada com sucesso`);
      return res;
    })
    .catch((err) => {
      if (
        err.response.data.detail ===
        "Your account must be active for this request."
      ) {
        toast.error("Conta solicitada está desativada");
      }
      console.log(err);
    });
};
