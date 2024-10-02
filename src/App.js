// src/App.js

import React from "react";

// Generate random price and omnibus flag
const generateRandomPrice = () => (Math.random() * 100).toFixed(2);

// Card component
const Card = ({ title, price, omnibus }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center border border-gray-200">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-1">Price: ${price}</p>
      <p
        className={`mb-0 ${omnibus ? "text-green-500" : "text-red-500"} ${omnibus ? "hidden" : ""}`}
      >
        Omnibus: {omnibus ? "True" : "False"}
      </p>
    </div>
  );
};

const CardPromo = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white bg-pink-500 shadow-md rounded-lg p-4 text-center border border-gray-200">
      <h2 className="text-lg font-bold mb-2">Promo</h2>
    </div>
  );
};

const App = () => {
  // Generate an array of cards with random data
  const cardsData = Array.from({ length: 14 }, (_, index) => ({
    title: `Card ${index + 1}`,
    price: generateRandomPrice(),
    omnibus: ![2, 10, 9, 8, 7].includes(index),
  }));

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {cardsData.map((card, index) => (
          <>
            {(index === 2 || index === 9) && <CardPromo />}
            <Card key={index} {...card} />
          </>
        ))}
      </div>
    </div>
  );
};

export default App;
