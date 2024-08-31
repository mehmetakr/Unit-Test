import { useState } from "react";

const Form = () => {
  const [ischecked, setischecked] = useState(false);
  const [ishover, setishover] = useState(false);
  return (
    <div className="mt-5 my-4  d-flex justify-content-center">
      <input
        onChange={(e) => setischecked(e.target.checked)}
        className="form-check-input"
        id="terms"
        type="checkbox"
      />
      <div className="terms-box" >
        <p style={ { visibility: ishover ? "visible" : "hidden"}}>Size gerçekten birşey teslim etmiycem..</p>
        <label htmlFor="terms"> Koşulları okudum ve kabul ediyorum.</label>
      </div>

      <button
        onMouseEnter={() => setishover(true)}
        onMouseLeave={() => setishover(false)}
        disabled={!ischecked}
        className="btn btn-primary mx-3 terms-box"
      >
        Siparişi Onayla
      </button>
    </div>
  );
};

export default Form;
