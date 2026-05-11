import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, image, likes: 0 }),
    })
      .then((r) => r.json())
      .then((data) => {
        onAddToy(data);
        setName("");
        setImage("");
      });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input type="text" name="name" placeholder="Toy name..." value={name} onChange={(e) => setName(e.target.value)} className="input-text" />
        <br />
        <input type="text" name="image" placeholder="Image URL..." value={image} onChange={(e) => setImage(e.target.value)} className="input-text" />
        <br />
        <input type="submit" value="Create New Toy" className="submit" />
      </form>
    </div>
  );
}

export default ToyForm;
