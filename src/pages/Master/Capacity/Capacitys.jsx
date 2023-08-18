import React, { useEffect, useState } from "react";
import "./Capacity.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // for ES6 modules
import axios from "axios";
import ServerUrl from "../../../Baseurl/ServerURL";
import authHeader from "../../../components/Login/auth-headers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCloseSharp } from "react-icons/io5";
function Capacitys() {
  const [items, setItems] = useState([]);
  const [allitems, setAllitems] = useState([]);
  const [capacityname1, setCapacityname1] = useState("");
  const [capacityid1, setCapacityid1] = useState("");
  //lenghte state
  const [lenght, setLenght] = useState("");
  // insert state//
  const [capacity_id, setcapacityid] = useState("");
  const [capaityname, setCapacityname] = useState("");
  //error satate
  const [dataerror, setDataerror] = useState("");
  const [errorpost, setErrorpost] = useState(false);
  //search state
  const [searchname, setSearchname] = useState("");

  let navigate = useNavigate();
  //get all data
  const data = {
    page: 1,
    size: 10,
  };
  //get alll data
  const getalldata = async () => {
    try {
      const res = await axios.post(`${ServerUrl}/getAllCapacity`, data, {
        headers: authHeader(),
      });
      console.log(res.data.data);
      setItems(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  //by id get data
  const handleclick = async (capacity_id) => {
    await axios
      .get(`${ServerUrl}/getCapacityById?capacity_id=${capacity_id}`, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res.data.data);
        const i = res.data.data.length - 1;

        setCapacityname1(res.data.data[i].capacity_name);
        setCapacityid1(res.data.data[i].capacity_id);
      });

    setCapacityname1();
    document.getElementById("Cepecity_popup").style.display = "block";
  };
  //update data
  const updatedata = async () => {
    const datas = {
      capacity_id: capacityid1,
      capacity_name: capacityname1,
    };
    await axios
      .patch(`${ServerUrl}/updateCapacity`, datas, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res.data);
        toast.success("successfully upadate product");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        toast.error("something went wrong");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  };
  //insert data post
  const oninsertdata = (e) => {
    setCapacityname(e.target.value.replace(/[^a-z]{^1,2}$/gi, " "));
    if (capaityname.lenght <= 3) {
      setDataerror("Enter colors name");
      setErrorpost(true);
    } else {
      setErrorpost(false);
    }
  };
  //insert data
  const insertCapecity = async () => {
    const data = {
      capacity_id: capacity_id,
      capacity_name: capaityname,
    };
    const res = await axios.post(`${ServerUrl}/insertCapacity`, data, {
      headers: authHeader(),
    });
    console.log(res.data);
  };
  //lenght data get
  const getlenghtdata = async () => {
    const res = await axios.get(`${ServerUrl}/getCapacityCount`, {
      headers: authHeader(),
    });

    const i = res.data.data.length - 1;
    console.log(res.data.data[i].Total);

    setLenght(res.data.data[i].Total);
  };
  useEffect(() => {
    getalldata();
    getlenghtdata();
  }, []);
  // Update byId  api End
  //search data
  const onChangeSearch = (e) => {
    const searchname = e.target.value;
    if (searchname === "") {
      window.location.reload();
    }
    setSearchname(searchname);
  };
  //search api
  const searchdata = {
    name: searchname,
    page: 1,
    size: 10,
  };
  const searchapidata = async () => {
    await axios
      .post(`${ServerUrl}/searchCapacity`, searchdata, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res.data.data);
        console.log(allitems);
        // setItems(res.data.data);
        setAllitems(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  ///active deactive apicalling
  const activedata = {
    capacity_id: 1,
    statusId: 0,
  };
  const handleactivedata = async () => {
    await axios
      .patch(`${ServerUrl}/activateDeactivateCapacity`, activedata, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res.data);
        // setItems(res.data);
        setAllitems(res.data);
      });
  };

  // close popup model
  const modal = () => {
    document.getElementById("Cepecity_popup").style.display = "none";
  };
  return (
    <div>
      <div className="masterparemntdiv ">
        {/* heder start  */}
        <div className="ProductTypeheder">
          <div className="masterIconeback " onClick={() => navigate(-1)}>
            <IoMdArrowRoundBack /> Capacity
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
        <div className="types">{lenght} Capacity</div>
        {/* heder End  */}
        {/* body start  */}
        <div className="producttypeBody">
          <div className="leftsaidtabl">
            <table className="master_tabal">
              <thead>
                <tr className="driver_table_heading">
                  <th style={{ borderRadius: "8px 0px 0px 8px" }}>Sr.no</th>
                  <th>Capacity ID</th>
                  <th>Capacity Name</th>
                  <th>Status</th>

                  <th style={{ borderRadius: "0px 8px 8px 0px" }}>Edit</th>
                </tr>
              </thead>
              <br />
              <tbody>
                {items ? (
                  items.map((curent, ind) => {
                    return (
                      <tr key={ind}>
                        <th scope="row">{ind + 1}</th>
                        <td>{curent.createdById}</td>
                        <td>{curent.capacity_name}</td>

                        <td>
                          <Toggle
                            defaultChecked={
                              curent.statusId === 1 ? true : false
                            }
                            icons={false}
                            id="doctor_toggle"
                            onClick={() => handleactivedata()}
                          />
                        </td>
                        <td>
                          <MdEdit
                            onClick={() => handleclick(curent.capacity_id)}
                          />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div>data not Available</div>
                )}
              </tbody>
            </table>
          </div>
          <div className="rightsaidform">
            <div className="productname">
              <label htmlFor="Product Type Name"> Capacity</label>
              <br />
              <input
                // type="text"
                name=""
                id=""
                className="Productnamein"
                value={capaityname}
                onChange={oninsertdata}
              />
              <br />
              {errorpost && (
                <small style={{ color: "red", fontSize: 15 }}>
                  {dataerror}
                </small>
              )}
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="addprodttypebuthon" onClick={insertCapecity}>
              + Add Capacity
            </div>
          </div>
        </div>
        {/* body End  */}

        {/* Popupbox Start */}
        <div id="Cepecity_popup" style={{ display: "none" }}>
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
                        Cepecity Name
                      </label>
                      <div className="control">
                        <input
                          className="Productnamein"
                          type="text"
                          value={capacityname1}
                          onChange={(e) => setCapacityname1(e.target.value)}
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
                        onClick={updatedata}
                      >
                        update Cepecity
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer className="Tost" /> */}
    </div>
  );
}

export default Capacitys;
