import React, { useState } from 'react';
import Result from './Result';


function Calculator() {
    const [originalPrice, setOriginalPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [taxRate, setTaxRate] = useState(0);
  const [result, setResult] = useState(null);

  const calculateDiscount = () => {
    const totalOriginalPrice = originalPrice * quantity;
    const discountAmount = (totalOriginalPrice * discountPercentage) / 100;
    const priceAfterDiscount = totalOriginalPrice - discountAmount;
    const taxAmount = (priceAfterDiscount * taxRate) / 100;
    const finalPrice = priceAfterDiscount + taxAmount;

    setResult({
        discountAmount: discountAmount.toFixed(2),
        taxAmount: taxAmount.toFixed(2),
        finalPrice: finalPrice.toFixed(2),
      });
    };
  
    const resetCalculator = () => {
      setOriginalPrice(0);
      setDiscountPercentage(0);
      setQuantity(1);
      setTaxRate(0);
      setResult(null);
    };
  return (
    <div className='all'>
      <div className="calculator">
              <h2 className='dis'>Discount Calculator</h2>

      <div className="form">
        <label>Original Price (per item)</label>
        <input type="number" value={originalPrice} onChange={(e) => setOriginalPrice(Number(e.target.value))} />

        <label>Discount Percentage</label>
        <input type="number" value={discountPercentage} onChange={(e) => setDiscountPercentage(Number(e.target.value))} />

        <label>Quantity</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />

        <label>Tax Rate (%)</label>
        <input type="number" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} />

        <button onClick={calculateDiscount}>Calculate Discount</button>
        <button onClick={resetCalculator}>Reset</button>
      </div>
      {result && <Result result={result} />}
    </div>
    </div>
    
  );
}

export default Calculator;
