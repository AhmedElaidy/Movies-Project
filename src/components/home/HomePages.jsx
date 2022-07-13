import React, { useState } from "react";
import Homes from "../homes/Homes";
import Upcomming from "../Upcomming/Upcomming";
import { latest, recommended, upcome } from "../../dummyData";
import Trending from "../Trending/Trending";

const HomePage = () => {
  const [items, setItems] = useState(upcome);
  const [item, setItem] = useState(latest);
  const [rec, setRec] = useState(recommended);
  return (
    <React.Fragment>
      <Homes />
      <Upcomming items={items} title="Upcomming Movies" />
      <section id="latest">
        <Upcomming items={item} title="Latest Movies" />
      </section>
      <Trending />
      <section id="recommended">
        <Upcomming items={recommended} title="Recommended Movies" />
      </section>
    </React.Fragment>
  );
};

export default HomePage;
