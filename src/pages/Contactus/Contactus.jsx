import React, { useEffect, useState } from 'react';
import authHeader from '../../components/Login/auth-headers';
import axios from 'axios';
import ServerUrl from '../../Baseurl/ServerURL';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';

const Contactus = () => {
  // this is for tab for maseege
  const [show, setShow] = useState('');
const [Items, setItems] = useState('')
const [Lenght, setLenght] = useState('')

const [quotesstatus, setQuotesstatus] = useState('');

const [contactusid, setcontactusid] = useState('')
const [Fullname, seFullname] = useState('')
const [Email, setEmail] = useState('')
const [Phone, setPhone] = useState('')
const [Date, setDate] = useState('')
const [contactusmessage, setcontactusmessage] = useState('')
const [searchdata, setSearchdata] = useState("");

  // get enqury api start

  const fetchData = async () => {
    const data = {
      page: 1,
      size: 20,
    };
    await axios
      .post(`${ServerUrl}/getAllContactus`, data, {
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
      .get(`${ServerUrl}/getContactusCount`, {
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

  const hanldeGetdata = async (contactus_id) => {
    console.log(contactus_id);
    axios
      .get(`${ServerUrl}/getContactusById?contactus_id=${contactus_id}`, {
        headers: authHeader(),
      })
      .then((res) => {
        if (res.data.data) {
          const i = res?.data?.data.length - 1;
    
          setcontactusid(res?.data?.data[i].contactus_id);
          seFullname(res?.data?.data[i].contactus_name);
          setEmail(res?.data?.data[i].contactus_email);
          setPhone(res?.data?.data[i].contactus_mobile);
          setcontactusmessage(res?.data?.data[i].contactus_message);
          setDate(res?.data?.data[i].creationDate.slice(0, 10));
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
      `${ServerUrl}/updateContactus`,
      {
        contactus_status: quotesstatus,
        contactus_id: contactusid,
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
  size: 20,
};
const searchapidata = async () => {
  await axios
    .post(`${ServerUrl}/searchContactus`, searchdataitems, {
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
    <div>
      <div className="Parched_top_secton">
        {/* user topbar start  */}
        <div className="User_filter">
          <div>
            <h3 className="font-weight-bold pt-3 underline text-capitalize">
              Contact us <br />
            </h3>{' '}
            {/* {Lenght} */}
            <div className="tolal_user">{Lenght} - Contact</div>
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
          {Items ? (
            Items.map((item, index) => (
          <div className="Dashbord_tabldiv  tavlcolor">
            <div className={show ? 'masege' : 'masege'}>
              <div onClick={() => setShow(!show)} className="">
                <ul className="dashbord_list" onClick={() => hanldeGetdata(item.contactus_id)}>
                  <li>{index+1}</li>

                  <li className="Order_tabl"> {item.contactus_name}</li>
                  <li className="Order_tabl">{item.contactus_mobile}</li>
                  <li className="Order_tabl">{item.contactus_email}</li>
                  <li className="dashbord_date">
                    {item.creationDate.slice(0, 10)}
                    {/* 13 October 2022 04 :15 PM */}
                  </li>
                  <li className="Order_tabl">{item.contactus_status}</li>

                  {/* <li className="Recived">
                    <div className="newst_first">
                      <select
                        name="select capacity"
                        id="selectcapacity"
                        className="Select_product"
                      >
                        <option value="pending" className="pending">
                          pending
                        </option>
                        <option value="Aknowledge" className="Aknowledge">
                          Aknowledge
                        </option>
                        <option value="Complet" className="Complet">
                          Complet
                        </option>
                      </select>
                    </div>
                  </li> */}
                </ul>
              </div>

              {/* {show ? (
                <p className="masege messege2">
                  <div>Messege:- </div>
                  <div>
                    {item.contactus_message}
                  </div>
                </p>
              ) : (
                ''
              )} */}
            </div>
          </div>

          
         ))
          ) : (
            <div className="container">No Enquiry Available</div>
          )}
        </div>
      </div>
         {/* Contactus popup box start */}

         <div id="enquiry_popup" style={{ display: 'none' }}>
        <div className=" enquiryPopup">
          <div className=" conteners ">
            <div className="" onClick={modal}>
              <Link to="/contactus">
                <IoCloseSharp className="IoCloseSharp" />
              </Link>
            </div>
            <div className="flexcontener">
              <div className=" maincontent">
                <div className="enquirypoptitle">Contactus - {contactusid}</div>
                <hr />
                <div className="popupboxleft">
                  Fullname&nbsp;&nbsp;&nbsp; -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="popupboxright">{Fullname}</span>
                </div>

                <div className="popupboxleft">
                Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="popupboxright">{Email}</span>
                </div>
                <div className="popupboxleft">
                  Phone No.&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="popupboxright">{Phone}</span>
                </div>
                <div className="popupboxleft">
             Message&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="popupboxright">{contactusmessage}</span>
                </div>
                <div className="popupboxleft">
                  Date &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="popupboxright">{Date}</span>
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

      {/* Contactus popup box End  */}
    </div>
  );
};

export default Contactus;
