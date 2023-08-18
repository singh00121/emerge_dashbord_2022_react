import React, { useEffect, useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // for ES6 modules
import "./Product.css";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Laptop from "../../images/Product/laptop.png";
import { useNavigate } from "react-router-dom";
import ServerUrl from "../../Baseurl/ServerURL";
import authHeader from "../../components/Login/auth-headers";
import axios from "axios";
const Product = () => {
  const ProdIMG = "https://cerbosys.in:3200/product/";
  let navigate = useNavigate();
  const Addproduct = () => {
    // alert("hiiiii");
    let path = `/product/addproduct`;
    navigate(path);
  };
  // get all color api colling

  const [Product, setProduct] = useState("");
  const [QulityType, setQulityType] = useState("");
  const [Brand, setBrand] = useState("");
  const [Color, setColor] = useState("");
  const [Capecity, setCapecity] = useState("");
  const [Speed, setSpeed] = useState("");

  const fetchProduct = async () => {
    const data = {
      page: 1,
      size: 100,
    };
    await axios
      .post(`${ServerUrl}/getAllProducts`, data, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res.data.data);

        setProduct(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchQulityType = async () => {
    await axios
      .get(`${ServerUrl}/getAllQualityType`, {
        headers: authHeader(),
      })
      .then((res) => {
        const response = res.data.data;

        setQulityType(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchBrand = async () => {
    await axios
      .get(`${ServerUrl}/getAllBrand`, {
        headers: authHeader(),
      })
      .then((res) => {
        const response = res.data.data;

        setBrand(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchColor = async () => {
    await axios
      .get(`${ServerUrl}/getAllColor`, {
        headers: authHeader(),
      })
      .then((res) => {
        const response = res.data.data;

        setColor(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchCapecity = async () => {
    await axios
      .get(`${ServerUrl}/getAllCapacity`, {
        headers: authHeader(),
      })
      .then((res) => {
        const response = res.data.data;

        setCapecity(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchSpeed = async () => {
    await axios
      .get(`${ServerUrl}/getAllSpeed`, {
        headers: authHeader(),
      })
      .then((res) => {
        const response = res.data.data;

        setSpeed(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchProduct();
    fetchQulityType();
    fetchBrand();
    fetchColor();
    fetchCapecity();
    fetchSpeed();
  }, []);

  return (
    <>
      <div className="Product_Top_contener">
        <div>
          <h3 className="font-weight-bold p-2 underline text-capitalize">
            Products
          </h3>
        </div>
        {/* First row start */}
        <div className="Product_filter">
          <div className="div1">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option>Select product Type</option>
              {Product ? (
                Product.map((item, index) => (
                  <option>{item.product_type_name}</option>
                ))
              ) : (
                <div className="container">No product Available</div>
              )}
            </select>
          </div>
          <div className="div1">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option>Select Quality Types</option>
              {QulityType ? (
                QulityType.map((item, index) => (
                  <option>{item.quality_type_name}</option>
                ))
              ) : (
                <div className="container">No QulityType Available</div>
              )}
            </select>
          </div>
          <div className="div1">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option>Select Brand</option>

              {Brand ? (
                Brand.map((item, index) => <option>{item.brand_name}</option>)
              ) : (
                <div className="container">No brand Available</div>
              )}
            </select>
          </div>
          <div className="div1">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option>Select Color</option>

              {Color ? (
                Color.map((item, index) => <option>{item.color_name}</option>)
              ) : (
                <div className="container">No color Available</div>
              )}
            </select>
          </div>

          <div className="div1">
            <div
              class=""
              name="cars"
              className="Select_product addproduct"
              onClick={Addproduct}
            >
              <AiOutlinePlusSquare className="iconspro" />
              Add Product
            </div>
          </div>
        </div>
        {/* First row End */}
        {/* Second row start */}

        <div className="Product_filter2">
          <div className="div1">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option>Select Capecity</option>

              {Capecity ? (
                Capecity.map((item, index) => (
                  <option>{item.capacity_name}</option>
                ))
              ) : (
                <div className="container">No capacity Available</div>
              )}
            </select>
          </div>
          <div className="div1">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option>Select Speed</option>

              {Speed ? (
                Speed.map((item, index) => <option>{item.speed_name}</option>)
              ) : (
                <div className="container">No Speed Available</div>
              )}
            </select>
          </div>

          <div className="div1">
            <select style={{ display: "none" }}></select>
          </div>
          <div className="div1">
            <select style={{ display: "none" }}></select>
          </div>

          <div className="div1">
            <div style={{ display: "none" }}></div>
          </div>
          <div className="div1">
            <div style={{ display: "none" }}></div>
          </div>
          <div className="div1">
            <div style={{ display: "none" }}></div>
          </div>
          <div className="div1">
            <div style={{ display: "none" }}></div>
          </div>
          <div className="div1">
            <div style={{ display: "none" }}></div>
          </div>
          <div className="div1">
            <div style={{ display: "none" }}></div>
          </div>
        </div>
        {/* Second row End */}
        {/* Therd row start */}
        <div className="procuctTherdrow">
          <div className="allproduct">100 product</div>
          <div className="Productserch">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              className="Productserchinder"
            />
          </div>

          <div className="div1 Recent">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option>Select Capecity</option>

              {Capecity ? (
                Capecity.map((item, index) => (
                  <option>{item.capacity_name}</option>
                ))
              ) : (
                <div className="container">No capacity Available</div>
              )}
            </select>
          </div>

          <div className="Both">
            <div>
              <input
                className="is-checkradio is-rtl"
                id="exampleRtlRadioInline4"
                type="radio"
                value="open"
                name="exampleRtlRadioInline"
              />
              <label for="exampleRtlRadioInline4" style={{ margin: 20 }}>
                Both
              </label>
            </div>
          </div>
          <div className="availeble">
            {" "}
            <div>
              <input
                className="is-checkradio is-rtl"
                id="exampleRtlRadioInline4"
                type="radio"
                value="open"
                name="exampleRtlRadioInline"
              />
              <label for="exampleRtlRadioInline4" style={{ margin: 20 }}>
                Availeble
              </label>
            </div>
          </div>
          <div className="outofStock">
            {" "}
            <div>
              <input
                className="is-checkradio is-rtl"
                id="exampleRtlRadioInline4"
                type="radio"
                value="open"
                name="exampleRtlRadioInline"
              />
              <label for="exampleRtlRadioInline4" style={{ margin: 20 }}>
                Out Of Stock
              </label>
            </div>
          </div>
        </div>
        {/* Therd row End */}
      </div>
      {/* Main contener start  */}
      <div className="purches_data">
        {Product ? (
          Product.map((item, index) => (
            <div className="Product_main_contener">
              <div className="purches_data">
                <div className="Content_product tavlcolor">
                  <div className="Chekbox">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                  </div>
                  <div>
                    <img
                      className="Product_image"
                      src={ProdIMG + `${item.product_img1.substr(17)}`}
                      alt=""
                    />
                    <img
                      src={ProdIMG + `${item.product_img1.substr(17)}`}
                      alt=""
                    />
                   
                  </div>
                  <img
                      src={ProdIMG + `${item.product_img1.substr(17)}`}
                      alt=""
                    />
                  <div className="Name_delails">
                  <img
                      src={ProdIMG + `${item.product_img1.substr(17)}`}
                      alt=""
                    />
                    <div className="information">
                      <div>Apple</div>
                      <div>{item.product_id}</div>
                      <div className="Enabl">Enabeld</div>
                    </div>
                    {item.product_name}
                  </div>
                  <div className="Product_brand">
                    <div className="brand_bg_color">Apple</div>
                    <div className="brand_bg_color">56 GB</div>
                  </div>
                  <div className="Product_color">
                    <div className="brand_bg_color">Black</div>
                    <div className="brand_bg_color">Red</div>
                  </div>
                  <div className="price1"> {item.product_price}</div>
                  <div className="price1"> {item.rent_price}</div>
                  <div className="brand_bg_color">Edit</div>
                  <div className="div1">
                    <Toggle
                      defaultChecked={true}
                      icons={false}
                      id="doctor_toggle"
                      // ref={ref}
                      // onChange={() => {
                      //   disableDoctor(item.doctormaster_id, doctorresult);
                      //   var id = item.doctormaster_id;
                      //   enableDoctor();
                      // }}
                    />
                    {/* <label class="switch">
       <input type="checkbox" checked />
       <span class="slider round"></span>
     </label> */}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="container">No Enquiry Available</div>
        )}
      </div>
      {/* Main contener End  */}
    </>
  );
};

export default Product;
