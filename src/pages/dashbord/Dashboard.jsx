import React from 'react';
import './dashbord.css';
import Shoping from '../../images/Dashbord/shopping_cart.svg';
import Path from '../../images/Dashbord/Path 1170.svg';
import rupee from '../../images/Dashbord/rupee.svg';
import pading from '../../images/Dashbord/pading.svg';
import Outof from '../../images/Dashbord/outstok.svg';
import Mo0nth from '../../images/Dashbord/monthy.svg';
const Dashboard = () => {
  return (
    <>
      {/* Tob card start */}

      <div>
        <h3 className="font-weight-bold p-2 underline text-capitalize">
          Dashbord
        </h3>
      </div>
      <div className="dasbord-topcard">
        <div className="">
          <div className=" card1 dashbord_card">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="media-body text-left text-white font-weight-bold">
                    <div>
                      <img src={Shoping} alt="" className="dashbordcardimage" />
                    </div>
                    {/* Panding Order */}
                    <span className="">
                      <img
                        src={pading}
                        alt=""
                        className="dashbordcard-image "
                      />
                    </span>
                    <h3 className="dashbord_number">17</h3>
                  </div>
                  {/* <div className="align-self-center">
                    <i className="fa-sharp fa-solid fa-truck  Iconrcolor font-large-2 float-right"></i>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" card2 dashbord_card">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="media-body text-left text-white font-weight-bold">
                    <div>
                      <img src={Path} alt="" className="dashbordcardimage" />
                    </div>
                    {/* Out of Stock */}
                    <span className="">
                      <img src={Outof} alt="" className="dashbordcard-image" />
                    </span>
                    <h3 className="dashbord_number">156</h3>
                  </div>
                  {/* <div className="align-self-center">
                    <i className="fa-solid fa-store-slash Iconrcolor font-large-2 float-right"></i>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" card3 dashbord_card">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="media-body text-left text-white ">
                    <div>
                      <img src={rupee} alt="" className="dashbordcardimage" />
                    </div>
                    {/* Manthly sales */}
                    <span className="">
                      <img src={Mo0nth} alt="" className="dashbordcard-image" />
                    </span>

                    <h3 className="dashbord_number">15600</h3>
                  </div>
                  {/* <div className="align-self-center">
                    <i className="fa-sharp fa-solid fa-arrow-trend-up Iconrcolor font-large-2 float-right"></i>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------ */}
      </div>
      {/* Tob card End */}

      {/* tables start  */}
      <div className="Dashbaord_tabls_man ">
        <div className="Dashbord_tabldiv tavlcolor">
          <ul className="dashbord_list">
            <li>1</li>
            <li className="Order_tabl">R-Order-126745</li>
            <li className="Order_tabl">Lalit yadav</li>
            <li className="Order_tabl">9669469546</li>
            <li className="rentals_Rental">Rental</li>
            <li className="dashbord_date">13 Octomber 2022 10:19 PM</li>
            <li className="Dashbord_price">6500/-</li>
            <li className="Recived">Recived</li>
          </ul>
        </div>
        <div className="Dashbord_tabldiv tavlcolor">
          <ul className="dashbord_list">
            <li>2</li>
            <li className="Order_tabl">R-Order-126745</li>
            <li className="Order_tabl">Lalit yadav</li>
            <li className="Order_tabl">9669469546</li>
            <li className="rentals_cod">COD</li>
            <li className="dashbord_date">13 Octomber 2022 10:19 PM</li>
            <li className="Dashbord_price">6500/-</li>
            <li className="Recived">Recived</li>
          </ul>
        </div>{' '}
        <div className="Dashbord_tabldiv tavlcolor">
          <ul className="dashbord_list">
            <li>3</li>
            <li className="Order_tabl">R-Order-126745</li>
            <li className="Order_tabl">Lalit yadav</li>
            <li className="Order_tabl">9669469546</li>
            <li className="rentals_Prepaid">Prepaid</li>
            <li className="dashbord_date">13 Octomber 2022 10:19 PM</li>
            <li className="Dashbord_price">6500/-</li>
            <li className="Recived">Recived</li>
          </ul>
        </div>{' '}
        <div className="Dashbord_tabldiv tavlcolor">
          <ul className="dashbord_list">
            <li>1</li>
            <li className="Order_tabl">R-Order-126745</li>
            <li className="Order_tabl">Lalit yadav</li>
            <li className="Order_tabl">9669469546</li>
            <li className="rentals_Rental">Rental</li>
            <li className="dashbord_date">13 Octomber 2022 10:19 PM</li>
            <li className="Dashbord_price">6500/-</li>
            <li className="Recived">Recived</li>
          </ul>
        </div>
        <div className="Dashbord_tabldiv tavlcolor">
          <ul className="dashbord_list">
            <li>2</li>
            <li className="Order_tabl">R-Order-126745</li>
            <li className="Order_tabl">Lalit yadav</li>
            <li className="Order_tabl">9669469546</li>
            <li className="rentals_cod">COD</li>
            <li className="dashbord_date">13 Octomber 2022 10:19 PM</li>
            <li className="Dashbord_price">6500/-</li>
            <li className="Recived">Recived</li>
          </ul>
        </div>{' '}
        <div className="Dashbord_tabldiv tavlcolor">
          <ul className="dashbord_list">
            <li>3</li>
            <li className="Order_tabl">R-Order-126745</li>
            <li className="Order_tabl">Lalit yadav</li>
            <li className="Order_tabl">9669469546</li>
            <li className="rentals_Prepaid">Prepaid</li>
            <li className="dashbord_date">13 Octomber 2022 10:19 PM</li>
            <li className="Dashbord_price">6500/-</li>
            <li className="Recived">Recived</li>
          </ul>
        </div>{' '}
        <div className="Dashbord_tabldiv tavlcolor">
          <ul className="dashbord_list">
            <li>1</li>
            <li className="Order_tabl">R-Order-126745</li>
            <li className="Order_tabl">Lalit yadav</li>
            <li className="Order_tabl">9669469546</li>
            <li className="rentals_Rental">Rental</li>
            <li className="dashbord_date">13 Octomber 2022 10:19 PM</li>
            <li className="Dashbord_price">6500/-</li>
            <li className="Recived">Recived</li>
          </ul>
        </div>
        <div className="Dashbord_tabldiv tavlcolor">
          <ul className="dashbord_list">
            <li>2</li>
            <li className="Order_tabl">R-Order-126745</li>
            <li className="Order_tabl">Lalit yadav</li>
            <li className="Order_tabl">9669469546</li>
            <li className="rentals_cod">COD</li>
            <li className="dashbord_date">13 Octomber 2022 10:19 PM</li>
            <li className="Dashbord_price">6500/-</li>
            <li className="Recived">Recived</li>
          </ul>
        </div>{' '}
        <div className="Dashbord_tabldiv tavlcolor">
          <ul className="dashbord_list">
            <li>3</li>
            <li className="Order_tabl">R-Order-126745</li>
            <li className="Order_tabl">Lalit yadav</li>
            <li className="Order_tabl">9669469546</li>
            <li className="rentals_Prepaid">Prepaid</li>
            <li className="dashbord_date">13 Octomber 2022 10:19 PM</li>
            <li className="Dashbord_price">6500/-</li>
            <li className="Recived">Recived</li>
          </ul>
        </div>{' '}
      </div>

      {/* tables End  */}
    </>
  );
};

export default Dashboard;
