import React from "react";
import styles from "./Announcement.module.css";

export default function Announcement() {
  return (
    <>
      <div className={`${styles.div} py-2 text-center text-white`}>
        <p className="m-0 p-0 font14">
          Super Deal! Free Shipping on Orders Over 50$
        </p>
      </div>
    </>
  );
}
