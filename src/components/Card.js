import React from "react";

import styles from "../assets/styles/card.module.css"
import Button from "./Button";

const Card = (props) => {
  console.log(styles);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        <img src={props.img} alt="" />
      </div>
      <h3 className={styles.blogTitle}>{props.title}</h3>
      <p className={styles.blogSummary}>{props.summary}</p>
      <div >
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
