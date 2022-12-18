import { useState } from "react";
import Image from 'next/image'

export default function AccordionNoCheck (props) {

  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div>
      <button style={{ width: "700px", height: "50px" , backgroundColor: "#ffffff" , borderRadius: "12px" , display: "flex" , justifyContent: "space-between" , alignItems: "center" , padding: "5px 20px" , margin: "10px 0" , fontSize: "1rem" , fontWeight: "bold" , color: "#07474b" , boxShadow: "0px 3px 6px rgba(0,0,0,0.35" , zIndex: "999" , cursor: "pointer" , border: "none" }} onClick={toggle} type="button">
        <p style={{ textAlign: "left" , width: "90%" }} >{props.title}</p> 
        <Image
          src="/images/ico_more.svg"
          height={17} 
          width={17}
          layout="fixed"
          alt="Check"
        />
      </button>

      <div style={{ display: isShowing ? "block" : "none", width: "700px" , height: "auto" , backgroundColor: "#87d8de" , padding: "50px 20px 40px 20px" , margin: "-20px 0 0 0" , zIndex: "898" , borderRadius: "0 0 12px 12px" , fontSize: "1rem" , color: "#07474b" }}dangerouslySetInnerHTML={{__html: props.content}}/>
    </div>
  )
}