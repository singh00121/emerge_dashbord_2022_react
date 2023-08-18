import React, { useEffect, useState } from "react";
import "./Colors.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { MdEdit, MdSyncProblem } from "react-icons/md";
import Toggle from "react-toggle";
// import ReactSwitch from "react-switch";
import "react-toggle/style.css"; // for ES6 modules
import axios from "axios";
import ServerUrl from "../../../Baseurl/ServerURL";
import authHeader from "../../../components/Login/auth-headers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCloseSharp } from "react-icons/io5";
import QualityType from "../Quality Type/QualityType";
function Color() {
  const [color, setColor] = useState([""]);
  const [allcolordata, setAllcolordata] = useState([""]);
  const [colorName, setColorName] = useState("");

  //length state
  const [length, setLenght] = useState("");
  //active deactive
  // const [checked, setChecked] = useState(true);
  //update
  const [colorid2, setColorid2] = useState("");
  const [colorname2, setColorName2] = useState("");
  //error state
  const [colordataerror, setColordataerror] = useState("");
  const [colorerrorpost, setColorerrorpost] = useState(false);
  //search state
  const [searchdata, setSearchdata] = useState("");
  //update switch state
  // const updateintial = upadteswtch.length - 1;
  const [upadteswtch, setUpadteswtch] = useState();

  let navigate = useNavigate();
  //get all data
  const getalldata = async () => {
    const data = {
      page: 1,
      size: 10,
    };
    const res = await axios.post(`${ServerUrl}/getAllColor`, data, {
      headers: authHeader(),
    });
    setColor(res.data.data);
    setAllcolordata(res.data.data);
    // console.log(res.data.data);
  };
  useEffect(() => {
    getalldata();
    getlenght();
  }, []);

  // color get by id
  const handleclick = async (color_id) => {
    await axios
      .get(`${ServerUrl}/getColorById?color_id=${color_id}`, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res.data.data);
        const i = res.data.data.length - 1;
        setColorName2(res.data.data[i].color_name);
        setColorid2(res.data.data[i].color_id);
        document.getElementById("Color_popup").style.display = "block";
        // console.log(res.data)

        // document.write(`${res.data.data} this is data`);
      });
  };
  //lenght api
  const getlenght = async () => {
    const res = await axios.get(`${ServerUrl}/getColorCount`, {
      headers: authHeader(),
    });
    const i = res.data.data.length - 1;

    setLenght(res.data.data[i].Total);
  };

  //update api

  const updateget = async () => {
    const data = {
      color_id: colorid2,
      color_name: colorname2,
    };

    await axios
      .patch(`${ServerUrl}/updateColor`, data, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res);
        toast.success("color type updates");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("something went wrong");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  };

  //post value
  const oninsertdata = (e) => {
    setColorName(e.target.value.replace(/[^a-z]{^1,2}/gi, " "));
    if (colorName.length <= 2) {
      setColordataerror("Enter colors name");
      setColorerrorpost(true);
    } else {
      setColorerrorpost(false);
    }
  };
  //insert api
  const ColorPost = async () => {
    alert("heloo");
    const data = {
      color_name: colorName,
    };
    await axios
      .post(`${ServerUrl}/insertColor`, data, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Successfully add product");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((er) => {
        toast.error("somthing went wrong");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      });
    // console.log(response.data.data);
  };
  //search data
  const onChangeSearch = (e) => {
    const searchdata = e.target.value;
    if (searchdata === "") {
      window.location.reload();
    }
    setSearchdata(searchdata);
  };
  // searchdata api
  const searchdataitems = {
    name: searchdata,
    page: 1,
    size: 10,
  };
  const searchapidata = async () => {
    await axios
      .post(`${ServerUrl}/searchColor`, searchdataitems, {
        headers: authHeader(),
      })
      .then((res) => {
        // console.log(res.data.data);
        setColor(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  // close popup model
  const modal = () => {
    document.getElementById("Color_popup").style.display = "none";
  };
  //update switch
  // const stautsupdate = (statusId) => {
  //   const upadteswtch = statusId;
  //   // console.log(upadteswtch, "helo", id);
  //   if (upadteswtch === 0) {
  //     console.log(upadteswtch === 1);
  //   } else if (upadteswtch === 1) {
  //     console.log(upadteswtch === 0);
  //   }
  // console.log(id);
  // if (upadteswtch === 1 && 0) {
  //   // console.log("hello");
  //   setUpadteswtch(upadteswtch);
  // } else if (upadteswtch === 0 && 1) {
  //   // console.log(upadteswtch);
  // }

  const upadteswitchdata = (id, statusId) => {
    const upadteswtch = statusId;
    console.log(upadteswtch);
    if (upadteswtch === 1) {
      console.log("active");
      // console.log(statusId);

      setUpadteswtch(upadteswtch === 0);
    } else if (upadteswtch === 0) {
      setUpadteswtch(upadteswtch === 1);
    }
    handlactive(id);
  };

  //active deactive api

  const handlactive = async (id, upadteswtch) => {
    // console.log(upadteswtch, "heello guys");

    await axios
      .patch(
        `${ServerUrl}/activateDeactivateColor`,
        {
          product_typeid: id,
          statusId: upadteswtch,
        },
        {
          headers: authHeader(),
        }
      )

      .then((res) => {
        // console.log(upadteswtch, "heello guys");
        const i = res.data.length - 1;
        console.log(`${res.data[i].statusId} this is the data`);
        setAllcolordata(res.data.data[i].statusId);
        // console.log(upadteswtch, "heello guys");
        //setColor(res.data);
        // setUpadteswtch(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="masterparemntdiv ">
        {/* heder start  */}
        <div className="ProductTypeheder">
          <div
            //   onClick={Backtomaster}
            onClick={() => navigate(-1)}
            className="masterIconeback"
          >
            <IoMdArrowRoundBack /> Color
          </div>
          <div>
            <div className="Serch_user">
              <div className="Productserch">
                <input
                  type="text"
                  placeholder="Search.."
                  name="search"
                  className="Productserchinder"
                  onChange={(e) => {
                    onChangeSearch(e);
                    searchapidata();
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "none" }}></div>
          </div>
        </div>
        <div className="types">{length}Color</div>
        {/* heder End  */}
        {/* body start  */}
        <div className="producttypeBody">
          <div className="leftsaidtabl">
            <table className="master_tabal">
              <thead>
                <tr className="driver_table_heading">
                  <th style={{ borderRadius: "8px 0px 0px 8px" }}>Sr.no</th>
                  <th>Color ID</th>
                  <th>Color Name</th>
                  <th>Status</th>

                  <th style={{ borderRadius: "0px 8px 8px 0px" }}>Edit</th>
                </tr>
              </thead>
              <br />
              <tbody>
                {color ? (
                  color.map((curent, ind) => {
                    return (
                      <>
                        <tr key={ind}>
                          <th scope="row">{ind + 1}</th>
                          <td>{curent.color_id}</td>
                          <td>{curent.color_name}</td>
                          {/* <td></td> */}

                          <td>
                            {/* <ReactSwitch
                              checked={checked}
                              onClick={() => handlactive()}
                              // onChange={handleChange}
                            /> */}
                            {/* {curent.statusId === 0 ? "active" : "deactive"} */}
                            <Toggle
                              defaultChecked={
                                curent.statusId === 1 ? true : false
                              }
                              icons={false}
                              id="doctor_toggle"
                              // checked={curent.statusId === 1 ? true : false}
                              onClick={() => {
                                upadteswitchdata(
                                  curent.color_id,
                                  curent.statusId
                                );
                              }}
                              // curent.statusId === 1
                              //   ? true
                              //   : false || curent.statusId === 0
                              //   ? false
                              //   : true;
                              // stautsupdate(curent.statusId);
                              // handlactive(curent.color_id);

                              // ref={ref}
                              //   // onChange={() => {
                              //   //   disableDoctor(item.doctormaster_id, doctorresult);
                              //   //   var id = item.doctormaster_id;
                              //   //   enableDoctor();
                              //   // }}
                            />
                          </td>
                          <td>
                            <MdEdit
                              onClick={() => handleclick(curent.color_id)}

                              //   key={index}
                              //   onClick={() => hanldeClick(item.color_id)}
                              //   id={item.color_id}
                            />
                          </td>
                        </tr>
                      </>
                    );
                  })
                ) : (
                  <>
                    <div>data not Available</div>
                  </>
                )}
              </tbody>
            </table>
          </div>
          <div className="rightsaidform">
            <form>
              <div className="productname">
                <label htmlFor="Product Type Name"> Color Name</label>
                <br />
                <input
                  // type="text"
                  name="colorName"
                  id=""
                  className="Productnamein"
                  value={colorName}
                  onChange={(e) => oninsertdata(e)}
                />{" "}
                <br />
                {colorerrorpost && (
                  <small style={{ color: "red", fontSize: 15 }}>
                    {colordataerror}
                  </small>
                )}
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="addprodttypebuthon" onClick={ColorPost}>
                + Add Color{" "}
              </div>
            </form>
          </div>
        </div>
        {/* body End  */}
      </div>
      {/* Popupbox Start */}
      <div id="Color_popup" style={{ display: "none" }}>
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
                      Color Name
                    </label>
                    <div className="control">
                      <input
                        className="Productnamein"
                        type="text"
                        value={colorname2}
                        onChange={(e) => {
                          setColorName2(e.target.value);
                          console.log(colorname2);
                        }}
                      />
                    </div>
                  </div>{" "}
                  <br />
                  <br />
                  <div
                    className="form-control-servic "
                    style={{ textAlign: "center" }}
                  >
                    <button
                      className="addprodttypebuthon"
                      onClick={() => updateget()}
                    >
                      update Color
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

export default Color;
