import React, { useEffect, useState } from "react";
import "./QualityType.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // for ES6 modules
import ServerUrl from "../../../Baseurl/ServerURL";
import authHeader from "../../../components/Login/auth-headers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { IoCloseSharp } from "react-icons/io5";
function QualityType() {
  const [items, setItems] = useState("");
  const [allitems, setAllitems] = useState([]);
  const [Lenght, setLenght] = useState("");
  console.log(Lenght);

  // const [allqualitydata, setAllqualitydata] = useState([""]);

  const [QualityName, setQualityName] = useState("");
  console.log(QualityName);
  // const [QualityId, setQualityId] = useState("");
  const [errorQualityNamePost, seterrorQualityNamePost] = useState("");
  const [errorQualityName, seterrorQualityName] = useState(false);

  const [prTypeId, setprTypeId] = useState();
  console.log(prTypeId);
  const [PrTypeName, setPrTypeName] = useState("");
  console.log(PrTypeName);

  const [search, setSearch] = useState("");

  let navigate = useNavigate();
  const Backtomaster = () => {
    let path = `/master`;
    navigate(path);
  };

  // get all data  start
  const fetchData = async () => {
    const data = {
      page: 1,
      size: 20,
    };
    await axios
      .post(`${ServerUrl}/getAllQualityType`, data, {
        headers: authHeader(),
      })
      .then((res) => {
        setAllitems(res.data.data);
        setItems(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchTotalData = async () => {
    await axios
      .get(`${ServerUrl}/getQualityTypeCount`, {
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

  // get all data  End

  // post api start

  const OnQualityName = (e) => {
    const QualityName = e.target.value.replace(/[^a-z]{^1,2}/gi, " ");
    setQualityName(QualityName);
    if (QualityName.length <= 3) {
      seterrorQualityNamePost("Enter quality name");
      seterrorQualityName(true);
    } else {
      seterrorQualityName(false);
    }
  };
  const Data = {
    quality_typename: QualityName,
  };
  const QualityPost = () => {
    axios
      .post(ServerUrl + "/insertQualityType", Data, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log("Response", res);
        console.log(res);
        toast.success("QualityType post Successfully");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("QualityType not post");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      });
  };

  // post api End

  // Get byId  api start https://cerbosys.in:3200/emerge/admin/getQualityTypeById?quality_typeid=1
  const hanldeClick = async (quality_typeId) => {
    const res = await axios.get(
      `${ServerUrl}/getQualityTypeById?quality_typeid=${quality_typeId}`,
      {
        headers: authHeader(),
      }
    );

    console.log(res);
    if (res.data.data) {
      const i = res.data.data.length - 1;
      setprTypeId(res.data.data[i].quality_typeId);
      setPrTypeName(res.data.data[i].quality_typename);
    }
    document.getElementById("Quality_popup").style.display = "block";
    // console.log(res.data.data);
  };

  // Update byId  api Start
  const Data2 = {
    quality_typeid: prTypeId,
    quality_typename: PrTypeName,
  };
  // console.log(Data2);
  const UpdateQuality = () => {
    axios
      .patch(`${ServerUrl}/updateQualityType`, Data2, {
        headers: authHeader(),
      })
      .then((res) => {
        toast.success("QualityType update sucsefully");
        console.log(res.data);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
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
      .post(`${ServerUrl}/searchQualityType`, SearchFilter, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res);
        console.log(allitems);
        // setItems(res.data.data);
        setAllitems(res.data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  //active deactive api

  const handlactive = async (quality_typeId) => {
    await axios
      .patch(
        `${ServerUrl}/activateDeactivateQualityType`,
        {
          quality_typeId: quality_typeId,
          statusId: 0,
        },
        {
          headers: authHeader(),
        }
      )
      .then((res) => {
        setAllitems(res.data);
      });
  };

  // close popup model
  const modal = () => {
    document.getElementById("Quality_popup").style.display = "none";
  };

  return (
    <div>
      <div className="masterparemntdiv ">
        {/* header start  */}
        <div className="ProductTypeheder">
          <div onClick={Backtomaster} className="masterIconeback">
            <IoMdArrowRoundBack /> QualityType
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
                    searchAPI();
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "none" }}></div>
          </div>
        </div>
        <div className="types">{Lenght} QualityType</div>
        {/* header End  */}
        {/* body start  */}
        <div className="producttypeBody">
          <div className="leftsaidtabl">
            <table className="master_tabal">
              <thead>
                <tr className="driver_table_heading">
                  <th style={{ borderRadius: "8px 0px 0px 8px" }}>Sr.no</th>
                  <th>QualityType ID</th>
                  <th>QualityType Name</th>
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
                      <td>{item.quality_typeId}</td>
                      <td>{item.quality_typename}</td>

                      <td>
                        <Toggle
                          defaultChecked={item.statusId === 1 ? true : false}
                          icons={false}
                          id="doctor_toggle"
                          onClick={() => handlactive(item.quality_typeId)}
                        />
                      </td>
                      <td>
                        <MdEdit
                          key={index}
                          onClick={() => hanldeClick(item.quality_typeId)}
                          id={item.quality_typeId}
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
              <label htmlFor="Product Type Name"> QualityType</label>
              <br />
              <input
                // type="text"
                name=""
                id=""
                className="Productnamein"
                value={QualityName}
                onChange={(e) => OnQualityName(e)}
                // onChange={(e) => {
                //   setQualityName(e.target.value);
                //   console.log(QualityType);
                // }}
              />
            </div>
            <br />
            <br />
            {errorQualityName && (
              <small style={{ color: "red", fontSize: 15 }}>
                {errorQualityNamePost}
              </small>
            )}
            <br />
            <br />
            <div className="addprodttypebuthon" onClick={QualityPost}>
              + Add Capacity
            </div>
          </div>
        </div>
        {/* body End  */}
      </div>

      {/* Popupbox Start */}
      <div id="Quality_popup" style={{ display: "none" }}>
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
                      Quality Name
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
                  </div>{" "}
                  <br />
                  <br />
                  <div
                    className="form-control-servic "
                    style={{ textAlign: "center" }}
                  >
                    <button
                      className="addprodttypebuthon"
                      onClick={UpdateQuality}
                    >
                      update Quality
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

export default QualityType;
