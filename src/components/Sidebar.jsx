import React, { useState } from "react";
import "./Saidbar.css";
import { HiShoppingCart } from "react-icons/hi";
import { HiDocumentText } from "react-icons/hi";
import { GiShoppingCart } from "react-icons/gi";
import { TiShoppingBag } from "react-icons/ti";

import { GrTransaction } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { AiFillEdit,AiOutlineAntDesign,AiOutlineBoxPlot } from "react-icons/ai";
import { FaTh, FaBars, FaShoppingBag, FaThList } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../images/Emergecomputerslogo.svg";
import Admin from "../images/Admin/Admin.png";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/PurchasedOrder",
      name: "Purchased Order",
      icon: <HiShoppingCart />,
    },
    {
      path: "/rentalorder",
      name: "Rental Order ",
      icon: <GiShoppingCart />,
    },

    {
      path: "/enquiry",
      name: "Enquiry",
      icon: <HiDocumentText />,
    },
    {
      path: "/contactus",
      name: "Contactus",
      icon: <HiDocumentText />,
    },
    {
      path: "/transaction",
      name: "Transaction",
      icon: <GrTransaction />,
    },
    {
      path: "/rantals",
      name: "Rental Register",
      icon: <TiShoppingBag />,
    },
    {
      path: "/user",
      name: "users",
      icon: <FaUser />,
    },
    {
      path: "/product",
      name: "Products",
      icon: <FaShoppingBag />,
    },
    {
      path: "/master",
      name: "Master",
      icon: <AiFillEdit />,
    },
    {
      path: "/RentOffer",
      name: "RentOffer",
      icon: <AiOutlineAntDesign />,
    },
    {
      path: "/PurchasedOffer",
      name: "PurchaseOffer",
      icon: <AiOutlineBoxPlot />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            {/* <img src={Logo} alt="" /> */}
            {/* <div className="adminimag ">
              <img src={Admin} alt="" className="admininerimage" />
            </div> */}
          </h1>

          <div
            style={{ marginLeft: isOpen ? "150px" : "0px" }}
            className="bars"
          >
            {/* onClick={toggle}  */}
            <FaBars />
          </div>
        </div>

        {/* <div
          className="Adminprofile"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <div className="adminimag ">
            <img src={Admin} alt="" className="admininerimage" />
          </div>
          <div className="adminname">
            Mr. Jone
            <div className="adminpotion">Project manger</div>
          </div>
        </div> */}
        <div className="saidbar_componet">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link "
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
