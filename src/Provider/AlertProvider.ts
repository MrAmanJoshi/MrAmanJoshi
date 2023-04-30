import {useState, FC} from "react";
import { createContext } from "react";
 const PopupContext = createContext({});

type AlertProviderProps = {
  children: JSX.Element
}

const AlertProvider:FC<AlertProviderProps> = ({children}) => {
  const [popup, setPopup] = useState(false);
  
  return <PopupContext.Provider value= {{popup, setPopup}}> 
       {children}
  </PopupContext.Provider>
  
    };

 export default AlertProvider;