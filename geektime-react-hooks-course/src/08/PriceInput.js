import React, { useState, useCallback } from "react";

/**
 * value structure:
 * {
 *   amount: 10,
 *   currency: 'rmb'
 * }
 */
function PriceInput({
  value = { amount: 0, currency: "rmb" },
  onChange = () => {}
}) {
  const handleChange = useCallback(
    (deltaValue) => {
      onChange({
        ...value,
        ...deltaValue
      });
    },
    [value, onChange]
  );
  return (
    <div className="exp-02-price-input">
      <input
        value={value.amount}
        onChange={(evt) => handleChange({ amount: evt.target.value })}
      />
      <select
        value={value.currency}
        onChange={(evt) => handleChange({ currency: evt.target.value })}
      >
        <option value="rmb">RMB</option>
        <option value="dollar">Dollar</option>
        <option value="eur">EUR</option>
      </select>
    </div>
  );
}

// Example Wrapper
export default () => {
  const [price, setPrice] = useState();
  return (
    <>
      <PriceInput value={price} onChange={setPrice} />
      <p>{JSON.stringify(price)}</p>
    </>
  );
};
