import React from "react";

const Transaction = () => {
  return (
    <>
      <div className="User_top_secton">
        <div></div>
        {/* user topbar start  */}
        <div className="User_filter">
          <div>
            <h3 className="font-weight-bold pt-3 underline text-capitalize">
              Transaction
            </h3>
            <div className="tolal_user">100 Transaction</div>
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
        {/* User main conte state  */}
        <div className="purches_data tavlcolor">
          <div className="user_content">
            <div className="Sn">1</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="bg_color">Order ID - 1254632</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="Dashbord_price">6500/-</div>
            <div className="">Successful</div>
          </div>
          <div className="user_content">
            <div className="Sn">2</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="bg_color">Order ID - 1254632</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="Dashbord_price">6500/-</div>
            <div className="">Successful</div>
          </div>
          <div className="user_content">
            <div className="Sn">3</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="bg_color">Order ID - 1254632</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="Dashbord_price">6500/-</div>
            <div className="">Successful</div>
          </div>
          <div className="user_content">
            <div className="Sn">4</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="bg_color">Order ID - 1254632</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="Dashbord_price">6500/-</div>
            <div className="">Successful</div>
          </div>
          <div className="user_content">
            <div className="Sn">5</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="bg_color">Order ID - 1254632</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="Dashbord_price">6500/-</div>
            <div className="">Successful</div>
          </div>
          <div className="user_content">
            <div className="Sn">1</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="bg_color">Order ID - 1254632</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="Dashbord_price">6500/-</div>
            <div className="">Successful</div>
          </div>
          <div className="user_content">
            <div className="Sn">2</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="bg_color">Order ID - 1254632</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="Dashbord_price">6500/-</div>
            <div className="">Successful</div>
          </div>
          <div className="user_content">
            <div className="Sn">3</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="bg_color">Order ID - 1254632</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="Dashbord_price">6500/-</div>
            <div className="">Successful</div>
          </div>
          <div className="user_content">
            <div className="Sn">4</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="bg_color">Order ID - 1254632</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="Dashbord_price">6500/-</div>
            <div className="">Successful</div>
          </div>
          <div className="user_content">
            <div className="Sn">5</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="bg_color">Order ID - 1254632</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="Dashbord_price">6500/-</div>
            <div className="">Successful</div>
          </div>
          <div className="user_content">
            <div className="Sn">1</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="bg_color">Order ID - 1254632</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="Dashbord_price">6500/-</div>
            <div className="">Successful</div>
          </div>
          <div className="user_content">
            <div className="Sn">2</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="bg_color">Order ID - 1254632</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="Dashbord_price">6500/-</div>
            <div className="">Successful</div>
          </div>
          <div className="user_content">
            <div className="Sn">3</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="bg_color">Order ID - 1254632</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="Dashbord_price">6500/-</div>
            <div className="">Successful</div>
          </div>
          <div className="user_content">
            <div className="Sn">4</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="bg_color">Order ID - 1254632</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="Dashbord_price">6500/-</div>
            <div className="">Successful</div>
          </div>
          <div className="user_content">
            <div className="Sn">5</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="bg_color">Order ID - 1254632</div>
            </div>
            <div className="user_name bg_color">Lalit yadav</div>
            <div className="Dashbord_price">6500/-</div>
            <div className="">Successful</div>
          </div>
        </div>
        {/* User main conte End  */}
      </div>
    </>
  );
};

export default Transaction;
