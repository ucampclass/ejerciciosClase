fetch('https://jsonplaceholder.typicode.com/todos')
  .then((panCrudo) => panCrudo.json())
  .then((panOk) => console.log(panOk));
