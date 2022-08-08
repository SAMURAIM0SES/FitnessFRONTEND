import React, { useEffect, useState } from "react";
import { createNewActivity } from "../api";

const AddNewActivity = () => {
  const token = localStorage.getItem("token");
  //name descriptionState
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleOnChange = (event) => {
    const changed = event.target.name;
    if (changed === "name") {
      setName(event.target.value);
    } else if (changed === "description") {
      setDescription(event.target.value);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await createNewActivity(name, description, token);
  }

  return (
    <>
      <h2>Create New Activity</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          id="Name"
          name="name"
          placeholder="Name..."
          onChange={handleOnChange}
        />
        <label>Description:</label>
        <input
          id="Description"
          name="description"
          placeholder="Description..."
          onChange={handleOnChange}
        />
        <button type="submit" className="btn">
          Add Activity
        </button>
      </form>
    </>
  );
};

export default AddNewActivity;
