import Fruit from "./Fruit";

const Fruits = () => {
  // const fruits = ["Apple", "Mango", "Banana", "Orange"];

  const fruits = [
    { name: "Apple", price: 100, emoji: "🍎" },
    { name: "Mango", price: 40, emoji: "🥭" },
    { name: "Banana", price: 67, emoji: "🍌" },
    { name: "Grapes", price: 80, emoji: "🍇" },
    { name: "pineapple", price: 96, emoji: "🍍" },
  ];
  return (
    <div>
      {fruits.map((fruit) => (
        <Fruit
          key={fruit.name}
          emoji={fruit.emoji}
          name={fruit.name}
          price={fruit.price}
        />
      ))}
    </div>
  );
};

export default Fruits;
