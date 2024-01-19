import { useState, memo } from "react";
import Button from "../components/Button";
import WinGift from "../components/WinGift";

const LuckyWeel = () => {
  const gift = [
    { img: "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80", name: "Iphone 14 Pro Max" },
    { img: "https://images.unsplash.com/photo-1491472253230-a044054ca35f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2684&q=80", name: "I-Ped" },
    { img: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80", name: "Headphone" },
    { img: "https://images.unsplash.com/photo-1598209279122-8541213a0387?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80", name: "KTM RC 390" },
    { img: "https://images.unsplash.com/photo-1598443053960-0e8608b282fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80", name: "Digital Water Bottle" },
    { img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2944&q=80", name: "Smart Watch" },
    { img: "https://images.unsplash.com/photo-1616688921399-2d69e04f5fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80", name: "Helicopter" },
  ];
  const [id, setId] = useState(0)
  const [display, setDisplay] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [play, setPlay] = useState(true);

  const handleGiftWeel = () => {
    setDisplay(true);
    setPlay(false)
    const intervalId = setInterval(() => {
      const randomNo = Math.floor((Math.random() * gift.length));
      setId(randomNo)

    }, 100)

    setTimeout(() => {
      clearInterval(intervalId);
      setShowGift(true);
      setPlay(true);
    }, 8000);

  };

  return (<>

    <div className="flex flex-col items-center h-screen justify-center">

      {
        showGift &&
        <WinGift
          gift={gift[id]}
          data={{ setShowGift, setDisplay }}
        />
      }
      {showGift === false && <div>

        <div className="mb-10">
          {display === false && <p className="text-xl font-bold text-gray-900">Try Your Luck And Win Exciting Gifts.</p>}

          {display && <p className={"font-black text-xl " + (id % 2 == 0 ? "text-pink-400" : "text-cyan-400")}>{gift[id].name}</p>}

        </div>
        <div className="w-full flex justify-center">
          <Button disabled={play == false} onClick={handleGiftWeel}>Start</Button>
        </div>
      </div>}
    </div>
  </>
  )
};
export default memo(LuckyWeel);