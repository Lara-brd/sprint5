


///////////////////////////////////////
//WEATHER
//////////////////////////////////////


//https://www.youtube.com/watch?v=xJ5cux3b2gQ&ab_channel=Programarfaci
//https://openweathermap.org/

// getWeatherData("Barcelona");
const city:string = "Barcelona";
const est:string = "ES";
const apiKey:string ='70ed776d5646ef417e4d3b6e9c41555a';
const weather = document.getElementById('weather') as HTMLDivElement;


const getWeatherData = (city:string, est:string) => {
  const apiKey:string = "70ed776d5646ef417e4d3b6e9c41555a";
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${city},${est}&appid=${apiKey}&units=metric`;
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    weather.innerHTML=
    `
      ${city}</br>
      Temp: ${data.main.temp}</br>
      ${data.weather[0].main}</br>
      Humidity: ${data.main.humidity}
    `
  })
  .catch(error => console.error(error))
  
}

getWeatherData(city, est);







///////////////////////////////////////
//JOKE
//////////////////////////////////////


const jokeDiv = document.getElementById('joke') as HTMLDivElement;
const jokeButton = document.getElementById('get_joke') as HTMLButtonElement;
const btnScore = document.getElementById('btnScore') as HTMLButtonElement;

//definiendo array con datos para crear objeto (turple)
let arrayDatos : [string, string, number] = ["", "", 0];
let reportAcudits: JokeInfo [] = [];
let counter:number = 0;
let countScore:number = 0;
let countAltern:number =0;






//////////////////////////////////////////////////
//Escuchando boton Get Another Joke y fethc API


jokeButton.addEventListener('click', () => {
  counter =0;
  countScore =0;
  countAltern ++;

  //mostrando chiste en pantalla y recogiendolo en array
  const jokeScreen = (joke:string) => {
    jokeDiv.innerHTML = joke;
    arrayDatos [0] = joke;
    counter ++;
  }

  //function responsable de recoger info de la api
  const generateJoke  = async  () => {
    const response = await fetch('https://icanhazdadjoke.com', {
      headers:{
        Accept: "application/json",
      }
    
    });


    //convirtiendo respuesta a json
    const jokeJson = await response.json()
    console.log(jokeJson.joke)

    //mostrando chiste x pantalla
    jokeScreen(jokeJson.joke)

  }
  
  
  const getCNjoke = ()=> {
    
    const urlCN:string = "http://api.icndb.com/jokes/random";
    fetch(urlCN)
    .then(response => (response.json()))
    .then(data => {
      console.log(data.value.joke)
      jokeScreen(data.value.joke)
    })

    
  }

 //hacer un if y si es para se escribe uno y impar otro
  
  console.log(countAltern);
  if(countAltern %2 == 0){
    console.log('es par')
    generateJoke();
  }else {
    console.log('es impar')
    getCNjoke()
  }


  
  //fecha y hora
  const date = new Date();
  const dateString:string = date.toISOString();

  arrayDatos [1] = dateString;
  arrayDatos [2] = counter;

});






/////////////////////////////////////////////////////
//Escuchando boton score

let scoreUser: number = 0;

btnScore.addEventListener('click', (e)=>{
  const one = document.getElementById('score1') as HTMLButtonElement;
  const two = document.getElementById('score2') as HTMLButtonElement;
  const three = document.getElementById('score3') as HTMLButtonElement;
  countScore ++;

  if(counter ==1){

    if(countScore ==1){

      if(e.target === one){
        scoreUser = 1;
        addObject (scoreUser);
      }else if(e.target === two){
        scoreUser = 2;
        addObject (scoreUser);
      }else if(e.target === three){
        scoreUser = 3;
        addObject (scoreUser);
      }else {
        console.log('selecciona una puntuacion');
        countScore =0;
      }
    }
  }

  //funcion para introducir info, crear objeto y añadirlo al array reportAcudits:

  function addObject (scoreUser:number):void{
    let jokeInfo:JokeInfo = new JokeInfo (arrayDatos[1], scoreUser, arrayDatos[1]);
    reportAcudits.push(jokeInfo);
    console.log(reportAcudits);


  }

  //reseteando puntuacion
  scoreUser =0;

});






///////////////////////////////////////////////
//class jokeInfo

class JokeInfo {
  joke = "";
  score = 0;
  date = "";

  constructor (joke:string, score:number, date:string){
    this.joke = joke;
    this.score = score;
    this.date = date;
  }
}



