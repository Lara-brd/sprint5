
const jokeDiv = document.getElementById('joke') as HTMLDivElement;
const jokeButton = document.getElementById('get_joke') as HTMLButtonElement;








//////////////////////////////////////////////////
//Escuchando boton Get Another Joke y fethc API

jokeButton.addEventListener('click', () => {

  //function responsable de recoger info de la api
  const generateJoke  = async  () => {
    const response = await fetch('https://icanhazdadjoke.com', {
      headers:{
        Accept: "application/json",
      }
    });


    //convirtiendo respuesta a json
    const jokeJson = await response.json()

    //mostrando chiste x pantalla
    console.log(jokeJson.joke)
    jokeDiv.innerHTML = jokeJson.joke;
  }

  generateJoke();

});


