import React from "react";

import style from "./style.module.css"
import Navbar from "../../components/Navbar";

export default function index() {
  return (
    <div>
      <Navbar />
      <div className={style.titleHeader}>
        <h1>How WhisperMe Works</h1>
      </div>
      <div className={style.main}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Molestiae optio maiores, sapiente itaque asperiores ratione
          labore amet quos nisi cum distinctio deserunt voluptatem 
          aliquid similique eaque enim mollitia aliquam dignissimos.</p>
      </div>
      
    </div>
  );
}
