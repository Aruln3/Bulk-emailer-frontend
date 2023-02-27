import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import PasswordReset from "./components/PasswordReset";
import ForgotPassword from "./components/ForgotPassword";
import CircularProgress from '@mui/material/CircularProgress';
import { LinearProgress } from '@mui/material';
import Box from '@mui/material/Box';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./components/ContextProvider/Context";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const URL="https://bulk-email-o4uq.onrender.com"

function App() {

  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);


  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch(`${URL}/validuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });

    const data = await res.json();

    if (data.status == 401 || !data) {
      console.log("user not valid");
    } else {
      console.log("user verify");
      setLoginData(data)
      history("/dash");
    }
  }

  useEffect(() => {
    setTimeout(()=>{
      DashboardValid();
      setData(true)
    },2000)

  }, [])

  return (
    <>
      {
        data ? (
          <>
            <Header />

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dash" element={<Dashboard />} />
              <Route path="/password-reset" element={<PasswordReset />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />}/>
              <Route path="*" element={<Error />} />
            </Routes>
          </>

        ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", margintop:"30px" , height: "100vh" }}>
          <img src="https://media.tenor.com/q-zZSTX6jSIAAAAM/mail-download.gif" />
          
          <LinearProgress/>
        </Box>
      }


    </>
  );
}

export default App;