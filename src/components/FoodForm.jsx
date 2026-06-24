import { useState } from "react";

const FoodForm = ({ onAddFood }) => {
  const [name, setName] = useState(``);
  const [calories, setCalories] = useState(``);
  const [proteins, setProteins] = useState(``);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      id: Date.now(),
      name,
      calories: parseInt(calories),
      proteins: parseInt(proteins),
    };

    onAddFood(newFood);

    setName(``);
    setCalories(``);
    setProteins(``);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "20px",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", width: "600px" }}
        />
        <input
          type="number"
          placeholder="Calories..."
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          style={{ padding: "8px", width: "600px" }}
        />
        <input
          type="number"
          placeholder="Proteins..."
          value={proteins}
          onChange={(e) => setProteins(e.target.value)}
          style={{ padding: "8px", width: "600px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "600px",
          }}
        >
          Add Food
        </button>
      </form>
    </div>
  );
};

export default FoodForm;
