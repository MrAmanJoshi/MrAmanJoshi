import  { useState } from "react";

const AlertHoc = (IncomingComponent) =>{ const OutgoingComponent = (props) => {
 const [popup, setPopup] = useState(false); 
  return < IncomingComponent  {...props} popup={popup} setPopup={setPopup} />
  }
 return OutgoingComponent
};

export default AlertHoc;