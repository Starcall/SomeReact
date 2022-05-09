import React, { useState } from "react";
import ItemList from "./ItemList.js";
import AddItem from "./AddItem.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    const newObj = { id: items.length, name: name, desc: description };
    setItems([...items, newObj]);
    setName("");
    setDescription("");
  }

  function handleDeleteClick(event) {
    setItems(items.filter((item) => item.name !== event.target.id));
  }

  const emptyItemListFiller = (
    <div>
      <p className="ui-title">Добавьте первый товар</p>
    </div>
  );
  return (
    <>
      <AddItem name={name} description={description} handleFormSubmit={handleFormSubmit} setName={setName} setDescription={setDescription} />
      {items.length === 0 ? emptyItemListFiller : ""}
      <ItemList items={items} handleDeleteClick={handleDeleteClick} />
    </>
  );
}
