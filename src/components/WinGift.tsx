import {FC, memo} from "react";
import Button from "../components/Button"

type WinGiftProps = {
  gift: {
    name: string,
    img: string
  },
  data: {
    setShowGift: any,
    setDisplay: any
}}

const WinGift: FC<WinGiftProps> = ({gift, data}) => (
  <div>
  <div className="max-w-sm p-4 opacity-100 bg-black opacity-95 mx-2">
    <p className="font-bold text-white text-2xl mb-2 text-center">Congratulation</p>
  <div className="max-w-72 h-72 mx-2">
  <img src={gift.img} className="w-full h-full object-cover"/>
  </div>
    <p className="font-medium text-lg text-white text-center my-2">You Win Brand New {gift.name}</p>
    <div className="flex w-full justify-end my-2">
    <Button onClick={()=>{
    data.setShowGift(false)
    data.setDisplay(false) 
  }}>Ok</Button>
      </div>
  </div>
  </div>
);

export default memo(WinGift);