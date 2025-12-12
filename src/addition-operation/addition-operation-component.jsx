import React, { useState } from "react";

const AdditoinOperationComponent = () => {
  const [fruits, setFruits] = useState(["apple", "banana"]);

  const addFruits = () => {
    const updated = [  fruits, "mango", "grapes"];
    setFruits(updated);
    console.log("The fruits are:", updated);
  };

  return (
    <div>
      <button onClick={addFruits}>Add Fruits</button>
    </div>
  );
};

export default AdditoinOperationComponent;
