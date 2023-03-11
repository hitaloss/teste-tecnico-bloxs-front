import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext({});

function ModalProvider({ children }) {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(null);

  const BASE_URL = "http://127.0.0.1:8000/";

  function loadAccounts() {
    setLoading(true);
    axios({
      url: `${BASE_URL}api/account/`,
      method: "GET",
    })
      .then((response) => {
        setAccounts(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(setLoading(false));
  }
  useEffect(() => {
    loadAccounts();
  }, []);

  return (
    <ModalContext.Provider value={{ accounts, loading }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
