$(document).ready(function($) {
//me pregunta geolocalizacion
function geolocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(functionSucess,functionError );
	}
}
window.addEventListener("load", geolocation); 

var latitudde, longitudde;
var functionSucess = function(posicion){
	latitudde = posicion.coords.latitude;
	longitudde = posicion.coords.longitude;
	console.log(latitudde);
	console.log(longitudde);
	
}
var functionError = function(error){
	alert("ubicación no encontrada");
}

// imprimir datos del clima actual (currently).
function clima(latitud,longitud){
	console.log(latitud); //pruebas
	$.ajax({
		url: 'https://api.darksky.net/forecast/07f785110c17c97c87fe46f787f5b090/37.8267,-122.4233'+latitud+','+longitud+'?language=es?&units=auto',
		type: 'GET',
		datatype: 'JSON',
	})

	.done(function(respuesta){
					console.log("successe");
					console.log(respuesta);
					mostrarClima(respuesta);
				})
				.fail(function(){
					console.log("error");
				})
			function mostrarClima(data){
					console.log(data);
				$.each(data.currently,function(i,item){
					
				});
			}





});
/*acceder api de flicker 
var jsonFlicker= "https://api.flickr.com/services/rest/?method=flickr.photos.geo.photosForLocation&api_key=b352bdbfb32a1ecdb35af15c9ea0c73e&lat=&lon=&accuracy=&extras=&per_page=&page=&format=json&nojsoncallback=1&api_sig=39ef3e4e78b8690b8d9e39333b2082dc";
getJASON.("")

getJson(jsonFlicker,function(data){
	console.log(data);
$.each(data.)







});*/