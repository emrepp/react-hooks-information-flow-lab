import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  function handleCategoryChange(event) {
    onCategoryChange(event.target.value)
  }
  
  
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    const [selectedCategory, onCategoryChange] = useState("All");
 
  }
const[items, setItems] = useState(itemData);
  const[isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={"App" + (isDarkMode ? "dark": "light")} >
     <Header
     isDarkmode={isDarkMode}
     onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={itemData}
       />
    </div>
  );
  }

export default App;
