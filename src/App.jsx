import "react-toastify/dist/ReactToastify.min.css";
import { Slide, ToastContainer } from "react-toastify";
import { CssBaseline } from "@mui/material";
import Routes from "./routes";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        limit={2}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        theme="dark"
      />
      <CssBaseline />
      <Routes />
    </>
  );
}

export default App;
