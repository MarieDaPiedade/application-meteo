let ville = 'Paris';
recevoirTemperature(ville);

let changer = document.querySelector('#changer');
changer.addEventListener('click', () => {
  ville = prompt('Quelle ville souhaitez-vous voir ?');
  recevoirTemperature(ville);
});



function recevoirTemperature(ville) {
  
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=898ab05258ca0de44b53c69a94e917be&units=metric';  
  
  
  let requete = new XMLHttpRequest();
  requete.open('GET', url);
  requete.responseType = 'json';
  requete.send();
  requete.onload = function() {
    if(requete.readyState === XMLHttpRequest.DONE) {
      if(requete.status === 200) {
        let reponse = requete.response;
        let temperature = reponse.main.temp;
        document.querySelector('#temperature_label').textContent = temperature;
        let ville = reponse.name;
        document.querySelector('#ville').textContent = ville;
      }
      else {
        alert('Un problème est survenu, merci de revenir plus tard.');
      }
    } 
  }
}