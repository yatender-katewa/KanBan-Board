import React from "react";

import "./Card.css";

export default function Card(props) {
  return (
    <>
      <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id">{props.cardDetails.id}</div>
          <div className="card-profile">
            <div className="card-profile-initial">
              {props.cardDetails.userObj.name[0]}
              {props.cardDetails.userObj.name[1]}
            </div>
            <div
              className={
                props.cardDetails.userObj.available
                  ? "card-profile-initial-available card-profile-initial-available-true"
                  : "card-profile-initial-available"
              }
            ></div>
          </div>
        </div>
        <div className="card-title">{props.cardDetails.title}</div>
        <div className="card-tag">
          {
            {
              0: (
                <div className="card-tag-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 1024 1024"
                  >
                    <image
                      href={require("../../Download/symbols/1.png")} // Adjust the path based on your project structure
                      x="0"
                      y="0"
                      width="100%"
                      height="90%"
                    />
                  </svg>
                </div>
              ),
              1: (
                <div className="card-tag-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                  >
                    <image
                      href={require("../../Download/symbols/2.png")} // Adjust the path based on your project structure
                      x="0"
                      y="0"
                      width="100%"
                      height="90%"
                    />
                  </svg>
                </div>
              ),
              2: (
                <div className="card-tag-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                  >
                    <image
                      href={require("../../Download/symbols/3.png")} // Adjust the path based on your project structure
                      x="0"
                      y="0"
                      width="100%"
                      height="90%"
                    />
                  </svg>
                </div>
              ),
              3: (
                <div className="card-tag-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                  >
                    <image
                      href={require("../../Download/symbols/4.png")} // Adjust the path based on your project structure
                      x="0"
                      y="0"
                      width="100%"
                      height="90%"
                    />
                  </svg>
                </div>
              ),
              4: (
                <div className="card-tag-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                  >
                    <image
                      href={require("../../Download/symbols/5.png")} // Adjust the path based on your project structure
                      x="0"
                      y="0"
                      width="100%"
                      height="90%"
                    />
                  </svg>
                </div>
              )
            }[props.cardDetails.priority]
          }

          {props.cardDetails.tag.map((tag) => {
            return (
              <div className="card-tag-box">
                <div className="card-tag-title">{tag}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
