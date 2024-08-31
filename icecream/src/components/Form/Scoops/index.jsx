import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";
const Scoops = () => {
  const [basket, setbasket] = useState([]);
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4030/scoops").then((res) => setdata(res.data));

    // bu bos parantez sadece en basta bir kez render ediliceği zaman çalışır . Ondan sonra hiç çalışmaz . (Yani bir kereye mahsus olarak calısır sadece.) Bileşen tekrar render edilse bile tekrar calısmaz..
  }, []);

  return (
    <div className="container my-5">
      <h2 className="justify-content-center d-flex  align-items-center">
        Dondurma Çeşitleri
      </h2>
      <h3 className=" justify-content-center d-flex align-items-center p-2  ">
        Tanesi :<span className="mx-2 text-success fs-4"> 200₺</span>
      </h3>

      <h4 className="justify-content-center align-items-center d-flex">
        Çeşitler Ücreti :
        <span data-testid="total" className=" mx-2 text-success">
          {basket.length * 20} ₺
        </span>
      </h4>
      <div className="row justify-content-between mt-4 gap-5 m-4 ">
        {data.map((i) => (
          <Card basket={basket} setbasket={setbasket} item={i} key={i.name} />
        ))}
      </div>
    </div>
  );
};
export default Scoops;
