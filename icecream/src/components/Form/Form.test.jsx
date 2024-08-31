import { fireEvent, render ,screen} from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";

test("Koşulları onaylanmasına göre buton aktifliği", async () => {
  // user kurulumu yap

  const user = userEvent.setup();

  // test edilecek bileşeni ekrana bas
  render(<Form />);
  // gerekli elemanları çağır.

  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  // 1) checkbox tiksizdir.
  // tiksiz olma durumunu kontrol eder.
  expect(checkbox).not.toBeChecked();
  // 2)  buton inaktifmi

  expect(button).toBeDisabled();

  // 3) checkboxa tıkla

  await user.click(checkbox);

  // 4) buton aktiftir

  expect(button).toBeEnabled();
  //  5) checkboxtan tiki kaldır

  await user.click(checkbox);
  // 6) buton inaktiftir.

  expect(button).toBeDisabled();
});

test("Onay butonu hover durumuna göre bildirim gözükür.. " , async () => {  

  const user = userEvent.setup();

render(<Form />);

const checkbox = screen.getByRole("checkbox");
const button = screen.getByRole("button");

// normal şartlarda getByText e cagırıcagımız elemanın içindeki yazının tamamını veririz.

// const popup= screen.getByText("Size gerçekten birşey teslim etmeyeceğiz..")

// eğerki exact değerini true yaparsak buna gerek kalmaz

//  const popup2 = screen.getByText("Size gercekten  "     , { exact:  false});

// exact false  mantıgında çalışır ama regex tanımı true false acıklamasına ihtiyac duymazzz..
const popup3 = screen.getByText(/size gerçekten/i); // insensetive

// 1 ) chekcbox tikle
 await user.click(checkbox);
// 2 )  bildirim gözükmuyomu
expect(popup3).not.toBeVisible();
// 3 )  mouse butonuna üzerine götür (fireevent methodu senkron bir methodtur..)
   fireEvent.mouseEnter(button);
// 4 ) bildirim gözüküyormu
 expect(popup3).toBeVisible();
// 5 ) mouse buton üzerinden kaldır.
fireEvent.mouseLeave(button); 
// 6 ) bildirim gittimi
expect(popup3).not.toBeVisible();



});

