
const Card = ({ setbasket, basket, item }) => {




    // kartta bu üründen kaç adet var hesapla  
// Find sepetteki ilk bulduğu elemanı döndürür ancak bizzat  aradıgımız eleman için filter kullanıcaz. 

 const found = basket.filter((i) => i.name == item.name) ;

const amount  =found.length;



const handlereset = () => {



setbasket(basket.filter((i) => i.name !== item.name));

};
     
  return (
    <div
      className="d-flex flex-column align-items-center gap-2 border rounded p-3"
      style={{ width: "190px" }}
    >
      <img height={100} src={item.imagePath} alt="çeşit-resim" />
      <span className="fs-4">{item.name}</span>

      <div className="d-flex gap-2 mt-4 align-items-center">
        <button  onClick={handlereset}  className=" btn btn-sm  btn-outline-danger">Sıfırla</button>
        <span data-testid ="amount" className="fs-3">{amount}</span>
        <button onClick={() => 

setbasket([...basket,item])}
 className="btn btn-sm btn-outline-success">Ekle</button>
      </div>
    </div>
  );
};

export default Card;
