import React, { useEffect, useState } from 'react';
import './RentalOrder.css';
import { useNavigate } from 'react-router-dom';

function RentalOrder() {
  let navigate = useNavigate();
  const [items, setitems] = useState(''); 
  const [Items, setItems] = useState('');
  const [Lenght, setLenght] = useState('');
  const RentalOrdersDetails = () => {
  
    let path = `/rentalorder/rentalOrdersdetails`;
    navigate(path);
  };
  return (
    <>
      <div className="Parched_top_secton">
        <div></div>
        {/* user topbar start  */}
        <div className="User_filter">
          <div>
            <h3 className="font-weight-bold pt-3  underline text-capitalize">
              Rental Orders
            </h3>
            <div className="tolal_user">{Lenght} -Rental Orders </div>
          </div>
          <div className="dummy">
            <div style={{ display: "none" }}></div>
          </div>
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
          <div className="newst_first">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option value="volvo">Newest First</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="All">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product"
            >
              <option value="volvo">All </option>
              <option value="saab">Saab</option>
              <option value="opel">Opeldsf</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        {/* user topbar end  */}
        {/* Puches Order main conte state  */}
        <div className="purches_data tavlcolor">
          {Items ? (
            Items.map((item, index) => (
              <div className="Dashbord_tabldiv" onClick={RentalOrdersDetails}>
                <ul className="dashbord_list">
                  <li>{index + 1}</li>
                  <li className="Order_tabl">R-Order-{item.order_id}</li>
                  <li className="Order_tabl">{item.username}</li>
                  <li className="Order_tabl">9669469546</li>
                  <li className="rentals_Rental">{item.order_type}</li>
                  <li className="dashbord_date">
                    {item.order_date.substring(0, 10)}
                  </li>
                  <li className="Dashbord_price">{item.totalAmount}/-</li>
                  <li className="Recived">{item.order_status}</li>
                </ul>
              </div>
            ))
          ) : (
            <div className="container">No Enquiry Available</div>
          )}
        </div>
      </div>
    </>
  );
}

export default RentalOrder;
