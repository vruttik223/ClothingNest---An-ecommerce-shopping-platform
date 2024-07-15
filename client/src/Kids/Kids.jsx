import React, { useState } from "react";
import kids from "./Kidsdata.jsx";
import "../Mens/Mens.css";
import { useDispatch } from "react-redux";
import { Add } from "../Redux/Actions";
import { Link } from "react-router-dom";

function Kids({ search }) {
  const [kidsdata, setkidsdata] = useState(kids);

  const dispatch = useDispatch();

  function send(e) {
    dispatch(Add(e));
  }

  let searchdatakids = kidsdata.filter((val) =>
    val.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mens">
      <h1>Kids Section</h1>
      <div className="grid">
        {searchdatakids.map((val, i) => {
          return (
            <div className="cards" key={i}>
              <div className="cardimg">
                {/* <Link to={`Kids/cartdetails/${val.id}`}> */}
                  <img src={val.imgurl} alt="" />
                {/* </Link> */}
              </div>
              <div className="content">
                <h3>{val.title}</h3>
                <p>Rating : {val.rating}</p>
                <p>
                  <b>₹{val.disprice}</b> MRP <del>{val.oprice}</del>{" "}
                  <i>
                    {Math.round(
                      ((val.oprice - val.disprice) / val.oprice) * 100
                    )}
                    % off
                  </i>
                </p>
                <p>free Delivery over ₹499</p>
                <button className="CartBtn" onClick={() => send(val)}>
                  <span className="IconContainer">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                  <p className="text3">Add to Cart</p>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Kids;
