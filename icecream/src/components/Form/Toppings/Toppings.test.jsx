import { findAllByRole, render ,screen} from "@testing-library/react";
import Toppings from ".";
import userEvent from "@testing-library/user-event";

test("APİ den gelen veriler için ekrana kartlar basılıyor mu ?", async () => {
  render(<Toppings />);
  

  const images = await screen.findAllByAltText("çeşit-resim");

  expect(images.length).toBeGreaterThan(0);

});

test('sosları ekleme ve çıkarma işlemleri toplama etki eder', async () => {

  const user  =userEvent.setup();

  render(<Toppings />);

  // toplam spanı al ( total degişkenine ulastık ve yazdık )
  const total = screen.getByTestId("total");

  // bütün sosları çağır..

  const toppings = await screen.findAllByRole("checkbox");

  // soslar ücreti 0 mı

  expect(total.textContent).toBe("0");
  // soslardan birine tıkla

  await user.click(toppings[0]);

  // total 3' eşit mi

  expect(total.textContent).toBe("4");
  // soslardan birine daha tıkla

  await user.click(toppings[2]);
  // total 6 'ya eşit mi ?

  expect(total.textContent).toBe("8");
  // daha önce eklenen sonra tekrar tıkla ve çıkar

  await user.click(toppings[0]);
  // total 3' e eşit oldumu

  expect(total.textContent).toBe("4");

  // daha önce eklenen 2 sosa tıkla ve cıkar
 await user.click(toppings[2]);
  // total degerımız sıfırlandı mı

  expect(total.textContent).toBe("0");

});