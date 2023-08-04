const [firstCity, secondCity] = [
  "tokyo",
  "delhi",
  "london"
];
console.log(firstCity);
console.log(secondCity);

function ExampleDestructing({Library}) {   //destructring 
  return (
    <div className="App">
      <h1>Hello from {Library}</h1>
    </div>
  );
}

export default ExampleDestructing;
