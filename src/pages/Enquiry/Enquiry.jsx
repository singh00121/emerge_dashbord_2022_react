import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServerUrl from '../../Baseurl/ServerURL';
import authHeader from '../../components/Login/auth-headers';
import './Enquiry.css';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Enquiry = () => {
  const [items, setItems] = useState('');
  const [Lenght, setLenght] = useState('');

  
  const [searchdata, setSearchdata] = useState("");

  const [quotesid, setQuotesid] = useState('');
  const [fullname, setFullname] = useState('');
  const [quantity, setquantity] = useState('');
  const [phone, setPhone] = useState('');
  const [enquirytype, setenquirytype] = useState('');
  const [rentduration, setrentduration] = useState('');
  const [quotesstatus, setQuotesstatus] = useState('');

  // const [Lenght, setLenght] = useState('');

  // get enqury api start

  const fetchData = async () => {
    const data = {
      page: 1,
      size: 20,
    };
    await axios
      .post(`${ServerUrl}/getAllEnquiry`, data, {
        headers: authHeader(),
      })
      .then((res) => {
    console.log(res.data.data);
       
     
          setItems(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchTotalData = async () => {
    await axios
      .get(`${ServerUrl}/getEnquiryCount`, {
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

  // Get byId  api start https://cerbosys.in:3200/emerge/admin/getEnquiryById?enquiry_id=1


  const hanldeGetdata = async (enquiry_id) => {
    console.log(enquiry_id);
    axios
      .get(`${ServerUrl}/getEnquiryById?enquiry_id=${enquiry_id}`, {
        headers: authHeader(),
      })
      .then((res) => {
        if (res.data.data) {
          const i = res?.data?.data.length - 1;
    
          setQuotesid(res?.data?.data[i].enquiry_id);
          setFullname(res?.data?.data[i].enquiry_name);
          setquantity(res?.data?.data[i].quantity);
          setPhone(res?.data?.data[i].contact_number);
          setenquirytype(res?.data?.data[i].enquiry_type);
          setrentduration(res?.data?.data[i].rent_duration);
          setQuotesstatus(res?.data?.data[i].enquiry_status);
        }
        document.getElementById('enquiry_popup').style.display = 'block';
        console.log(res.data.data);
      });
  };

    // update Enquiry function

    const QuotesStatus = async (e) => {
      e.preventDefault();
      axios
        .patch(
          `${ServerUrl}/updateEnquiry`,
          {
            enquiry_status: quotesstatus,
            enquiry_id: quotesid,
          },
          {
            headers: authHeader(),
          }
        )
        .then((res) => {
          setQuotesstatus('');
          console.log('update Quotesstatus data', res);
          // alert("update Quotesstatus data");
          document.getElementById('enquiry_popup').style.display = 'none';
          // window.location.reload();
          toast.success(' Enquiry  update  sucsefully');
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch((err) => {
          toast.error('something went wrong');
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        });
    };

 //search data
 const onChangeSearch = (e) => {
  const searchdata = e.target.value;
  if (searchdata === "") {
    window.location.reload();
  }
  setSearchdata(searchdata);
};
// searchdata api
const searchdataitems = {
  name: searchdata,
  page: 1,
  size: 10,
};
const searchapidata = async () => {
  await axios
    .post(`${ServerUrl}/searchEnquiry`, searchdataitems, {
      headers: authHeader(),
    })
    .then((res) => {
      // console.log(res.data.data);
      setItems(res.data.data);
    })
    .catch((error) => {
      console.log("error", error);
    });
};


  // close popup model
  const modal = () => {
    document.getElementById('enquiry_popup').style.display = 'none';
  };



  return (
    <>
        <div className="Parched_top_secton">
        {/* user topbar start  */}
        <div className="User_filter">
          <div>
            <h3 className="font-weight-bold pt-3 underline text-capitalize">
              Enquiry <br />
            </h3>{' '}
            {/* {Lenght} */}
            <div className="tolal_user"> {Lenght} -Enquiry</div>
          </div>
          <div className="dummy">
            <div style={{ display: 'none' }}></div>
          </div>
          <div className="Serch_user">
            <div className="Productserch">
              <input
                type="text"
                placeholder="Search.."
                name="search"
                className="Productserchinder"
                onChange={(e) => {
                  onChangeSearch(e);
                  searchapidata();
                }}
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
            <ul className="dashbord_list" onClick={() => hanldeGetdata(item.enquiry_id)} >
              <li>{index+1}</li>
              <li className="Order_tabl"> {item.enquiry_name}</li>
              <li className="Order_tabl">{item.contact_number}</li>
              <li className="Order_tabl">QTY - {item.quantity}</li>
              <li className="Order_tabl">{item.enquiry_type}</li>
              <li className="Order_tabl">{item.rent_duration}</li>
              <li className="Order_tabl">{item.enquiry_status}</li>
              <li className="Recived">
                {/* <div className="newst_first">
                  <select
                    name="select capacity"
                    id="selectcapacity"
                    className="Select_product"
                    value={item.enquiry_status}
                  >
                    <option  value={item.enquiry_status} className="pending">
                      {item.enquiry_status}
                    </option>
                    <option value="Aknowledge" className="Aknowledge">
                      Aknowledge
                    </option>
                    <option value="Complet" className="Complet">
                      Complet
                    </option>
                  </select>
                </div> */}
              </li>
            </ul>
          </div>
           ))
          ) : (
            <div className="container">No Enquiry Available</div>
          )} 
        </div>


        
      </div>


        {/* Quotes popup box start */}

        <div id="enquiry_popup" style={{ display: 'none' }}>
        <div className=" enquiryPopup">
          <div className=" conteners ">
            <div className="" onClick={modal}>
              <Link to="/enquiry">
                <IoCloseSharp className="IoCloseSharp" />
              </Link>
            </div>
            {/* <div className="flexcontener">
              <div className=" maincontent">
                <div className="enquirypoptitle">Enquiry - {quotesid}</div>
                <hr />
                <div className="popupboxleft">
                  Fullname&nbsp;&nbsp;&nbsp; -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="popupboxright">{fullname}</span>
                </div>

                <div className="popupboxleft">
                Quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="popupboxright">{quantity}</span>
                </div>
                <div className="popupboxleft">
                  Phone No.&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="popupboxright">{phone}</span>
                </div>
                <div className="popupboxleft">
                Enquirytype&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="popupboxright">{enquirytype}</span>
                </div>
                <div className="popupboxleft">
                  Rentduration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="popupboxright">{rentduration}</span>
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
                      value="acknowledgement"
                      id="exampleRtlRadioInline1"
                      type="radio"
                      name="exampleRtlRadioInline"
                    />
                    <label for="exampleRtlRadioInline1" style={{ margin: 20 }}>
                      Acknowledgement
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
                  <div>
                    <input
                      className="is-checkradio is-rtl"
                      id="exampleRtlRadioInline2"
                      onChange={(e) => setQuotesstatus(e.target.value)}
                      value="Re New for Rent"
                      type="radio"
                      name="exampleRtlRadioInline"
                    />
                    <label for="exampleRtlRadioInline2" style={{ margin: 20 }}>
                      Re New for Rent
                    </label>
                  </div>
                
                </div>
                <div>
                  <button className="submintbutton is-pulled-right">
                    Submit
                  </button>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </div>

      {/* Quotes popup box End  */}
    </>
  );
};

export default Enquiry;
