import { useState, useEffect } from "react"
import { getRandomQoutes } from "../components/Api"
import Button from "../components/Button";
import Loading from "../components/Loading";

type qoutes = {
  quote: string;
  author: string;
  id: number
}

const RandomQoutes = () => {

  const [qoutes, setQoutes] = useState<qoutes>({
    quote: '',
    author: '',
    id: 1
  });
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRandomQoutes(id).then((data) => (setQoutes(data), setLoading(false)));

  }, [id]);

  const garnateQuoteId = () => {
    const randomId = Math.floor((Math.random() * 100) + 1);
    setId(randomId);
    setLoading(true)
  }

  if (loading) {
    return < Loading />

  }

  return (
    <div className="h-screen flex flex-col items-center justify-center ">

      <div className={"border  max-w-sm rounded-lg p-4 m-2 " + (qoutes.id % 2 === 0 ? "border-cyan-400" : "border-red-400")}>

        <p className="font-bold text-2xl text-gray-800 mt-4 mb-6 text-center">Quotes</p>
        <p className={qoutes.id % 2 === 0 ? "text-lg font-bold text-pink-600" : "text-green-600 text-lg font-bold"}>
          {
            qoutes.quote
          }
        </p>
        <p className={"text-end font-bold text-lg mt-2 mb-4 " + (qoutes.id % 2 === 0 ? "text-green-700" : "text-pink-700")}>{qoutes.author}</p>

        <Button onClick={garnateQuoteId}>New Quote</Button>
      </div>
    </div>
  )
};

export default RandomQoutes;