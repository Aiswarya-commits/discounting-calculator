import React from 'react';

function Result({result}) {
  return (
    <div className="result">
      <h3>Calculation Results</h3>
      <p>Total Discount Amount (Money Saved): ${result.discountAmount}</p>
      <p>Total Tax Amount: ${result.taxAmount}</p>
      <p>Final Price for {result.quantity} item(s): ${result.finalPrice}</p>
    </div>
  );
}

export default Result;
