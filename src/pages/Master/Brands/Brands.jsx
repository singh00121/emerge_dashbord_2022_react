import React, { useEffect, useState } from "react";
import "./Brands.css";
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

function Brands() {
  const IMG = "https://cerbosys.in:3200/brand/";
  const [Data, setData] = useState("");
  const [alldata, setAlldata] = useState([]);
  const [Lenght, setLenght] = useState();
  console.log(Lenght);

  //post service data states
  const [BrandImagePost, setBrandImagePost] = useState("");
  console.log(BrandImagePost);
  const [BrandName, setBrandName] = useState("");
  console.log(BrandName);
  const [errorBrandNamePost, seterrorBrandNamePost] = useState("");
  const [errorBrandName, seterrorBrandName] = useState(false);
  const [imageshow, setImageshow] = useState("");
  const [errorsicon, setErroricon] = useState(false);
  const [errorsicons, setErroricons] = useState("");
  // getdata by id
  const [prTypeId, setprTypeId] = useState();
  // console.log(prTypeId);
  const [PrTypeName, setPrTypeName] = useState("");
  const [PrTypeImage, setPrTypeImage] = useState("");

  console.log(PrTypeImage);
  const [imageshowgetbyid, setimageshowgetbyid] = useState("");

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
      size: 10,
    };
    await axios
      .post(`${ServerUrl}/getAllBrands`, data, {
        headers: authHeader(),
      })
      .then((res) => {
        const response = res.data.data;
        console.log(response);
        console.log(res.data.data.length);
        setAlldata(res.data.data);
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchTotalData = async () => {
    await axios
      .get(`${ServerUrl}/getBrandCount`, {
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

  // post Product Type data
  const onchnagbrand = (e) => {
    const BrandName = e.target.value.replace(/[^a-z]{^1,2}/gi, " ");
    setBrandName(BrandName);
    if (BrandName.length <= 3) {
      seterrorBrandNamePost("Enter Brand Name");
      seterrorBrandName(true);
    } else {
      seterrorBrandName(false);
    }
  };
  const onImageuplode = (e) => {
    const blogimage = e.target.files[0];
    console.log("image", blogimage);
    setImageshow(URL.createObjectURL(e.target.files[0]));
    setBrandImagePost(blogimage);
    document.getElementById("uplodeimag").style.display = "block";

    if (blogimage) {
      setErroricon("provide job icon");
      setErroricons(true);
    } else {
      setErroricon(false);
    }
  };

  const BrandPost = () => {
    var formdata = new FormData();
    formdata.append("brand_name", BrandName);
    formdata.append("brand_image", BrandImagePost);
    console.log(formdata);
    fetch(ServerUrl + "/insertBrand", {
      headers: authHeader(),
      method: "post",
      body: formdata,
    })
      .then((res) =>
        res.json().then((formdata) => {
          console.log("Response", formdata);

          toast.success(" Succefully Add Brand");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
      )
      .catch((err) => {
        toast.error(" Brand not post");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      });
  };

  const onchangeImage = (e) => {
    const blogimage = e.target.files[0];
    console.log("image", blogimage);
    setimageshowgetbyid(URL.createObjectURL(e.target.files[0]));
    setPrTypeImage(blogimage);
    console.log(blogimage);
    document.getElementById("imageshow").style.display = "block";
    document.getElementById("imageshowcaninapi").style.display = "none";
  };

  // Update get bye id
  const hanldeClick = (brand_id) => {
    axios
      .get(`${ServerUrl}/getBrandById?brand_id=${brand_id}`, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res);
        if (res.data.data) {
          const i = res.data.data.length - 1;
          // localStorage.getItem(userToken);
          setprTypeId(res.data.data[i].brand_id);
          setPrTypeName(res.data.data[i].brand_name);
          setPrTypeImage(res.data.data[i].brand_image.substr(15));
          console.log(res.data.data[i].brand_image.substring(15));
        }
        document.getElementById("Brands_popup").style.display = "block";
        // console.log(res.data.data);
      });
  };

  // -----upadte bye id
  const UpdateBrand = () => {
    var formdata = new FormData();
    formdata.append("brand_id", prTypeId);
    formdata.append("brand_name", PrTypeName);
    formdata.append("brand_image", PrTypeImage);
    console.log(PrTypeImage);
    console.log(formdata);
    fetch(`${ServerUrl}/updateBrand`, {
      headers: authHeader(),
      method: "PATCH",
      body: formdata,
    })
      .then((res) =>
        res.json().then((formdata) => {
          console.log("Response", formdata);
          toast.success("Brand update sucsefully");
          console.log(res);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
      )
      .catch((err) => {
        console.log(err);
        toast.error("something went wrong");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  };

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
      .post(`${ServerUrl}/searchBrand`, SearchFilter, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res);
        console.log(alldata);
        setData(res.data.data);
        setAlldata(res.data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  //active deactive api

  const activedata = {
    statusId: 1,
    brand_id: 1,
  };
  const handlactive = async () => {
    await axios
      .patch(`${ServerUrl}/activateDeactivateBrand`, activedata, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res.data);
        setAlldata(res.data);
      });
  };

  // close popup model
  const modal = () => {
    document.getElementById("Brands_popup").style.display = "none";
  };
  return (
    <div>
      <div className="masterparemntdiv ">
        {/* heder start  */}
        <div className="ProductTypeheder">
          <div onClick={Backtomaster} className="masterIconeback">
            <IoMdArrowRoundBack /> Brands
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
        <div className="types">{Lenght} Brands</div>
        {/* heder End  */}
        {/* body start  */}
        <div className="producttypeBody">
          <div className="leftsaidtabl">
            <table className="master_tabal">
              <thead>
                <tr className="driver_table_heading">
                  <th style={{ borderRadius: "8px 0px 0px 8px" }}>Sr.no</th>
                  <th>Brand ID</th>
                  <th>Brand Name</th>
                  <th>Status</th>

                  <th style={{ borderRadius: "0px 8px 8px 0px" }}>Edit</th>
                </tr>
              </thead>
              <br />
              <tbody>
                {Data ? (
                  Data.map((item, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.brand_id}</td>
                      <td>{item.brand_name}</td>

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
                          onClick={() => hanldeClick(item.brand_id)}
                          id={item.brand_id}
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
              <label htmlFor="Product Type Name"> Brand Name</label>
              <br />
              <input
                // type="text"
                name=""
                id=""
                className="Productnamein"
                value={BrandName}
                onChange={(e) => onchnagbrand(e)}
                // onChange={OnBrandName}
              />
              <br></br>
              {errorBrandName && (
                <small style={{ color: "red", fontSize: 15 }}>
                  {errorBrandNamePost}
                </small>
              )}
            </div>
            <br />
            <div className="field">
              <label className="label" style={{ color: "#000000" }}>
                Files
              </label>
              <div className="control">
                <input
                  type="file"
                  file={BrandImagePost}
                  id="myFile"
                  name="filename"
                  required
                  multiple={true}
                  className=" control-file form-control "
                  onChange={onImageuplode}
                />
              </div>

              {errorsicon && (
                <small style={{ color: "red", fontSize: 15 }}>
                  {errorsicons}
                </small>
              )}
              <div className="prescription_update_popup_image">
                <img
                  style={{ display: "none" }}
                  id="uplodeimag"
                  alt="."
                  src={imageshow}
                  className="prescriptionImage"
                />
              </div>
            </div>
            <br />
            <div className="addprodttypebuthon" onClick={BrandPost}>
              + Add Brand
            </div>
          </div>
        </div>
        {/* body End  */}
      </div>

      {/* Popupbox Start */}
      <div id="Brands_popup" style={{ display: "none" }}>
        <div className="enquiryPopup">
          <div className=" conteners ">
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
                      Product Type Name
                    </label>
                    <div className="control">
                      <input
                        className="input is-normal  control servic-form-control "
                        type="text"
                        value={PrTypeName}
                        onChange={(e) => {
                          setPrTypeName(e.target.value);
                          console.log(PrTypeName);
                        }}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" style={{ color: "#000000" }}>
                      Files
                    </label>
                    <div className="control">
                      <input
                        type="file"
                        file={PrTypeImage}
                        id="myFile"
                        name="filename"
                        required
                        multiple={true}
                        className=" control-file form-control "
                        onChange={onchangeImage}
                      />
                    </div>

                    <div className="prescription_update_popup_image">
                      <div>{IMG + PrTypeImage}</div>
                      <img
                        id="imageshowcaninapi"
                        // style={{ display: 'block' }}
                        // className="serviceimg"
                        src={IMG + PrTypeImage}
                        alt="i"
                      />
                      <img
                        id="imageshow"
                        style={{ display: "none" }}
                        src={imageshowgetbyid}
                        alt="i"
                        className="prescriptionImage"
                      />
                    </div>
                  </div>
                  <div
                    className="form-control-servic "
                    style={{ textAlign: "center" }}
                  >
                    <button
                      className=" addprodttypebuthon"
                      onClick={UpdateBrand}
                    >
                      update ProductType
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

export default Brands;
