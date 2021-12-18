const buscar = () => {
  const dato = document.querySelector('#nombre');
  if (dato.value !== '') {
    obtenerValorDelApi(dato.value);
  }
};

function obtenerValorDelApi(nombre) {
  const url = 'https://api.openweathermap.org/';
  const token = '4e18d9661ead3fdea5cf7d80f06d6fe6';
  const endPoint = `data/2.5/weather?q=${nombre}&appid=${token}&units=metric`;
  fetch(`${url}${endPoint}`)
    .then((respuesta) => respuesta.json())
    .then((resultado) => {
      mostrarResultadoEnPantall(resultado);
    })
    .catch((error) => {
      console.log('Hubo un error');
      console.log(error);
    });
}

function mostrarResultadoEnPantall(objeto) {
  const h1 = document.querySelector('h1');
  h1.innerHTML = `La temperatura actual es: ${objeto.main.temp}`;
}
