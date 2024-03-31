import React from "react";
import { RxDoubleArrowUp } from "react-icons/rx";
import "./index.css";

export default function BackScrollTop() {
    document.body.addEventListener("scroll", () => {
      const hieghtScroll = document.body.scrollTop;
      const iconArrowTop = document.getElementById("scrollTop");
  
      if (hieghtScroll > 100) iconArrowTop.classList.remove("hidde");
      if (hieghtScroll < 100) iconArrowTop.classList.add("hidde");
    });

    const backScrollTop = () => {
      document.body.scrollTop = 0;
    };
    return (
        <button 
          title="Voltar para o inicio"
          onClick={()=>backScrollTop()}
          id="scrollTop" 
          className="icon-btn-top hidde"
        >
          <RxDoubleArrowUp />
        </button>
    );
}
