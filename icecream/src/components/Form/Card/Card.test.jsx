import { getByTestId, render } from "@testing-library/react";
import Card from ".";
import userEvent from "@testing-library/user-event";


const item = {
  name: "Chocolate",
  imagePath: "/images/chocolate.png",
};

const basket = [];

// prop olarak veri alan bileşenleri test ediyorsak
// aldıkları propların benzerini göndermemiz gerekir .

test("Miktar alanı Sepet verisine uygundur.Gönderdiğim item verisine göre kart içeriği basılır. ", async () => {

    // Prop olarak göndermemiz gereken orijinal fonksiyonu Card.test.js  de tanımlayamayacıgımız için
    // bu fonksiyonu taklit eden mock fonksiyonu tanımlamak gerekir.
    //Bu mock fonksiyonuyla ne zaman çağrıldı hangi parametreler gönderildi tesleri yapabiliriz

    const mockfn = jest.fn();

  render(<Card item={item} basket={basket} setbasket={mockfn } />);




//MİKTAR ALANININ TESTİNİ GERÇEKLEŞTİRDİK.

  // Artırma idsine ulasarak miktara ulasıyoruz 
   const amount = screen.getByTestId("amount")
    
   // Sepette 2 chocolate oldugu ıcın miktar 2 dir.
   expect(amount.textContent).toBe("2");


// içerisinde chocolate yazan bir eleman varmı ?

  screen.getByText(item.name)
 // içerisinde "/images/chocolate.png" yazan resim var mı ?
const image = screen.getByAltText("çeşit-resim");
   
expect(image).toHaveAttribute("src", item.imagePath)


 

});

test("Butonlara tıklanınca setmothodu doğru paramatrelerle tetiklenir..")

// Prop olarak göndermemiz  gereken orijinal fonksiyonu Card.test.js 

const mockfn = jest.fn();  


render(<Card item={item}  basket={basket} setbasket={mockfn}/>)


// butonları al     
const addbuton =screen.getByRole("button" ,{name :"Ekle"});
 const deletbuton = screen.getByRole("button", {name:"Sıfırla"});


 // ekle butonuna tıkla 

  const user =  userEvent.setUp();

  await user.click(addbuton);

// setmethodu doğru parametreler ile çalıştı mı ?

 // ! tohaveBeenCalled : Fonksiyon bu ifadeye kadar birkez olsun hiç çalıştı mı ?
 // setmethodu dogru parametreler ile calıstı mı ?
expect(mockfn).toHaveBeenNthCalledWith ();


await user.click(deletbuton);


// setmethodu dogru parametreler calıstı mı ? 

expect(mockfn).toHaveBeenNthCalledWith([

{ "name": "    Çilekl Dondurma",
        "imagePath": "/images/çilekli.png"},
])














