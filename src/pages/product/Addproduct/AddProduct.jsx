import React, { useEffect, useState } from 'react';
import './AddProduct.css';
import pc1 from '../../../images/Product//pc1.jpg';
import pc2 from '../../../images/Product//pc1.jpg';
import pc3 from '../../../images/Product//pc1.jpg';
import pc4 from '../../../images/Product//pc1.jpg';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import authHeader from '../../../components/Login/auth-headers';
import ServerUrl from '../../../Baseurl/ServerURL';
import axios from 'axios';

function AddProduct() {
  const [images, setImages] = useState([]);
  const handleMultipleImages = (evnt) => {
    const selectedFIles = [];
    const targetFiles = evnt.target.files;
    const targetFilesObject = [...targetFiles];
    targetFilesObject.map((file) => {
      return selectedFIles.push(URL.createObjectURL(file));
    });
    setImages(selectedFIles);
  };

  const [Product, setProduct] = useState('');
  const [QulityType, setQulityType] = useState('');
  const [Brand, setBrand] = useState('');
  const [Color, setColor] = useState('');
  const [Capecity, setCapecity] = useState('');
  const [Speed, setSpeed] = useState('');
  const fetchProduct = async () => {
    await axios
      .get(`${ServerUrl}/getAllProduct`, {
        headers: authHeader(),
      })
      .then((res) => {
        const response = res.data.data;
        console.log(response);
        console.log(res.data);
        // setLenght(res.data.data.length);
        // console.log(res.data.data.length);
        setProduct(response);
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
      <div className="body_addproduct">
        <div>
          <h3 className="font-weight-bold p-2 underline text-capitalize">
            Add New Product
          </h3>
        </div>
        <div className="addproduct_main_body">
          <div className="1stdiv">
            <div>
              {/* <input type="file" onChange={handleMultipleImages} multiple /> */}
              {/* <input type="file" name="" id="" className="smallImage" /> */}
              {/* <img src={pc1} alt=""  /> */}
              <ImagesGallery images={images} className="smallImage" />
            </div>
            <div>
              <ImagesGallery images={images} className="smallImage" />
              {/* <img src={pc2} alt=""  /> */}
            </div>
            <div>
              <img src={pc3} alt="" className="smallImage" />
              <ImagesGallery images={images} className="smallImage" />
            </div>
            <div>
              <img src={pc4} alt="" className="smallImage" />
              <ImagesGallery images={images} className="smallImage" />
            </div>
            <div>
              <img src={pc4} alt="" className="smallImage" />
              <ImagesGallery images={images} className="smallImage" />
            </div>
            <div>
              <img src={pc4} alt="" className="smallImage" />
              <ImagesGallery images={images} className="smallImage" />
            </div>
          </div>
          <div className="2stdiv">
            <img src={pc4} alt="" className="bigImage " />
          </div>
          <div className="stdiv3">
            <div>
              <label htmlFor="">Product Name </label> <br />
              <input type="text" />
            </div>
            <div>
              <label for="prodctdes">Product Description - </label>
              <br />
              <textarea
                id="prodctdes"
                name="prodctdes"
                cols="40"
                rows="5"
              ></textarea>
            </div>

            {/* =-------------selct start --------- */}
            <div className="addproduct_selct">
              <div className="div1">
                <select
                  name="select capacity"
                  id="selectcapacity"
                  className="Select_productinadd"
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
                  className="Select_productinadd"
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
              </div>{' '}
            </div>
            <div className="addproduct_selct">
              <div className="div1">
                <select
                  name="select capacity"
                  id="selectcapacity"
                  className="Select_productinadd"
                >
                  <option>Select Brand</option>

                  {Brand ? (
                    Brand.map((item, index) => (
                      <option>{item.brand_name}</option>
                    ))
                  ) : (
                    <div className="container">No brand Available</div>
                  )}
                </select>
              </div>
              <div className="div1">
                <select
                  name="select capacity"
                  id="selectcapacity"
                  className="Select_productinadd"
                >
                  <option>Select Color</option>

                  {Color ? (
                    Color.map((item, index) => (
                      <option>{item.color_name}</option>
                    ))
                  ) : (
                    <div className="container">No color Available</div>
                  )}
                </select>
              </div>
            </div>
            <div className="addproduct_selct">
              <div className="div1">
                <select
                  name="select capacity"
                  id="selectcapacity"
                  className="Select_productinadd"
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
                  className="Select_productinadd"
                >
                  <option>Select Speed</option>

                  {Speed ? (
                    Speed.map((item, index) => (
                      <option>{item.speed_name}</option>
                    ))
                  ) : (
                    <div className="container">No Speed Available</div>
                  )}
                </select>
              </div>
            </div>
            {/* =-------------selct End --------- */}
            {/* tags start  */}
            <div>
              <label for="prodctdes">Tags - </label>
              <br />
              <textarea
                id="prodctdes"
                name="prodctdes"
                cols="40"
                rows="3"
              ></textarea>
            </div>
            {/* tags end  */}
            {/* PRICE START  */}
            <div className="outerprice tavlcolor">
              <div className="price">
                <label htmlFor="">Price</label> <br />
                <input type="text" name="" value="" className="priceinput" />
              </div>
              <div className="discount tavlcolor">
                <label htmlFor="">discount</label> <br />
                <input type="text" className="priceinput" />
              </div>
              <div className="discontprice tavlcolor">
                <label htmlFor="">discontprice</label> <br />
                <input type="text" name="" value="" className="priceinput" />
              </div>
            </div>
            <div className="rentpricem tavlcolor">
              <label for="">rent price/month</label> <br />
              <input type="text" name="" id="" className="priceinput" />
            </div>
            {/* PRICE eND  */}

            <div className="buthonscadd tavlcolor">
              <div className="cancel">Cancel</div>
              <div className="Select_product addproduct">
                <AiOutlinePlusSquare className="iconspro" />
                Add Product
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const ImagesGallery = ({ images }) => {
  return (
    <div>
      {images.map((url) => {
        return (
          <div className="col-sm-1">
            <div className="card">
              <img src={url} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

// export default ImagesGallery;

export default AddProduct;
