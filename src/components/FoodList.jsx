const FoodList = ({ foods }) => {
  return (
    <div>
      <h3>Log</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {foods.map((food) => {
          return (
            <li
              key={food.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid #ddd",
                color: "white",
              }}
            >
              <h4>{food.name}</h4>
              <h4>
                {food.calories} kcal |{food.proteins}g protein
              </h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FoodList;
