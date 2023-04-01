import React from "react";

import "./general.css";
import Button from "./Button";

const Card = (props) => {
  return (
    <div class="cardContainer">
      <div class="cardImageContainer">
        <img src={props.img} alt="" />
      </div>
      <h3 class="blogTitle">{props.title}</h3>
      <p class="blogSummary">{props.summary}</p>
      <div class="card-btn-container">
        {/* <a href={props.link} class="card-btn">
          Devamını Oku
        </a> */}
        <Button
          isLink={true}
          link={props.link}
          text="Devamını Oku..."
          tip="primary"
        />
      </div>
    </div>
  );
};

export default Card;
