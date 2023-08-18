import React from 'react';
import './Rantals.css';
import Laptop from '../../images/Product/laptop.png';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlusSquare } from 'react-icons/ai';

function Rantals() {
  const toggle = (source) => {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] != source) checkboxes[i].checked = source.checked;
    }
  };

  let navigate = useNavigate();
  const AddproducRendt = () => {
    let path = `/rantals/add-product-ror-rent`;
    navigate(path);
  };

  return (
    <>
      <div className="User_top_secton">
        <div className="User_filter">
          <div>
            <h3 className="font-weight-bold pt-3 underline text-capitalize">
              Rental Register
            </h3>{' '}
          </div>
          {/* <input type="checkbox" name="foo" value="bar1"> Bar 1<br/>
<input type="checkbox" name="foo" value="bar2"> Bar 2<br/>
<input type="checkbox" name="foo" value="bar3"> Bar 3<br/>
<input type="checkbox" name="foo" value="bar4"> Bar 4<br/> */}

          {/* <div className="dummy">
            <div style={{ display: "none" }}></div>
          </div> */}
          <div className="Serch_user">
            <div className="Productserch">
              <input
                type="text"
                placeholder="Search.."
                name="search"
                className="Productserchinder"
              />
            </div>
          </div>

          <div className="div1">
            <div
              class=""
              name="cars"
              className="Select_product addproduct"
              onClick={AddproducRendt}
            >
              <AiOutlinePlusSquare className="iconspro" />
              Add Product For Rent
            </div>
          </div>
        </div>
        <div className="Rantaal">
          <div className="newst_first">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
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

          <div className="chekboxInREntal">
            <span>
              <input type="checkbox" onclick={toggle} /> Select All
              <br />
            </span>
          </div>
        </div>

        {/* main content start */}
        <div className="RantelReg tavlcolor">
          <div className="Content_product">
            <div className="Chekbox">
              <input
                type="checkbox"

                // value="checkboxes"
              />
            </div>
            <div>
              <img src={Laptop} alt="" className="Product_image" />
            </div>
            <div className="Name_delails">
              <div className="information">
                <div>Apple</div>
                <div> Due date - 15 Oct 2022</div>
              </div>
              APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur)
              MGN63HN/A (13.3 inch, Space Grey, 1.29 kg)
            </div>
            <div className="Product_brand">
              <div className="brand_bg_color">Apple</div>{' '}
              <div className="brand_bg_color">56 GB</div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Black</div>{' '}
              <div className="brand_bg_color">3rd Gen</div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Aarif Husain</div>{' '}
              <div className="brand_bg_color">888-444-5987</div>
            </div>
            <div className="price1">1000/-</div>
            <div className="brand_bg_color">5</div>
            <div className="price1"> Total - 5000/-</div>
          </div>
          <div className="Content_product">
            <div className="Chekbox">
              <input
                type="checkbox"

                // value="checkboxes"
              />
            </div>
            <div>
              <img src={Laptop} alt="" className="Product_image" />
            </div>
            <div className="Name_delails">
              <div className="information">
                <div>Apple</div>
                <div> Due date - 15 Oct 2022</div>
              </div>
              APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur)
              MGN63HN/A (13.3 inch, Space Grey, 1.29 kg)
            </div>
            <div className="Product_brand">
              <div className="brand_bg_color">Apple</div>{' '}
              <div className="brand_bg_color">56 GB</div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Black</div>{' '}
              <div className="brand_bg_color">3rd Gen</div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Aarif Husain</div>{' '}
              <div className="brand_bg_color">888-444-5987</div>
            </div>
            <div className="price1">1000/-</div>
            <div className="brand_bg_color">5</div>
            <div className="price1"> Total - 5000/-</div>
          </div>
          <div className="Content_product">
            <div className="Chekbox">
              <input
                type="checkbox"

                // value="checkboxes"
              />
            </div>
            <div>
              <img src={Laptop} alt="" className="Product_image" />
            </div>
            <div className="Name_delails">
              <div className="information">
                <div>Apple</div>
                <div> Due date - 15 Oct 2022</div>
              </div>
              APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur)
              MGN63HN/A (13.3 inch, Space Grey, 1.29 kg)
            </div>
            <div className="Product_brand">
              <div className="brand_bg_color">Apple</div>{' '}
              <div className="brand_bg_color">56 GB</div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Black</div>{' '}
              <div className="brand_bg_color">3rd Gen</div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Aarif Husain</div>{' '}
              <div className="brand_bg_color">888-444-5987</div>
            </div>
            <div className="price1">1000/-</div>
            <div className="brand_bg_color">5</div>
            <div className="price1"> Total - 5000/-</div>
          </div>
          <div className="Content_product">
            <div className="Chekbox">
              <input
                type="checkbox"

                // value="checkboxes"
              />
            </div>
            <div>
              <img src={Laptop} alt="" className="Product_image" />
            </div>
            <div className="Name_delails">
              <div className="information">
                <div>Apple</div>
                <div> Due date - 15 Oct 2022</div>
              </div>
              APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur)
              MGN63HN/A (13.3 inch, Space Grey, 1.29 kg)
            </div>
            <div className="Product_brand">
              <div className="brand_bg_color">Apple</div>{' '}
              <div className="brand_bg_color">56 GB</div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Black</div>{' '}
              <div className="brand_bg_color">3rd Gen</div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Aarif Husain</div>{' '}
              <div className="brand_bg_color">888-444-5987</div>
            </div>
            <div className="price1">1000/-</div>
            <div className="brand_bg_color">5</div>
            <div className="price1"> Total - 5000/-</div>
          </div>
          <div className="Content_product">
            <div className="Chekbox">
              <input
                type="checkbox"

                // value="checkboxes"
              />
            </div>
            <div>
              <img src={Laptop} alt="" className="Product_image" />
            </div>
            <div className="Name_delails">
              <div className="information">
                <div>Apple</div>
                <div> Due date - 15 Oct 2022</div>
              </div>
              APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur)
              MGN63HN/A (13.3 inch, Space Grey, 1.29 kg)
            </div>
            <div className="Product_brand">
              <div className="brand_bg_color">Apple</div>{' '}
              <div className="brand_bg_color">56 GB</div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Black</div>{' '}
              <div className="brand_bg_color">3rd Gen</div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Aarif Husain</div>{' '}
              <div className="brand_bg_color">888-444-5987</div>
            </div>
            <div className="price1">1000/-</div>
            <div className="brand_bg_color">5</div>
            <div className="price1"> Total - 5000/-</div>
          </div>
        </div>
        {/* main content End */}
      </div>
    </>
  );
}

export default Rantals;
