import { render, screen } from "@testing-library/react";
import Scoops from ".";
import userEvent from "@testing-library/user-event";

/* 
 ! Seçiciler
 ? Method
 * method get > query > find
 * > get element başlangıcta dom'da var ,ise kullanılır | eleman bulamazsa test fail olur.
*  > query > get ile benzer çalışır ama eleman bulamazsa null döndürür  
* find > Elememtin ne zaman ekrana basılcağını  belli değilse (async)

* not : find methodu promise döndürür
* bu yüzden async await kullanırız..
 * Eğer all kullanırsak cevap her zaman dizi şeklinde döner..
  */

test("API'den gelen veriler için ekrana kartlar basılır.", async () => {

  render(<Scoops />);


  // Ekrana basılan resimleri al
  const images = await screen.findAllByAltText("çeşit-resim");

  // Gelen resimlerin sayısı 1'den büyük mü
  expect(images.length).toBeGreaterThanOrEqual(1);
});

test("Çeşit ekleme ve sıfırlama işleminin toplam fiyata etkisi", async () => {
  // user kurulumunu yap
  const user = userEvent.setup();

  render(<Scoops />);

  const addButtons = await screen.findAllByRole("button", { name: "Ekle" ,});
  const delButtons = await screen.findAllByRole("button", { name: "Sıfırla" });


  // ekleme ve sıfırlama butonlarından çağır.

  // toplam spanı çağır

  const total = screen.getByTestId("total");
  // toplam fiyat 0 dır.

  expect(total.textContent).toBe('0 ₺');

  // Ekle butonlarından birine tıkla..

  await user.click(addButtons[0]);

  // 3) Toplam fiyat 20 olur

  expect(total.textContent).toBe("20 ₺");

  // 4 farklı bir çeşitten 2 tane eklenir..

  await user.dblClick(addButtons[2]);
  // Toplam fiyatı içeren span öğesini al

  // Toplam fiyatı 60 olur..

  expect(total.textContent).toBe("60 ₺");

  //   1 Tane eklenenin sıfırla  butonuna tıkla

  await user.click(delButtons[0]);

  //   Toplam fiyatı 40 olur..

  expect(total.textContent).toBe("40 ₺");

  // ) 2 tane ekleneni sıfırla

  await user.click(delButtons[2]);

  // Toplam fiyatı 0  olur

  expect(total.textContent).toBe("0 ₺");
});
