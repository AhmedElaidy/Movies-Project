import React, { useState } from "react";
import "./trending.css";
import { trending } from "../../dummyData";
import Home from "../homes/Home";
const Trending = () => {
  const [items, setItems] = useState(trending);
  return (
    <React.Fragment>
      <section id='trending' className="trending">
        <Home items={items} />
      </section>
    </React.Fragment>
  );
};

export default Trending;
