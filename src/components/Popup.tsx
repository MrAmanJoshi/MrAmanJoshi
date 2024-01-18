import { FC } from "react";
import AlertHoc from "./withPopup";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';

type PopupProps = {
  message: string;
  setPopup: (value: boolean) => void;
};

const Popup: FC<PopupProps> = ({ message, setPopup }) => {
  const navigate = useNavigate();
  const handlePopup = () => {
    setPopup(false);
    navigate("/Profile");
  };
  return (
    <div className="h-screen flex justify-center items-center w-full fixed bg-black opacity-90">
      <div className=" p-4 drop-shadow-sm border bg-white w-72 opacity-100">

        <p className="text-gray-700 font-bold text-xl text-center">{message}</p>
        <div className="flex justify-end mt-5 mr-2">
          <Button onClick={handlePopup}>
            OK
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AlertHoc(Popup);