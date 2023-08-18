import React from 'react';
import Laptop from '../../../images/Product/laptop.png';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

function RentalOrdersDetails() {
  // /rentalorder/rentalOrdersdetails
  let navigate = useNavigate();
  const Allrentl = () => {
    let path = `/rentalorder`;
    navigate(path);
    // navigate(`/addproduct`);
    // <Navigate to="/addproduct" replace={true} />
  };
  return (
    <>
      <div className="User_top_secton">
        <div className="User_filter pt-3">
          <div className="masterIconeback" onClick={Allrentl}>
            <IoMdArrowRoundBack /> Back to All Orders
          </div>
          <div className="brand_bg_color">R-Order ID - 1254632</div>
          <div className="brand_bg_color">Aarif Husain</div>
          <div className="brand_bg_color">888-444-5987</div>
          <div className="rentals_Rental">Rental</div>
          <div className="newst_first">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option value="Received">Received</option>
              <option value="Panding">Panding</option>
              <option value="Complet">Complet</option>
            </select>
          </div>
        </div>
        <div className="Therd_Row_Reantal">
          <div className="brand_bg_color">Total 5 Items</div>
          <div>13 October 2022 04 :15 PM</div>
          <div>
            Per Month Total - <span className="price1">550/-</span>
          </div>
        </div>

        {/* main content start */}
        <div className="RantelReg tavlcolor">
          <div className="Content_product">
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
              <div className="brand_bg_color">256 GB </div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Black</div>{' '}
              <div className="brand_bg_color">3rd Gen</div>
            </div>

            <div className="price1">1000/-</div>
            <div className="brand_bg_color">5</div>
            <div className="price1"> Total - 5000/-</div>
          </div>
          <div className="Content_product">
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
              <div className="brand_bg_color">256 GB </div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Black</div>{' '}
              <div className="brand_bg_color">3rd Gen</div>
            </div>

            <div className="price1">1000/-</div>
            <div className="brand_bg_color">5</div>
            <div className="price1"> Total - 5000/-</div>
          </div>
          <div className="Content_product">
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
              <div className="brand_bg_color">256 GB </div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Black</div>{' '}
              <div className="brand_bg_color">3rd Gen</div>
            </div>

            <div className="price1">1000/-</div>
            <div className="brand_bg_color">5</div>
            <div className="price1"> Total - 5000/-</div>
          </div>
          <div className="Content_product">
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
              <div className="brand_bg_color">256 GB </div>
            </div>
            <div className="Product_color">
              <div className="brand_bg_color">Black</div>{' '}
              <div className="brand_bg_color">3rd Gen</div>
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

export default RentalOrdersDetails;
