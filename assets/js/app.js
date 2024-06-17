
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

//aqui quiere llamar a las clases name, blog y location usando QuerySelector, sin
//embargo había unos errores: "name" en lugar de ".name", "blog" estaba como "#blog", y en el HTML no hay una
//clase que indique "location"
const $n = document.querySelector(".name");
const $b = document.querySelector(".blog");
const $l = document.querySelector(".location");

//aqui marcaba error en el 'await' porque se tenia que especificar que la función es async
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);

  //agregué la variable data porque no estaba especificada, extrayendo los datos de responde usando json()
  const data = await response.json();

  console.log(data);
  //aqui marcaba error porque en lugar de backticks ` había comillas sencillas
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //aqui marcaba error en la consola pues n no esta definida, se agregó el elemento faltante $
  //posteriormente se agregó la sintaxis correcta para quemostrara el mensaje
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);