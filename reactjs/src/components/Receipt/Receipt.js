import React from "react";
import ReceiptRow from "./../ReceiptRow/ReceiptRow";
import {
  getFeeForTime,
  getTotalFeeForDate,
} from "../../tollcalculator/tollcalculator";
import "./Receipt.css";

const Receipt = ({ date, vehicle }) => {
  const passages = vehicle.passages[date];
  const totalFee = getTotalFeeForDate(vehicle, date);

  const rows = passages.map((time, index) => {
    const fee = getFeeForTime(time);
    return <ReceiptRow time={time} fee={fee} key={index}></ReceiptRow>;
  });

  return (
    <div data-testid="receipt" className="receipt">
      <h3 className="receipt-date">{date}</h3>
      <ul className="receipt-passages-rows">{rows}</ul>
      <p className="receipt-total-fee">TOTAL: {totalFee} SEK</p>
    </div>
  );
};

export default Receipt;
