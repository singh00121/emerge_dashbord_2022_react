import React, { useEffect, useState } from "react";
import "./Login.css";
// import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import ServerUrl from "../../Baseurl/ServerURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleLogin } from "@react-oauth/google";
function Login() {
  const [Email, setEmail] = useState("");
  const [massage, setMassage] = React.useState("");
  const [status, setStatus] = React.useState(false);
  console.log(Email);

  let navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo?",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );
        // let path = `/dashboard`;
        // navigate(path);
        console.log(res.data);
        setEmail(res.data.email);
        setTimeout(() => {
          // window.location.reload();
          onSubmit(res.data.email);
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const [user, setUser] = useState([]);

  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => setUser(codeResponse),
  //   onError: (error) => console.log('Login Failed:', error),
  // });

  // useEffect(() => {
  //   if (user) {
  //     axios
  //       .get(
  //         `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${user.access_token}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${user.access_token}`,
  //             Accept: 'application/json',
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //         setEmail(res.data.email);
  //         setTimeout(() => {
  //           // window.location.reload();
  //           onSubmit();
  //         }, 5000);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [user]);

  // Login api data store in databse
  // adminlogin api

  const onSubmit = (e) => {
    // e.preventDefault();
    console.log("Email", e);
    var data = {
      adminemail: e,
    };
    console.log(data);
    axios
      .post("https://cerbosys.in:3200/emerge/admin/adminLogin", data, {
        headers: {
          "Content-Type": "application/json",
        },

        // data: JSON.stringify({
        //   adminemail: Email,
        // }),
      })
      .then((res) => {
        console.log("response login", res);
        console.log("response login2", res.data);
        console.log("response token", res.data.token);
        console.log("response success", res.data.success);
        setMassage(res.data.message);
        if (res.data.token) {
          setStatus(res.data.success);
          localStorage.setItem("admin", JSON.stringify(res.data));
          toast.success("Login Successfully ", massage);
          setTimeout(() => {
            window.location.reload();
            // let path = `/dashboard`;
            // navigate(path);
          }, 2000);
        } else {
          // toast.error('Invalid Username and Password');
          toast.error("This is not a valid Email");
        }

        return res.data;
      })
      .catch((err) => {
        // toast.error('error happned');
        console.log("Error happned");
      });
  };

  return (
    <div className="BGImage">
      <div className="screen">
        <div className="GoogaleLOGIN ">
          {/* <GoogleLogin
            className="loginscreen"
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse.credential);
              var decoded = jwt_decode(credentialResponse.credential);
              console.log(decoded);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          /> */}

          <button className="loginscreen" onClick={() => login()}>
            Sign in with Google 🚀{" "}
          </button>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default Login;
