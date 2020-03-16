import React from "react";
import "./done-page.scss";

const DonePage = () => {
  return (
    <div className="done-page">
      <div className="ellipce-done">
        <svg
          width="135"
          height="107"
          viewBox="0 0 135 107"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 60.5L46.5 102.5L132 3"
            stroke="#613EEA"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="text-done">Done</div>
    </div>
  );
};

export default DonePage;
