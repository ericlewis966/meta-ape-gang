import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { Mint } from "constants/image-constant";
import "./index.css";

const CollectionSwiper = () => {
  const { Agent, RPG, Sporter, King, Mafia, Guerilla } = Mint;
  const style = {
    marginTop: "0px",
  };

  return (
    <Carousel
      infiniteLoop={true}
      width={"500px"}
      showThumbs={false}
      style={style}
      autoPlay
      interval={3000}
      labels={false}
      showStatus={false}
      showIndicators={false}
      showArrows={false}
    >
      <div>
        <img alt="Collection" className="collection-item" src={Agent} />
      </div>
      <div>
        <img alt="Collection" src={RPG} />
      </div>
      <div>
        <img alt="Collection" src={Sporter} />
      </div>
      <div>
        <img alt="Collection" src={Mafia} />
      </div>
      <div>
        <img alt="Collection" src={King} />
      </div>
      <div>
        <img alt="Collection" src={Guerilla} />
      </div>
    </Carousel>
  );
};

export default CollectionSwiper;
