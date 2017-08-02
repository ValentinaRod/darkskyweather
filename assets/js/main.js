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
.done(function(response) {
            console.log(response);
            		var temp= data.currently.temperature;		
					var wind= windSpeed
					var humi= data.currently.humidity;
					var uvIndex= data.currently.precipProbability;
					var pressure= data.currently.pressure;
         
            $('#mobile_weather1').append('<br>'+ temp +  '<br>'+ humi  + '<br>'+ uvIndex + '<br>' + pressure + '<br>'+'<a href=index2.html><button type="button" class="btn btn-default">Default</button></a>');
       
         
		response.daily.data.forEach(function(a){
			var max = a.apparentTemperatureMax;
			var min = a.apparentTemperatureMin;
			$("#mobile_weather2").append("<div class='row linea-dias'><div class='col-md-6 col-xs-6 text-left'><img src='dist/img/"+response.daily.icon+".png'><span>Dia</span></div><div class='col-md-6 col-xs-6 text-right'><p>"+max+"º"+" - "+min+"º"+"</p></div></div>");

		});
       //
        })
        .fail(function() {
            console.log('error')
        })
        .always(function() {
            console.log('complete')
        });
};
					
				



});
/*acceder api de flicker 
var jsonFlicker= "https://api.flickr.com/services/rest/?method=flickr.photos.geo.photosForLocation&api_key=b352bdbfb32a1ecdb35af15c9ea0c73e&lat=&lon=&accuracy=&extras=&per_page=&page=&format=json&nojsoncallback=1&api_sig=39ef3e4e78b8690b8d9e39333b2082dc";
getJASON.("")

getJson(jsonFlicker,function(data){
	console.log(data);
$.each(data.)







});*/