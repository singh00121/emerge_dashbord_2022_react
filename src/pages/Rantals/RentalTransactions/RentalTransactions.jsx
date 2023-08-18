import React from "react";

function RentalTransactions() {
  return (
    <>
      <div className="User_top_secton tavlcolor">
        <div></div>
        {/* user topbar start  */}
        <div className="User_filter">
          <div>
            <h3 className="font-weight-bold pt-3 underline text-capitalize">
              Rental Transactions
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
          <div className="newst_first">
            <select
              name="select capacity"
              id="selectcapacity"
              className="Select_product "
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
        {/* user topbar end  */}
        {/* User main conte state  */}
        <div className="purches_data">
          <div className="user_content">
            <div className="Sn">1</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="user_name bg_color">Lalit yadav</div>
            </div>
            <div className="bg_color">1234567890</div>

            <div className="dashbord_date">13 Octomber 2022 10:19 PM</div>
            <div className="price1">6500/-</div>
          </div>
          <div className="user_content">
            <div className="Sn">2</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="user_name bg_color">Lalit yadav</div>
            </div>
            <div className="bg_color">1234567890</div>

            <div className="dashbord_date">13 Octomber 2022 10:19 PM</div>
            <div className="price1">6500/-</div>
          </div>
          <div className="user_content">
            <div className="Sn">3</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="user_name bg_color">Lalit yadav</div>
            </div>
            <div className="bg_color">1234567890</div>

            <div className="dashbord_date">13 Octomber 2022 10:19 PM</div>
            <div className="price1">6500/-</div>
          </div>
          <div className="user_content">
            <div className="Sn">4</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="user_name bg_color">Lalit yadav</div>
            </div>
            <div className="bg_color">1234567890</div>

            <div className="dashbord_date">13 Octomber 2022 10:19 PM</div>
            <div className="price1">6500/-</div>
          </div>
          <div className="user_content">
            <div className="Sn">5</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="user_name bg_color">Lalit yadav</div>
            </div>
            <div className="bg_color">1234567890</div>

            <div className="dashbord_date">13 Octomber 2022 10:19 PM</div>
            <div className="price1">6500/-</div>
          </div>
          <div className="user_content">
            <div className="Sn">6</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="user_name bg_color">Lalit yadav</div>
            </div>
            <div className="bg_color">1234567890</div>

            <div className="dashbord_date">13 Octomber 2022 10:19 PM</div>
            <div className="price1">6500/-</div>
          </div>
          <div className="user_content">
            <div className="Sn">7</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="user_name bg_color">Lalit yadav</div>
            </div>
            <div className="bg_color">1234567890</div>

            <div className="dashbord_date">13 Octomber 2022 10:19 PM</div>
            <div className="price1">6500/-</div>
          </div>
          <div className="user_content">
            <div className="Sn">8</div>
            <div className="contect">
              <div className="bg_color">Transaction ID-123454</div>
            </div>
            <div className="contect">
              <div className="user_name bg_color">Lalit yadav</div>
            </div>
            <div className="bg_color">1234567890</div>

            <div className="dashbord_date">13 Octomber 2022 10:19 PM</div>
            <div className="price1">6500/-</div>
          </div>
        </div>
        {/* User main conte End  */}
      </div>
    </>
  );
}

export default RentalTransactions;
