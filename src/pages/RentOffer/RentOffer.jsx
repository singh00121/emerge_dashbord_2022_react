import axios from "axios";
import React, { useEffect, useState } from "react";
import ServerUrl from "../../Baseurl/ServerURL";
import authHeader from "../../components/Login/auth-headers";
import "./RentOffer.css";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RentOffer = () => {
  const [items, setItems] = useState("");
  const [Lenght, setLenght] = useState("");
  const [searchdata, setSearchdata] = useState("");
  const [quotesstatus, setQuotesstatus] = useState("");
  const [quotesid, setQuotesid] = useState("");
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [offer, setOffer] = useState("");
  const [spintype, setSpintype] = useState("");

  // get rentoffer api start

  const fetchData = async () => {
    const data = {
      page: 1,
      size: 20,
    };
    await axios
      .post(`${ServerUrl}/getAllRentalUser`, data, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res);

        setItems(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchTotalData = async () => {
    await axios
      .get(`${ServerUrl}/getRentalUserCount`, {
        headers: authHeader(),
      })
      .then((res) => {
        if (res.data.data) {
          const i = res.data.data.length - 1;
          setLenght(res.data.data[i].Total);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
    fetchTotalData();
  }, []);

  const hanldeGetdata = async (spinrentaloffers_id) => {
    console.log(spinrentaloffers_id);
    axios
      .get(
        `${ServerUrl}/getSpinRentalUserById?spinrentaloffers_id=${spinrentaloffers_id}`,
        {
          headers: authHeader(),
        }
      )
      .then((res) => {
        if (res.data.data) {
          const i = res?.data?.data.length - 1;

          setQuotesid(res?.data?.data[i].spinrentaloffers_id);
          setUsername(res?.data?.data[i].username);
          //
          setPhone(res?.data?.data[i].contact_number);
          setEmail(res?.data?.data[i].email);
          setOffer(res?.data?.data[i].offer);
          setSpintype(res?.data?.data[i].spin_type);
          setStatus(res?.data?.data[i].spin_status);
        }
        document.getElementById("enquiry_popup").style.display = "block";
        console.log(res.data.data);
      });
  };

  const QuotesStatus = async (e) => {
    e.preventDefault();
    axios
      .patch(
        `${ServerUrl}/updateSpinRentalOffer`,
        {
          spin_status: quotesstatus,
          spinrentaloffers_id: quotesid,
        },
        {
          headers: authHeader(),
        }
      )
      .then((res) => {
        setQuotesstatus("");
        console.log("update Quotesstatus data", res);
        // alert("update Quotesstatus data");
        document.getElementById("enquiry_popup").style.display = "none";
        // window.location.reload();
        toast.success("Rented offer successfully");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        toast.error("something went wrong");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      });
  };

  const modal = () => {
    document.getElementById("enquiry_popup").style.display = "none";
  };

  return (
    <>
      <div className="Parched_top_secton">
        {/* user topbar start  */}
        <div className="User_filter">
          <div>
            <h3 className="font-weight-bold pt-3 underline text-capitalize">
              Rent Offer <br />
            </h3>{" "}
            {/* {Lenght} */}
            <div className="tolal_user"> {Lenght} -Rent Offer</div>
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
          {items ? (
            items.map((item, index) => (
              <div className="Dashbord_tabldiv  tavlcolor">
                <ul
                  className="dashbord_list"
                  onClick={() => hanldeGetdata(item.spinrentaloffers_id)}
                >
                  <li>{index + 1}</li>
                  <li className="Order_tabl"> {item.username}</li>
                  <li className="Order_tabl">{item.contact_number}</li>
                  <li className="Order_tabl">{item.email}</li>
                  <li className="Order_tabl">{item.offer}</li>
                  <li className="Order_tabl">{item.spin_type}</li>
                  <li className="Order_tabl">{item.spin_status}</li>
                  <li className="Recived"></li>
                </ul>
              </div>
            ))
          ) : (
            <div className="container">No RentOffer Available</div>
          )}
        </div>
      </div>

      {/* Quotes popup box start */}

      <div id="enquiry_popup" style={{ display: "none" }}>
        <div className=" enquiryPopup">
          <div className=" conteners ">
            <div className="" onClick={modal}>
              <Link to="/contactus">
                <IoCloseSharp className="IoCloseSharp" />
              </Link>
            </div>
            <div className="flexcontener">
              <div className=" maincontent">
                <div className="enquirypoptitle">RentOffer - {quotesid}</div>
                <hr />
                <div className="popupboxleft">
                  Username&nbsp;&nbsp;&nbsp; -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="popupboxright">{username}</span>
                </div>

                <div className="popupboxleft">
                  Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="popupboxright">{email}</span>
                </div>
                <div className="popupboxleft">
                  Phone No.&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="popupboxright">{phone}</span>
                </div>
                <div className="popupboxleft">
                  Offer&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="popupboxright">{offer}</span>
                </div>
                <div className="popupboxleft">
                  Spintype &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="popupboxright">{spintype}</span>
                </div>
                <div className="popupboxleft">
                  Status &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="popupboxright">{status}</span>
                </div>
              </div>
              <form onSubmit={(e) => QuotesStatus(e)} autoComplete="off">
                <div className="buttom-flex">
                  <div>
                    <input
                      className="is-checkradio is-rtl"
                      onChange={(e) => {
                        setQuotesstatus(e.target.value);
                        console.log(quotesstatus);
                      }}
                      value="pending"
                      id="exampleRtlRadioInline1"
                      type="radio"
                      name="exampleRtlRadioInline"
                    />
                    <label for="exampleRtlRadioInline1" style={{ margin: 20 }}>
                      Pending
                    </label>
                  </div>
                  <div>
                    <input
                      className="is-checkradio is-rtl"
                      onChange={(e) => {
                        setQuotesstatus(e.target.value);
                        console.log(quotesstatus);
                      }}
                      value="Working"
                      id="exampleRtlRadioInline1"
                      type="radio"
                      name="exampleRtlRadioInline"
                    />
                    <label for="exampleRtlRadioInline1" style={{ margin: 20 }}>
                      Working
                    </label>
                  </div>
                  <div>
                    <input
                      className="is-checkradio is-rtl"
                      id="exampleRtlRadioInline2"
                      onChange={(e) => setQuotesstatus(e.target.value)}
                      value="Complete"
                      type="radio"
                      name="exampleRtlRadioInline"
                    />
                    <label for="exampleRtlRadioInline2" style={{ margin: 20 }}>
                      Complete
                    </label>
                  </div>
                </div>
                <div>
                  <button className="submintbutton is-pulled-right">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Quotes popup box End  */}
    </>
  );
};

export default RentOffer;
