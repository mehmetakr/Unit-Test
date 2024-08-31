import axios from "axios";
import React, { useEffect, useState } from "react";

const Toppings = () => {
  const [data, setdata] = useState([]);
  const [basket, setbasket] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4030/toppings").then((res) => {
      setdata(res.data);
    });
  }, []);

  // ürüne tıklandığıında çalışirr

  const handlechanged = (ischecked, item) => {
    ischecked // eklenecek mi ?
      ? setbasket([...basket, item]) // sepete ekle
      : setbasket(basket.filter((i) => i.name !== item.name)); // sepetten kaldır
  };
  return (
    <div className="container">
      <h1 className="d-flex justify-content-center ">Sos Çeşitleri</h1>
      <h4 className="justify-content-center d-flex p-2">
        Tanesi : <span className="text-success">4 ₺</span>{" "}
      </h4>

      <h2 className="justify-content-center d-flex">
        Soslar Ücreti :  <span className="text-success px-3" data-testid=" total">{basket.length * 4}</span>
      </h2>

      <div className="row justify-content-center  gap-3 p-3">
        {data.map((item) => (
          <div className="top-card m-3" style={{ width: "150px" }}>
            <label
              className="d-flex align-items-center 
             justify-content-center flex-column "
            >
              <img height={100} src={item.imagePath} alt="çeşit-resim" />
              <p>{item.name}</p>
              <input
                onChange={(e) => handlechanged(e.target.checked, item)}
                id={item.nam}
                type="checkbox"
              />
            </label>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Toppings;
