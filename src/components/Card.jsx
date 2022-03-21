import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

export const Card = ({ paginated }) => {
  
  let display;
  if (paginated) {
    display = paginated.map((character) => {
      let { id, name, image, status, species, gender } = character;
      
      return (
        <div
          key={id}
          className="col-lg-4 col-msd-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
          <div
            className={`${styles.card} d-flex fex-column justify-content-center align-items-center`}
          >
            <img className={`${styles.img} img-fluid`} src={image} alt={name} />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>

              <div>
                <div className="fs-6 fw-normal">Gender</div>
                <div className="fs-5">{gender}</div>

                <div className="fs-8">
                  <Link to={`/details/${id}`}>
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      
    });
  } else {
    display = "No Characters Found :(";
  }
  return <>{display}</>
};
