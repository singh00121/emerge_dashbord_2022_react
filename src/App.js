import "./App.css";
import Routings from "./Routings";
import AuthService from "../src/components/Login/auth.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GiComputerFan } from "react-icons/gi";
import Dashboard from "./pages/dashbord/Dashboard";

function App() {
  const handleClose = () => {
    document.getElementById("popupbox").style.display = "none";
  };
  return (
    <>
      <Routings />
      <div>
        <div id="popupbox" style={{ display: "none" }}>
          <div className="popupbox ">
            <div className="LogoutPopbox">
              Do You Want To Exit ?
              <div className="logoutbuton">
                <button className="Cancelbtn" onClick={handleClose}>
                  {/* <i className="fa fa-ban" aria-hidden="true"></i> */}
                  Cancel
                </button>
                <br />
                <button className="okbtn" onClick={AuthService.logout}>
                  {/* <i className="fa fa-check-circle-o" aria-hidden="true"></i>  */}
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className="Tost" />
    </>
  );
}
export default App;
