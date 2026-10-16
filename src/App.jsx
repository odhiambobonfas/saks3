import React from "react";
import GiftCardReveal from "./GiftCardReveal";

export default function App() {
  return (
    <div className="page">
      <GiftCardReveal
        cardNumber="6366400057525005"
        pin="3612"
        amount={25.0}
        currency="USD"
      />
    </div>
  );
}
