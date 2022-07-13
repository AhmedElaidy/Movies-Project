import React, { Fragment, useState } from "react";
import { homeData } from "../../dummyData.js";
import Home from "./Home";
import './home.css'



const Homes = () => {
  const [items, setItems] = useState(homeData);

  return (
    <Fragment>
      <section className="home">
        <Home items={items} />
      </section>
      <div className="margin"></div>
    </Fragment>
  );
};

export default Homes;
