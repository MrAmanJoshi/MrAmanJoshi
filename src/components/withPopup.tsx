
import { useState } from "react";

const AlertHoc = (IncomingComponent: any) => {
  const OutgoingComponent = (props: any) => {
    const [popup, setPopup] = useState(false);
    return <IncomingComponent  {...props} popup={popup} setPopup={setPopup} />;
  };
  return OutgoingComponent;
};

export default AlertHoc;
