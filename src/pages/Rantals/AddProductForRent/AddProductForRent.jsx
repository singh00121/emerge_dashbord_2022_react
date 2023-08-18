import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css'; // for ES6 modules
import { AiOutlineCheckSquare } from 'react-icons/ai';
import '../Rantals.css';
import Laptop from '../../../images/Product/laptop.png';
import { useNavigate } from 'react-router-dom';

function AddProductForRent() {
  let navigate = useNavigate();
  const rentaltransactions = () => {
    let path = `/rantals/rentaltransactions`;
    navigate(path);
  };

  return (
    <>
      <div className="Product_Top_contener tavlcolor">
        {/* First row start */}
        <div className="Product_filter">
          <div className="div1">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option value="volvo">Select Capacity</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="div1">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option value="volvo">Select Quality Types</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="div1">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option value="volvo">Select Brand </option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="div1">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option value="volvo">Select Color</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div className="div1">
            <div
              class=""
              name="cars"
              className="Select_product addproduct"
              onClick={rentaltransactions}
            >
              <AiOutlineCheckSquare className="iconspro" />
              Assign items
            </div>
          </div>
        </div>
        {/* First row End */}
        {/* Second row start */}

        <div className="Product_filter2">
          <div>
            <div className="allproduct">100 product</div>
          </div>
          <div className="div1">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option value="volvo">Select Capacity</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="div1">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option value="volvo">Select Quality Types</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div className="div1">
            <div style={{ display: 'none' }}></div>
          </div>
          <div className="div1">
            <div style={{ display: 'none' }}></div>
          </div>
          <div className="div1">
            <div style={{ display: 'none' }}></div>
          </div>
        </div>
        {/* Second row End */}
        {/* Therd row start */}
        <div className="procuctTherdrow">
          <div className="chekboxInREntal">
            <span>
              <input type="checkbox" /> Select All
              <br />
            </span>
          </div>
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
              <option value="volvo">Recent</option>
              <option value="saab">1 month</option>
              <option value="opel">2 month</option>
              <option value="audi">3 month</option>
            </select>
          </div>

          <div className="Addproductforrant">
            {' '}
            <div className="newst_first">
              {' '}
              Assign to -
              <select
                name="select capacity"
                id="selectcapacity"
                className="Select_product addprorentselect"
              >
                <option value="Liam">Liam</option>
                <option value="Noah">Noah</option>
                <option value="Oliver">Oliver</option>
                <option value="Elijah">Elijah</option>
                <option value="James">James</option>
                <option value="William">William</option>
                <option value="Benjamin">Benjamin</option>
              </select>
            </div>
          </div>
        </div>

        {/* Therd row End */}
      </div>
      {/* Main contener start  */}
      <div className="Product_main_contener tavlcolor">
        <div className="purches_data">
          <div className="Content_product">
            <div className="Chekbox">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
            </div>
            <div>
              <img src={Laptop} alt="" className="Product_image" />
            </div>
            <div className="Name_delails">
              <div className="information">
                <div>Apple</div>
                <div>Product id : 10234</div>
                <div className="Enabl">Enabeld</div>
              </div>
              APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur)
              MGN63HN/A (13.3 inch, Space Grey, 1.29 kg)
            </div>
            <div className="Product_brand">
              <div className="brand_bg_color">Apple</div>
              <div className="brand_bg_color"> 56 GB</div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Black</div>
              <div className="brand_bg_color">Red</div>
            </div>
            <div className="price1">Per Month - 100/-</div>
          </div>
          <div className="Content_product">
            <div className="Chekbox">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
            </div>
            <div>
              <img src={Laptop} alt="" className="Product_image" />
            </div>
            <div className="Name_delails">
              <div className="information">
                <div>Apple</div>
                <div>Product id : 10234</div>
                <div className="Enabl">Enabeld</div>
              </div>
              APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur)
              MGN63HN/A (13.3 inch, Space Grey, 1.29 kg)
            </div>
            <div className="Product_brand">
              <div className="brand_bg_color">Apple</div>
              <div className="brand_bg_color"> 56 GB</div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Black</div>
              <div className="brand_bg_color">Red</div>
            </div>
            <div className="price1">Per Month - 100/-</div>
          </div>
          <div className="Content_product">
            <div className="Chekbox">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
            </div>
            <div>
              <img src={Laptop} alt="" className="Product_image" />
            </div>
            <div className="Name_delails">
              <div className="information">
                <div>Apple</div>
                <div>Product id : 10234</div>
                <div className="Enabl">Enabeld</div>
              </div>
              APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur)
              MGN63HN/A (13.3 inch, Space Grey, 1.29 kg)
            </div>
            <div className="Product_brand">
              <div className="brand_bg_color">Apple</div>
              <div className="brand_bg_color"> 56 GB</div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Black</div>
              <div className="brand_bg_color">Red</div>
            </div>
            <div className="price1">Per Month - 100/-</div>
          </div>
          <div className="Content_product">
            <div className="Chekbox">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
            </div>
            <div>
              <img src={Laptop} alt="" className="Product_image" />
            </div>
            <div className="Name_delails">
              <div className="information">
                <div>Apple</div>
                <div>Product id : 10234</div>
                <div className="Enabl">Enabeld</div>
              </div>
              APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur)
              MGN63HN/A (13.3 inch, Space Grey, 1.29 kg)
            </div>
            <div className="Product_brand">
              <div className="brand_bg_color">Apple</div>
              <div className="brand_bg_color"> 56 GB</div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Black</div>
              <div className="brand_bg_color">Red</div>
            </div>
            <div className="price1">Per Month - 100/-</div>
          </div>
          <div className="Content_product">
            <div className="Chekbox">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
            </div>
            <div>
              <img src={Laptop} alt="" className="Product_image" />
            </div>
            <div className="Name_delails">
              <div className="information">
                <div>Apple</div>
                <div>Product id : 10234</div>
                <div className="Enabl">Enabeld</div>
              </div>
              APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur)
              MGN63HN/A (13.3 inch, Space Grey, 1.29 kg)
            </div>
            <div className="Product_brand">
              <div className="brand_bg_color">Apple</div>
              <div className="brand_bg_color"> 56 GB</div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Black</div>
              <div className="brand_bg_color">Red</div>
            </div>
            <div className="price1">Per Month - 100/-</div>
          </div>
          <div className="Content_product">
            <div className="Chekbox">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
            </div>
            <div>
              <img src={Laptop} alt="" className="Product_image" />
            </div>
            <div className="Name_delails">
              <div className="information">
                <div>Apple</div>
                <div>Product id : 10234</div>
                <div className="Enabl">Enabeld</div>
              </div>
              APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur)
              MGN63HN/A (13.3 inch, Space Grey, 1.29 kg)
            </div>
            <div className="Product_brand">
              <div className="brand_bg_color">Apple</div>
              <div className="brand_bg_color"> 56 GB</div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Black</div>
              <div className="brand_bg_color">Red</div>
            </div>
            <div className="price1">Per Month - 100/-</div>
          </div>
          <div className="Content_product">
            <div className="Chekbox">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
            </div>
            <div>
              <img src={Laptop} alt="" className="Product_image" />
            </div>
            <div className="Name_delails">
              <div className="information">
                <div>Apple</div>
                <div>Product id : 10234</div>
                <div className="Enabl">Enabeld</div>
              </div>
              APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur)
              MGN63HN/A (13.3 inch, Space Grey, 1.29 kg)
            </div>
            <div className="Product_brand">
              <div className="brand_bg_color">Apple</div>
              <div className="brand_bg_color"> 56 GB</div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Black</div>
              <div className="brand_bg_color">Red</div>
            </div>
            <div className="price1">Per Month - 100/-</div>
          </div>
        </div>
      </div>
      {/* Main contener End  */}
    </>
  );
}

export default AddProductForRent;
