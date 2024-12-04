import React from "react";
import Codeboard from "../../components/codeboard";

const TestPage: React.FC = () => {
  const codeBlock = `
const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
  return (
    <div>
        <h2> {item.name} </h2>
        <p> Price: {item.price} </p>
        <p> Quantity: {item.quantity} </p>
    </div>
  );
}
`;

  return (
    <div className="">
      <span>TEST</span>
      <Codeboard code={codeBlock} />
    </div>
  );
};

export default TestPage;
