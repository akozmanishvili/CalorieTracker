const FoodList = ({ foods }) => {
  return (
    <div>
      {foods.map((food) => {
        return (
          <div>
            {" "}
            <h3>Log</h3>
          </div>
        );
      })}
    </div>
  );
};

export default FoodList;
