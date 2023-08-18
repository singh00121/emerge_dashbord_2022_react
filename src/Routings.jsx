import React from "react";
import "./Routes.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashbord/Dashboard.jsx";
import AuthService from "../src/components/Login/auth.service";
import { Navigate } from "react-router-dom";
import Enquiry from "./pages/Enquiry/Enquiry.jsx";
import Transaction from "./pages/transaction/Transaction.jsx";
import User from "./pages/user/User.jsx";
import Product from "./pages/product/Product.jsx";
import Edits from "./pages/Master/Master.jsx";
import TopBar from "./components/topbar/TopBar";
import PurchasedOrder from "./pages/PurchasedOrder/PurchasedOrder";
import RentalOrder from "./pages/Rentalorder/RentalOrder";
import Rantals from "./pages/Rantals/Rantals";
import AddProduct from "./pages/product/Addproduct/AddProduct";
import ProductType from "./pages/Master/ProductType/ProductType.jsx";
import Brands from "./pages/Master/Brands/Brands.jsx";
// import Capacity from "./pages/Master/Capacity/Capacity";
import QualityType from "./pages/Master/Quality Type/QualityType";
import Speed from "./pages/Master/Speed/Speed";
// import Colors from "./pages/Master/Colors/Colors";
import AddProductForRent from "./pages/Rantals/AddProductForRent/AddProductForRent";
import RentalTransactions from "./pages/Rantals/RentalTransactions/RentalTransactions";
import RentalOrdersDetails from "./pages/Rentalorder/RentalOrdersDetails/RentalOrdersDetails";
import PurchasedOrdersDetails from "./pages/PurchasedOrder/PurchasedOrdersDetails/PurchasedOrdersDetails";
import "@fontsource/roboto";
import Login from "./components/Login/Login";
import Contactus from "./pages/Contactus/Contactus";
import Color from "./pages/Master/Colors/Color";
// import Capacities from "./pages/Master/Capacity/Capacitys";
import Capacitys from "./pages/Master/Capacity/Capacitys";
import RentOffer from "./pages/RentOffer/RentOffer";
import PurchasedOffer from "./pages/PurchesOffer/PurchasedOffer";
// import Capacity from "./pages/Master/Capacity/Capacity";
// import Capacities from "./pages/Master/Capacity/Capacities";

const Routings = () => {
  // const defaultPage = () => {

  if (!AuthService.getCurrentUser()) return <Login />;
  return (
    <div className="zoomParent">
      {/* <Login /> */}
      <TopBar />
      <div className="Work">
        <Sidebar />
        <div className="apptopbar">
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/" element={<Dashboard />} />

            {/*---------------- PurchasedOrder Routs ----------------------------- */}

            <Route path="/purchasedorder" element={<PurchasedOrder />} />
            <Route
              path="/purchasedorder/purchased-orders-details"
              element={<PurchasedOrdersDetails />}
            />

            {/*---------------- RentalOrder Routs ----------------------------- */}

            <Route path="/rentalorder" element={<RentalOrder />} />
            <Route
              path="/rentalorder/rentalOrdersdetails"
              element={<RentalOrdersDetails />}
            />

            {/*---------------- Enquiry Routs ----------------------------- */}

            <Route path="/enquiry" element={<Enquiry />} />

            {/*---------------- contactus Routs ----------------------------- */}
            <Route path="/contactus" element={<Contactus />} />

            {/* ------------------ Transsection Routs ----------------- */}
            <Route path="/transaction" element={<Transaction />} />

            {/* ----------------------- Rental Rgister  Routs  -------------------- */}
            <Route path="/rantals" element={<Rantals />} />
            <Route
              path="/rantals/add-product-ror-rent"
              element={<AddProductForRent />}
            />
            <Route
              path="/rantals/rentaltransactions"
              element={<RentalTransactions />}
            />

            {/* -----------------------User Roust ---------------------- */}
            <Route path="/user" element={<User />} />

            {/* ------------------- Product routs ---------------------- */}
            <Route path="/product" element={<Product />}></Route>
            <Route path="/product/addproduct" element={<AddProduct />} />

            {/*-------------------- Master Routs ------------------- */}
            <Route path="/master" element={<Edits />} />
            <Route path="/master/producttype" element={<ProductType />} />
            <Route path="/master/Brands" element={<Brands />} />
            <Route path="/master/Capacitys" element={<Capacitys />} />
            <Route path="/master/qualityType" element={<QualityType />} />
            {/* <Route path="/master/color" element={<Colors />} /> Color*/}
            <Route path="/master/color" element={<Color />} />
            <Route path="/master/speed" element={<Speed />} />

 {/*-------------------Offer Routs ------------------- */}
 <Route path="/RentOffer" element={<RentOffer />} />
 <Route path="/PurchasedOffer" element={<PurchasedOffer/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Routings;
