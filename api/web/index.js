const callApi = () => {
  fetch('http://localhost:8000/usuarios')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

callApi();
