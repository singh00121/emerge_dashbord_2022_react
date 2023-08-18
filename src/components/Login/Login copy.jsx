import React, { useState } from 'react';
import './Login.css';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ServerUrl from '../../Baseurl/ServerURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [massage, setMassage] = React.useState('');
  const [status, setStatus] = React.useState(false);
  console.log(Email);
  console.log(Name);
  console.log(massage);
  console.log(status);
  let navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
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
        setName(res.data.name);
        setTimeout(() => {
          // window.location.reload();
          // onSubmit();
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    },
  });
  // Login api data store in databse
  // adminlogin api
  // const onSubmit = (e) => {
  //   // e.preventDefault();
  //   console.log('Email', Email);
  //   console.log('Name', Name);
  //   axios(ServerUrl + '/adminLogin', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },

  //     data: JSON.stringify({
  //       email: Email,
  //       name: Name,
  //     }),
  //   })
  //     .then((res) => {
  //       console.log('response login', res);
  //       console.log('response login2', res.data);
  //       console.log('response token', res.data.token);
  //       console.log('response success', res.data.success);
  //       setMassage(res.data.message);
  //       if (res.data.token) {
  //         setStatus(res.data.success);
  //         localStorage.setItem('admin', JSON.stringify(res.data));
  //         toast.success('Login Successfully ', massage);
  //         setTimeout(() => {
  //           window.location.reload();
  //           // let path = `/dashboard`;
  //           // navigate(path);
  //         }, 2000);
  //       } else {
  //         // toast.error('Invalid Username and Password');
  //         toast.error('This is not a valid Email');
  //       }

  //       return res.data;
  //     })
  //     .catch((err) => {
  //       // toast.error('error happned');
  //       console.log('Error happned');
  //     });
  // };

  return (
    <div className="BGImage">
      <div className="screen" onClick={login}>
        {/* <button>
        <i class="fa-brands fa-google"></i>
        Continue with google
      </button> */}
        <div className="GoogaleLOGIN ">
          <GoogleLogin
            className="loginscreen"
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse.credential);
              var decoded = jwt_decode(credentialResponse.credential);
              console.log(decoded);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
        {/* <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className=" my-5 mx-auto loginouter "
              style={{ borderRadius: "1rem", maxWidth: "500px" }}
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column   login ">
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <p className="text-white-50 mb-3">
                  Please enter your login and password!
                </p>

                <MDBInput
                  wrapperClass="mb-4 w-100"
                  label="Username"
                  id="formControlLg"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />

              

                <button size="lg" className="loginbuthon">Login</button>

                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer> */}
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default Login;
