import React, { useEffect, useState } from "react";
import "./ProductType.css";
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
function ProductType() {
  const IMG = "https://cerbosys.in:3200/producttype/";
  let navigate = useNavigate();
  const [Data, setData] = useState("");
  const [alldata, setAlldata] = useState([]);
  const [Lenght, setLenght] = useState("");
  //search state
  // const [searchdata, setSearchdata] = useState([]);
  const [search, setSearch] = useState("");
  //update switch state
  const [upadteswtch, setUpadteswtch] = useState("");

  const Backtomaster = () => {
    let path = `/master`;
    navigate(path);
  };
  // get all color api colling
  const data = {
    page: 1,
    size: 10,
  };
  const fetchData = async () => {
    await axios
      .post(`${ServerUrl}/getAllProductType`, data, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res.data.data);

        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchcountdata = async () => {
    try {
      const res = await axios.get(`${ServerUrl}/getProductTypeCount`, {
        headers: authHeader(),
      });
      const i = res.data.data.length - 1;
      console.log(res.data.data);
      setLenght(res.data.data[i].Total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchcountdata();
  }, []);

  //post service data states
  const [ProductImagePost, setProductImagePost] = useState("");
  console.log(ProductImagePost);
  const [ProductTypeName, setProductTypeName] = useState("");
  console.log(ProductTypeName);
  const [errorProductTypeNamePost, seterrorProductTypeNamePost] = useState("");
  const [errorProductTypeName, seterrorProductTypeName] = useState(false);
  const [imageshow, setImageshow] = useState("");
  const [errorsicon, setErroricon] = useState(false);
  const [errorsicons, setErroricons] = useState("");
  // getdata by id
  const [prTypeId, setprTypeId] = useState();
  console.log(prTypeId);
  const [PrTypeName, setPrTypeName] = useState("");
  console.log(PrTypeName);
  const [PrTypeImage, setPrTypeImage] = useState("");
  console.log(PrTypeImage);
  const [imageshowgetbyid, setimageshowgetbyid] = useState("");
  // post Product Type data
  const OnProductTypeName = (e) => {
    const ProductTypeName = e.target.value.replace(/[^a-z]{^1,2}/gi, " ");
    setProductTypeName(ProductTypeName);
    if (ProductTypeName.length <= 3) {
      seterrorProductTypeNamePost("Enter Product Type Name");
      seterrorProductTypeName(true);
    } else {
      seterrorProductTypeName(false);
    }
  };
  const onImageuplode = (e) => {
    const blogimage = e.target.files[0];
    console.log("image", blogimage);
    setImageshow(URL.createObjectURL(e.target.files[0]));
    setProductImagePost(blogimage);
    document.getElementById("uplodeimag").style.display = "block";

    if (blogimage) {
      setErroricon("provide job icon");
      setErroricons(true);
    } else {
      setErroricon(false);
    }
  };
  const ProductTypePost = () => {
    var formdata = new FormData();
    formdata.append("product_typename", ProductTypeName);
    formdata.append("product_typeimage", ProductImagePost);
    console.log(formdata);
    fetch(ServerUrl + "/insertProductType", {
      headers: authHeader(),
      method: "post",
      body: formdata,
    })
      .then((res) =>
        res.json().then((formdata) => {
          console.log("Response", formdata);

          toast.success(" Succefully Add Product Type");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
      )
      .catch((err) => {
        toast.error("Product Type not post");
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
    document.getElementById("imageshow").style.display = "block";
    document.getElementById("imageshowcaninapi").style.display = "none";
  };
  // Update get bye id  .get(`${ServerUrl}/getBrandById?brand_id=${brand_id}`, {
  const hanldeClick = (product_typeId) => {
    console.log(product_typeId);
    axios
      .get(`${ServerUrl}/getProductTypeById?product_typeid=${product_typeId}`, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res);
        if (res.data.data) {
          console.log(res.data.data);
          const i = res.data.data.length - 1;
          // localStorage.getItem(userToken);
          setprTypeId(res.data.data[i].product_typeId);
          setPrTypeName(res.data.data[i].product_typename);
          setPrTypeImage(res.data.data[i].product_typeimage.substr(21));
          console.log(res.data.data[i].product_typeimage.substr(21));
        }
        document.getElementById("ProductType_popup").style.display = "block";
      });
    // console.log(`${product_typeId} tyhis is jdskrh`);
  };

  // -----upadte bye idupdateCapacity

  const UpdateProduct_Type = () => {
    var formdata = new FormData();
    formdata.append("product_typeid", prTypeId);
    // formdata.append("image", setPrTypeImage);PrTypeImage
    formdata.append("product_typeimage", PrTypeImage);
    formdata.append("product_typename", PrTypeName);
    console.log(`${formdata} this is the data`);
    // fetch(`${ServerUrl}/updatePrductType/${prTypeId}`, {
    fetch(`${ServerUrl}/updateProductType`, {
      headers: authHeader(),
      method: "PATCH",
      body: formdata,
    })
      .then((res) =>
        res.json().then((formdata) => {
          console.log("Response", formdata);
          toast.success("Product type update sucsefully");
          console.log(formdata);
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

  const onChangeSearch = (e) => {
    const search = e.target.value;
    if (search === "") {
      window.location.reload();
    }
    setSearch(search);
  };
  const SearchFilter = {
    name: search,
    page: 1,
    size: 10,
  };
  const searchAPI = () => {
    console.log("search", search);

    axios
      .post(`${ServerUrl}/searchProductType`, SearchFilter, {
        headers: authHeader(),
      })
      .then((res) => {
        // console.log(res);
        setData(res.data.data);
        setAlldata(res.data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  //update switch
  const upadteswitch = (id) => {
    setUpadteswtch(!upadteswtch);
    handleactivedata(id);
    // alert("hello");
  };
  //active deactive api calling

  const handleactivedata = async (id) => {
    await axios
      .patch(
        `${ServerUrl}/activateDeactivateProductType`,
        { product_typeid: id, statusId: upadteswtch },
        {
          headers: authHeader(),
        }
      )
      .then((res) => {
        console.log(res.data);
        console.log(alldata);
        // setData(res.data);
        setAlldata(res.data);
      });
  };

  // close popup model
  const modal = () => {
    document.getElementById("ProductType_popup").style.display = "none";
  };

  return (
    <>
      <div className="masterparemntdiv ">
        {/* heder start  */}
        <div className="ProductTypeheder">
          <div onClick={Backtomaster} className="masterIconeback">
            <IoMdArrowRoundBack /> ProductType
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
        <div className="types">{Lenght} Product Types</div>
        {/* heder End  */}
        {/* body start  */}
        <div className="producttypeBody purches_data">
          <div className="leftsaidtabl">
            <table className="master_tabal">
              <thead>
                <tr className="driver_table_heading">
                  <th style={{ borderRadius: "8px 0px 0px 8px" }}>Sr.no</th>
                  <th>Product Type ID</th>
                  <th>Product Type Name</th>
                  <th>Status</th>

                  <th style={{ borderRadius: "0px 8px 8px 0px" }}>Edit</th>
                </tr>
              </thead>
              <br />
              <tbody>
                {Data ? (
                  Data.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.product_typeId}</td>
                      <td>{item.product_typename}</td>
                      <td>
                        <Toggle
                          defaultChecked={item.statusId === 1 ? true : false}
                          icons={false}
                          id="doctor_toggle"
                          onClick={() => upadteswitch(item.product_typeId)}
                          // onClick={() => handleactivedata(item.product_typeId)}
                          // ref={ref}
                          // onChange={() => {
                          //   disableDoctor(item.doctormaster_id, doctorresult);
                          //   var id = item.doctormaster_id;
                          //   enableDoctor();
                          // }}
                        />
                      </td>
                      <td className="pointer">
                        <MdEdit
                          key={index}
                          onClick={() => hanldeClick(item.product_typeId)}
                          id={item.product_typeId}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className="container">No productType Available</div>
                )}
              </tbody>
            </table>
          </div>
          <div className="rightsaidform">
            <div className="productname">
              <label htmlFor="Product Type Name"> Product Type Name</label>
              <br />
              <input
                // type="text"
                name=""
                id=""
                className="Productnamein"
                value={ProductTypeName}
                onChange={(e) => OnProductTypeName(e)}
              />{" "}
              <br />
              {errorProductTypeName && (
                <small style={{ color: "red", fontSize: 15 }}>
                  {errorProductTypeNamePost}
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
                  file={ProductImagePost}
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
            <div
              className="addprodttypebuthon"
              onClick={ProductTypePost}
              disabled={
                ProductTypeName === "" || ProductImagePost === "" ? true : false
              }
            >
              + Add Product Type
            </div>
          </div>
        </div>
        {/* body End  */}
      </div>
      {/* Popupbox Start */}
      <div id="ProductType_popup" style={{ display: "none" }}>
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
                      Product Type Name
                    </label>
                    <div className="control">
                      <input
                        className="input is-normal  control servic-form-control "
                        type="text"
                        value={PrTypeName}
                        // value={product_typename}
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
                      <img
                        id="imageshowcaninapi"
                        style={{ display: "block" }}
                        // className="serviceimg"
                        src={IMG + PrTypeImage}
                        // product_typeimage

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
                      onClick={UpdateProduct_Type}
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
    </>
  );
}

export default ProductType;
