import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/dashbord/Dashboard.jsx';

import Enquiry from './pages/Enquiry/Enquiry.jsx';
import Transaction from './pages/transaction/Transaction.jsx';
import User from './pages/user/User.jsx';
import Product from './pages/product/Product.jsx';
import Edits from './pages/Master/Master.jsx';
import TopBar from './components/topbar/TopBar';
import PurchasedOrder from './pages/PurchasedOrder/PurchasedOrder';
import RentalOrder from './pages/Rentalorder/RentalOrder';
import Rantals from './pages/Rantals/Rantals';
import AddProduct from './pages/product/Addproduct/AddProduct';
import ProductType from './pages/Master/ProductType/ProductType.jsx';
import Brands from './pages/Master/Brands/Brands.jsx';
import Capacity from './pages/Master/Capacity/Capacity';
import QualityType from './pages/Master/Quality Type/QualityType';
import Speed from './pages/Master/Speed/Speed';
import Colors from './pages/Master/Colors/Colors';
import AddProductForRent from './pages/Rantals/AddProductForRent/AddProductForRent';
import RentalTransactions from './pages/Rantals/RentalTransactions/RentalTransactions';
import RentalOrdersDetails from './pages/Rentalorder/RentalOrdersDetails/RentalOrdersDetails';
import PurchasedOrdersDetails from './pages/PurchasedOrder/PurchasedOrdersDetails/PurchasedOrdersDetails';
import '@fontsource/roboto';
import Login from './components/Login/Login';
const App = () => {
  return (
    <div className="zoomParent">
      {/* <Login /> */}
      <BrowserRouter>
        <TopBar />
        <div className="Work">
          <Sidebar />
          <div className="apptopbar">
            <Routes>
              <Route path="/" element={<Login />} />
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/purchasedorder" element={<PurchasedOrder />} />
              <Route
                path="/purchasedorder/purchased-orders-details"
                element={<PurchasedOrdersDetails />}
              />
              <Route path="/rentalorder" element={<RentalOrder />} />
              <Route
                path="/rentalorder/rentalOrdersdetails"
                element={<RentalOrdersDetails />}
              />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/transaction" element={<Transaction />} />
              <Route path="/rantals" element={<Rantals />} />
              <Route
                path="/rantals/add-product-ror-rent"
                element={<AddProductForRent />}
              />
              <Route
                path="/rantals/rentaltransactions"
                element={<RentalTransactions />}
              />
              <Route path="/user" element={<User />} />
              <Route path="/product" element={<Product />}></Route>
              <Route path="/product/addproduct" element={<AddProduct />} />
              <Route path="/master" element={<Edits />} />
              <Route path="/master/producttype" element={<ProductType />} />
              <Route path="/master/Brands" element={<Brands />} />
              <Route path="/master/capacity" element={<Capacity />} />
              <Route path="/master/qualityType" element={<QualityType />} />
              <Route path="/master/color" element={<Colors />} />
              <Route path="/master/speed" element={<Speed />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
