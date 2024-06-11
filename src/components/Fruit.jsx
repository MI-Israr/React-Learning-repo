const Fruit = ({ name, price, emoji }) => {
  return (
    <div>
      {emoji} {name} {price}
    </div>
  );
};

export default Fruit;
