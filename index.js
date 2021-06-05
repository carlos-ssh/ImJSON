const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
const request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
	const superHeroes = request.response;
  	populateHeader(superHeroes);
  	showHeroes(superHeroes);
}





