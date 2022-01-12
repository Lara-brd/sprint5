///////////////////////////////////////
//WEATHER
//////////////////////////////////////
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
//https://www.youtube.com/watch?v=xJ5cux3b2gQ&ab_channel=Programarfaci
//https://openweathermap.org
//https://www.blobmaker.app
// getWeatherData("Barcelona");
var city = "Barcelona";
var est = "ES";
var apiKey = '70ed776d5646ef417e4d3b6e9c41555a';
var weather = document.getElementById('weather');
var weatherIcon = document.getElementById('weather_icon');
var getWeatherData = function (city, est) {
    var apiKey = "70ed776d5646ef417e4d3b6e9c41555a";
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + est + "&appid=" + apiKey + "&units=metric";
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var icon = data.weather[0].main;
        var temp = Math.round(data.main.temp);
        var icClass = "";
        //console.log(weatherNow);
        console.log("icono: " + icon + "| temperature: " + temp);
        //recogiendo hora
        var d = new Date();
        switch (icon) {
            case "Clear":
                if ((d.getHours() >= 6) && (d.getHours() <= 21))
                    icClass = "fa-sun";
                else
                    icClass = 'fa-moon';
                break;
            case "Clouds":
                icClass = "fa-cloud";
                console.log('clouds');
                break;
            case "Snow":
                icClass = "fa-snowflake";
                break;
            case "Rain":
                icClass = "fa-umbrella";
                break;
            case "Thunderstorm":
                icClass = "fa-poo-storm";
                break;
            case "Drizzle":
                icClass = "fa-cloud-rain";
            case "Mist":
                icClass = "fa-smog";
                break;
            default:
                weatherIcon.innerHTML = icon;
        }
        var i = document.createElement('i');
        weatherIcon.appendChild(i);
        weatherIcon.classList.add('icon');
        i.classList.add('fas');
        i.classList.add(icClass);
        weather.innerHTML = temp + "\u00BA";
    })["catch"](function (error) { return console.error(error); });
};
getWeatherData(city, est);
///////////////////////////////////////
//JOKE
//////////////////////////////////////
var jokeDiv = document.getElementById('joke');
var jokeButton = document.getElementById('get_joke');
var btnScore = document.getElementById('btnScore');
//definiendo array con datos para crear objeto (turple)
var arrayDatos = ["", "", 0];
var reportAcudits = [];
var counter = 0;
var countScore = 0;
var countAltern = 0;
//////////////////////////////////////////////////
//Escuchando boton Get Another Joke y fethc API
jokeButton.addEventListener('click', function () {
    counter = 0;
    countScore = 0;
    countAltern++;
    //mostrando chiste en pantalla y recogiendolo en array
    var jokeScreen = function (joke) {
        jokeDiv.innerHTML = joke;
        arrayDatos[0] = joke;
        counter++;
    };
    //function responsable de recoger info de la api
    var generateJoke = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, jokeJson;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://icanhazdadjoke.com', {
                        headers: {
                            Accept: "application/json"
                        }
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jokeJson = _a.sent();
                    console.log(jokeJson.joke);
                    //mostrando chiste x pantalla
                    jokeScreen(jokeJson.joke);
                    return [2 /*return*/];
            }
        });
    }); };
    var getCNjoke = function () {
        var urlCN = "http://api.icndb.com/jokes/random";
        fetch(urlCN)
            .then(function (response) { return (response.json()); })
            .then(function (data) {
            console.log(data.value.joke);
            jokeScreen(data.value.joke);
        });
    };
    //hacer un if y si es para se escribe uno y impar otro
    console.log(countAltern);
    if (countAltern % 2 == 0) {
        console.log('es par');
        generateJoke();
    }
    else {
        console.log('es impar');
        getCNjoke();
    }
    //fecha y hora
    var date = new Date();
    var dateString = date.toISOString();
    arrayDatos[1] = dateString;
    arrayDatos[2] = counter;
    //cambiando background
    var bgImage = document.getElementById('main_wrapper');
    if (countAltern == 1) {
        bgImage.style.backgroundImage = "url('src/img/blob2.svg')";
    }
    else if (countAltern == 2) {
        bgImage.style.backgroundImage = "url('src/img/blob3.svg')";
    }
    else if (countAltern == 3) {
        bgImage.style.backgroundImage = "url('src/img/blob4.svg')";
    }
    else if (countAltern == 4) {
        bgImage.style.backgroundImage = "url('src/img/blob5.svg')";
    }
    else if (countAltern == 5) {
        bgImage.style.backgroundImage = "url('src/img/blob6.svg')";
    }
    else if (countAltern == 6) {
        bgImage.style.backgroundImage = "url('src/img/blob7.svg')";
        countAltern = 0;
    }
});
/////////////////////////////////////////////////////
//Escuchando boton score
var scoreUser = 0;
btnScore.addEventListener('click', function (e) {
    var one = document.getElementById('score1');
    var two = document.getElementById('score2');
    var three = document.getElementById('score3');
    countScore++;
    if (counter == 1) {
        if (countScore == 1) {
            if (e.target === one) {
                scoreUser = 1;
                addObject(scoreUser);
            }
            else if (e.target === two) {
                scoreUser = 2;
                addObject(scoreUser);
            }
            else if (e.target === three) {
                scoreUser = 3;
                addObject(scoreUser);
            }
            else {
                console.log('selecciona una puntuacion');
                countScore = 0;
            }
        }
    }
    //funcion para introducir info, crear objeto y añadirlo al array reportAcudits:
    function addObject(scoreUser) {
        var jokeInfo = new JokeInfo(arrayDatos[1], scoreUser, arrayDatos[1]);
        reportAcudits.push(jokeInfo);
        console.log(reportAcudits);
    }
    //reseteando puntuacion
    scoreUser = 0;
});
///////////////////////////////////////////////
//class jokeInfo
var JokeInfo = /** @class */ (function () {
    function JokeInfo(joke, score, date) {
        this.joke = "";
        this.score = 0;
        this.date = "";
        this.joke = joke;
        this.score = score;
        this.date = date;
    }
    return JokeInfo;
}());
