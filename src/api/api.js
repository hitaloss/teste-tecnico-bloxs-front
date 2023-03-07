import axios from "axios";

const BASE_URL = process.env.BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 50000,
});

export const registerUser = (data) =>
  axios({
    url: `${BASE_URL}/user`,
    method: "POST",
    data: data,
  })
    .then((success) => {
      toast.success("Conta criada com sucesso!");
      return success;
    })
    .catch((err) => {
      if (err.response.data === "Email already exists") {
        toast.error("Email já cadastrado, tente outro!");
      } else {
        toast.error("Ocorreu algum erro. Tente novamente mais tarde");
      }
      return err;
    });
