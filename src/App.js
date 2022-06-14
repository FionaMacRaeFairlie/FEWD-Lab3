import React from "react";
import Search from "./components/Search"
import "bootstrap/dist/css/bootstrap.min.css";

const items = [
  {
    name: "carrot cake",
    description: "home made here",
    price: "2.50",
    category: "cake",
    available: "no",
  },
  {
    name: "sandwiches",
    description: "with a variety of fillings",
    price: "2.50",
    category: "snack",
    available: "no",
  },
  {
    name: "salad",
    description: "uses seasonal local produce",
    price: "3.50",
    category: "side",
    available: "yes",
  },
  {
    name: "hot chocolate",
    description: "with fully fat or skimmed milk",
    price: "2.00",
    category: "drinks",
    available: "yes",
  },
  {
    name: "chocolate cake",
    description: "with cream",
    price: "2.50",
    category: "cake",
    available: "yes",
  },
  {
    name: "soup",
    description: "ask for soups available today",
    price: "2.00",
    category: "snack",
    available: "yes",
  },
  {
    name: "pizza",
    description: "ham and pineapple or four cheese",
    price: "5.00",
    category: "main",
    available: "yes",
  },
  {
    name: "baked potato",
    description: "with cheese, coleslaw, beans or tuna",
    price: "4.50",
    category: "main",
    available: "yes",
  },
  {
    name: "apple pie",
    description: "with cream or custard",
    price: "3.50",
    category: "pudding",
    available: "yes",
  },
  {
    name: "cheesecake",
    description: "with cream",
    price: "3.00",
    category: "pudding",
    available: "yes",
  },
  {
    name: "fish and chips",
    description: "locally caught ",
    price: "6.50",
    category: "main",
    available: "yes",
  },
  {
    name: "lasagne",
    description: "with chips or garlic bread",
    price: "6.50",
    category: "main",
    available: "yes",
  },
  {
    name: "ice cream",
    description: "various flavours",
    price: "2.50",
    category: "pudding",
    available: "yes",
  },
  {
    name: "coffee",
    description: "freshly ground",
    price: "1.50",
    category: "drinks",
    available: "yes",
  },
  {
    name: "tea",
    description: "a range of varieties",
    price: "1",
    category: "drinks",
    available: "yes",
  },
  {
    name: "pasta",
    description: "with a tomato and garlic sauce",
    price: "5.50",
    category: "main",
  },
  {
    name: "chips",
    description: "with ketchup or mayonnaise",
    price: "3",
    category: "side",
    available: "yes",
  },
]

function App() {
  return (
    <div className="container">
      <Search details={items}/>
      </div>
  );
}
export default App;
