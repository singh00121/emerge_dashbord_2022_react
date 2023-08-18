import React, { useEffect, useState } from "react";
import "./Speed.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // for ES6 modules
import ServerUrl from "../../../Baseurl/ServerURL";
import axios from "axios";
import authHeader from "../../../components/Login/auth-headers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCloseSharp } from "react-icons/io5";
function Speed() {
  const [items, setItems] = useState("");
  const [allitems, setAllitems] = useState([]);
  const [Lenght, setLenght] = useState("");
  console.log(Lenght);

  const [SpeedName, setSpeedName] = useState("");
  console.log(SpeedName);

  const [errorSpeedNamePost, seterrorSpeedNamePost] = useState("");
  const [errorSpeedName, seterrorSpeedName] = useState(false);

  const [prTypeId, setprTypeId] = useState();
  console.log(prTypeId);
  const [PrTypeName, setPrTypeName] = useState("");
  console.log(PrTypeName);

  const [search, setSearch] = useState("");

  let navigate = useNavigate();
  const Backtomaster = () => {
    let path = `/master`;
    navigate(path);
    // navigate(`/addproduct`);
    // <Navigate to="/addproduct" replace={true} />
  };

  // get all  api colling

  const fetchData = async () => {
    const data = {
      page: 1,
      size: 20,
    };
    await axios
      .post(`${ServerUrl}/getAllSpeed`, data, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res.data.data);
        setAllitems(res.data.data);
        setItems(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchTotalData = async () => {
    await axios
      .get(`${ServerUrl}/getSpeedCount`, {
        headers: authHeader(),
      })
      .then((res) => {
        if (res.data.data) {
          const i = res.data.data.length - 1;
          setLenght(res.data.data[i].Total);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
    fetchTotalData();
  }, []);

  // post api start

  // const OnSpeedName = (e) => {
  //   const SpeedName = e.target.value.replace(/[^a-z]/gi, " ");
  //   setSpeedName(Speed);
  //   if (SpeedName.length <= 3) {
  //     seterrorSpeedNamePost("Enter Speed Name");
  //     seterrorSpeedName(true);
  //   } else {
  //     seterrorSpeedName(false);
  //   }
  // };
  const OnSpeedName = (e) => {
    const SpeedName = e.target.value.replace(/[^a-z]{^1,2}/gi, "");
    setSpeedName(SpeedName);
    if (SpeedName.length <= 3) {
      seterrorSpeedNamePost("Enter speedname name");
      seterrorSpeedName(true);
    } else {
      seterrorSpeedName(false);
    }
  };

  const Data = {
    speed_name: SpeedName,
  };

  const SpeedPost = () => {
    axios
      .post(ServerUrl + "/insertSpeed", Data, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log("Response", res);
        console.log(res);
        toast.success("Speed post Successfully");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Speed not post");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      });
  };

  // post api End

  // Get byId  api start
  const hanldeClick = async (speed_id) => {
    const res = await axios.get(
      `${ServerUrl}/getSpeedById?speed_id=${speed_id}`,
      {
        headers: authHeader(),
      }
    );

    console.log(res);

    if (res.data.data) {
      const i = res.data.data.length - 1;
      setprTypeId(res.data.data[i].speed_id);
      setPrTypeName(res.data.data[i].speed_name);
    }
    document.getElementById("Speed_popup").style.display = "block";
    // console.log(res.data.data);
  };

  // Get byId  api End

  // Update byId  api Start

  const Data2 = {
    speed_id: prTypeId,
    speed_name: PrTypeName,
  };

  const UpdateSpeed = () => {
    axios
      .patch(`${ServerUrl}/updateSpeed`, Data2, {
        headers: authHeader(),
      })
      .then((res) => {
        toast.success("Speed update sucsefully");
        console.log(res);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("something went wrong");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  };

  // Update byId  api End

  var SearchFilter = {
    name: search,
    page: 1,
    size: 10,
  };

  const onChangeSearch = (e) => {
    const search = e.target.value;
    if (search === "") {
      window.location.reload();
    }
    setSearch(search);
  };

  const searchAPI = () => {
    console.log("search", search);
    axios
      .post(`${ServerUrl}/searchSpeed`, SearchFilter, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res);
        // setItems(res.data.data);
        setAllitems(res.data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  //active deactive api

  const activedata = {
    speed_id: 1,
    statusId: 0,
  };
  const handlactive = async () => {
    // alert("hello hys");
    // console.log("hello");
    await axios
      .patch(`${ServerUrl}/activateDeactivateSpeed`, activedata, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res.data);
        console.log(allitems)
        // setItems(res.data);
        setAllitems(res.data);
      });
  };

  // close popup model
  const modal = () => {
    document.getElementById("Speed_popup").style.display = "none";
  };
  return (
    <div>
      <div className="masterparemntdiv ">
        {/* heder start  */}
        <div className="ProductTypeheder">
          <div onClick={Backtomaster} className="masterIconeback">
            <IoMdArrowRoundBack /> Speed
          </div>
          <div>
            <div className="Serch_user">
              <div className="Productserch">
                <input
                  type="text"
                  placeholder="Search.."
                  name="search"
                  onChange={(e) => {
                    onChangeSearch(e);
                    searchAPI();
                  }}
                  className="Productserchinder"
                />
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "none" }}></div>
          </div>
        </div>
        <div className="types">{Lenght} Speed</div>
        {/* heder End  */}
        {/* body start  */}
        <div className="producttypeBody">
          <div className="leftsaidtabl">
            <table className="master_tabal">
              <thead>
                <tr className="driver_table_heading">
                  <th style={{ borderRadius: "8px 0px 0px 8px" }}>Sr.no</th>
                  <th>Speed ID</th>
                  <th>Speed Name</th>
                  <th>Status</th>

                  <th style={{ borderRadius: "0px 8px 8px 0px" }}>Edit</th>
                </tr>
              </thead>
              <br />
              <tbody>
                {items ? (
                  items.map((item, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.speed_id}</td>
                      <td>{item.speed_name}</td>

                      <td>
                        <Toggle
                          defaultChecked={item.statusId === 1 ? true : false}
                          icons={false}
                          id="doctor_toggle"
                          onClick={() => handlactive()}
                          // ref={ref}
                          // onChange={() => {
                          //   disableDoctor(item.doctormaster_id, doctorresult);
                          //   var id = item.doctormaster_id;
                          //   enableDoctor();
                          // }}
                        />
                      </td>
                      <td>
                        <MdEdit
                          key={index}
                          onClick={() => hanldeClick(item.speed_id)}
                          id={item.speed_id}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className="container">No Color Available</div>
                )}
              </tbody>
            </table>
          </div>
          <div className="rightsaidform">
            <div className="productname">
              <label htmlFor="Product Type Name"> Speed</label>
              <br />
              <input
                name=""
                id=""
                className="Productnamein"
                value={SpeedName}
                onChange={(e) => OnSpeedName(e)}
                // onChange={(e) => {
                //   setSpeedName(e.target.value);
                //   console.log(Speed);
                // }}
              />
            </div>
            <br />
            {errorSpeedName && (
              <small style={{ color: "red", fontSize: 15 }}>
                {errorSpeedNamePost}
              </small>
            )}

            <div className="addprodttypebuthon" onClick={SpeedPost}>
              + Add Speed
            </div>
          </div>
        </div>
        {/* body End  */}
      </div>

      {/* Popupbox Start */}
      <div id="Speed_popup" style={{ display: "none" }}>
        <div className="enquiryPopup">
          <div className="conteners ">
            <div className="" onClick={modal}>
              <Link>
                <IoCloseSharp className="IoCloseSharp" />
              </Link>
            </div>
            <div className="flexcontener">
              <div className=" maincontent">
                <div className="servicePost">
                  <div className="field">
                    <label className="label" style={{ color: "#000000" }}>
                      Speed Name
                    </label>
                    <div className="control">
                      <input
                        className="Productnamein"
                        type="text"
                        value={PrTypeName}
                        onChange={(e) => {
                          setPrTypeName(e.target.value);
                          console.log(PrTypeName);
                        }}
                      />
                    </div>
                  </div>

                  <br />
                  <br />
                  <div
                    className="form-control-servic "
                    style={{ textAlign: "center" }}
                  >
                    <button
                      className="addprodttypebuthon"
                      onClick={UpdateSpeed}
                    >
                      update Speed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default Speed;
