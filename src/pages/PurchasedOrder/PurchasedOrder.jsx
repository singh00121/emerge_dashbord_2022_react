import React, { useEffect, useState } from "react";
import "./PurchasedOrder.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ServerUrl from "../../Baseurl/ServerURL";
import authHeader from "../../components/Login/auth-headers";
function PurchasedOrder() {
  let navigate = useNavigate();
  const [Items, setItems] = useState('');
  const PurchesorderDetails = () => {
    let path = `/purchasedorder/purchased-orders-details`;
    navigate(path);
  };
  // const [Items, setItems] = useState("");

  // get enqury api start

  const fetchData = async () => {
    const data = {
      page: 1,
      size: 10,
    };
    await axios
      .post(`${ServerUrl}/getPurchasedOrders`, data, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res.data);
        // setItems(res.data );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   const data = {
  //     page: 1,
  //     size: 10,
  //   };
  //   await axios
  //     .post(`${ServerUrl}/getPurchasedOrders`, data, {
  //       headers: authHeader(),
  //     })
  //     .then((res) => {
  //   console.log(res.data.data);
       
     
  //         setItems(res.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   fetchData();
   
  // }, []);
  return (
    <>
      <div className="Parched_top_secton">
        <div></div>
        {/* user topbar start  */}
        <div className="User_filter">
          <div>
            <h2 className="font-weight-bold pt-3  underline text-capitalize">
              Purchased Orders <br />
            </h2>
            <div className="tolal_user">70 Purchased Orders</div>
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
        <div className="purches_data">
          {Items ? (
            Items.map((item, index) => (
              <div className="Dashbord_tabldiv" onClick={PurchesorderDetails}>
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
          <div className="Dashbord_tabldiv" onClick={PurchesorderDetails}>
            <ul className="dashbord_list tavlcolor">
              <li>1</li>
              <li className="Order_tabl">Order ID - 1254632</li>
              <li className="Order_tabl">Lalit yadav</li>
              <li className="Order_tabl">9669469546</li>
              <li className="rentals_cod">COD</li>
              <li className="dashbord_date">13 Octomber 2022 10:19 PM</li>
              <li className="Dashbord_price">6500/-</li>
              <li className="Processing">Processing</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Puches Order main conte End  */}
      
    </>
  );
}

export default PurchasedOrder;
