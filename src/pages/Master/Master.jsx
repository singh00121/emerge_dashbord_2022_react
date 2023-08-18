import React from "react";
import "./Master.css";
import { useNavigate } from "react-router-dom";

function Master() {
  let navigate = useNavigate();
  const Productpage = () => {
    let path = `/master/producttype`;
    navigate(path);
    // navigate(`/addproduct`);
    // <Navigate to="/addproduct" replace={true} />
  };
  const Brands = () => {
    let path = `/master/Brands`;
    navigate(path);
    // navigate(`/addproduct`);
    // <Navigate to="/addproduct" replace={true} />
  };
  const Capacity = () => {
    let path = `/master/Capacitys`;
    navigate(path);
    // navigate(`/addproduct`);
    // <Navigate to="/addproduct" replace={true} />
  };
  const QualityType = () => {
    let path = `/master/qualityType`;
    navigate(path);
    // navigate(`/addproduct`);
    // <Navigate to="/addproduct" replace={true} />
  };
  const Color = () => {
    let path = `/master/color`;
    navigate(path);
    // navigate(`/addproduct`);
    // <Navigate to="/addproduct" replace={true} />
  };
  const Speed = () => {
    let path = `/master/speed`;
    navigate(path);
    // navigate(`/addproduct`);
    // <Navigate to="/addproduct" replace={true} />
  };
  return (
    <>
      {" "}
      <div className="masterparemntdiv ">
        <div>
          <h3 className="font-weight-bold p-2 underline text-capitalize">
            Master
          </h3>
        </div>
        <div className="mastermain">
          <div className="materType" onClick={Productpage}>
            Product Type
          </div>
          <div className="materType" onClick={Capacity}>
            Capacity
          </div>
          <div className="materType" onClick={Color}>
            Color
          </div>
          <div className="materType" onClick={Brands}>
            Brand
          </div>
          <div className="materType" onClick={QualityType}>
            Quality Type
          </div>
          <div className="materType" onClick={Speed}>
            Speed
          </div>
        </div>
      </div>
    </>
  );
}

export default Master;
