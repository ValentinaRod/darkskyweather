//url:https://api.darksky.net/forecast/07f785110c17c97c87fe46f787f5b090/37.8267,-122.4233
//key: 07f785110c17c97c87fe46f787f5b090/
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

var fareandcelcius = function(temperaturaActual){
				var calculo = (temperaturaActual - 32)*5/9;
				var celcius = calculo.toFixed(1) + '°';

					return celcius;
			}

$.ajax({
		url: 'https://api.darksky.net/forecast/07f785110c17c97c87fe46f787f5b090/37.8267,-122.4233',
		type: 'GET',
		dataType: 'jsonp',
	})
	.done(function(data) {
		console.log(data);

		var temperaturaActual = data.currently.apparentTemperature;
		var wind = data.currently.windSpeed;
		var humidity = data.currently.humidity;
		var uvIndex = data.currently.uvIndex;
		var pressure = data.currently.pressure;
		
		
		$('.temperatura').append(fareandcelcius(temperaturaActual));
		$('.win').append(wind +'m/s');
		$('.humi').append(humidity + '%');
		$('.uvInd').append(uvIndex);
		$('.press').append(pressure);
	
//dia de la semana index 2

	//minimos
		var min_lunes = data.daily.data[0].apparentTemperatureMin;
		var min_martes = data.daily.data[1].apparentTemperatureMin;
		var min_miercoles = data.daily.data[2].apparentTemperatureMin;
		var min_jueves = data.daily.data[3].apparentTemperatureMin;
		var min_viernes = data.daily.data[4].apparentTemperatureMin;
		var min_sabado = data.daily.data[5].apparentTemperatureMin;
		var min_domingo = data.daily.data[6].apparentTemperatureMin;
		//maximo:

		var max_lunes = data.daily.data[0].apparentTemperatureMax;
		var max_martes = data.daily.data[1].apparentTemperatureMax;
		var max_miercoles = data.daily.data[2].apparentTemperatureMax;
		var max_jueves = data.daily.data[3].apparentTemperatureMax;
		var max_viernes = data.daily.data[4].apparentTemperatureMax;                 
		var max_sabado = data.daily.data[5].apparentTemperatureMax;
		var max_domingo = data.daily.data[6].apparentTemperatureMax;

			$('.lunes').append('<h6>'+fareandcelcius(min_lunes) + " - " + fareandcelcius(max_lunes)+'</h6>');
			$('.martes').append('<h6>'+fareandcelcius(min_martes) + " - " + fareandcelcius(max_martes)+'</h6>');
			$('.miercoles').append('<h6>'+fareandcelcius(min_miercoles) + " - " + fareandcelcius(max_miercoles)+'</h6>');
			$('.jueves').append('<h6>'+fareandcelcius(min_jueves) + " - " + fareandcelcius(max_jueves)+'</h6>'); 
			$('.viernes').append('<h6>'+fareandcelcius(min_viernes) + " - " + fareandcelcius(max_viernes)+'</h6>');
			$('.sabado').append('<h6>'+fareandcelcius(min_sabado) + " - " + fareandcelcius(max_sabado)+'</h6>');
			$('.domingo').append('<h6>'+fareandcelcius(min_domingo) + " - " + fareandcelcius(max_domingo)+'</h6>');
	

		})
	.fail(function() {
		console.log("error");
	})
	
	
});

//api flicker 
/*Clave:
9e321d12911fff56780613ca0c434547

Secreto:
80a9e96ec793826b*/
/* no resulta





function FlickrPhoto(title, owner, flickrURL, imageURL) {
    this.title = title;
    this.owner = owner;
    this.flickrURL = flickrURL;
    this.imageURL = imageURL;
}

function FlickrService() {
    this.flickrApiKey = "9e321d12911fff56780613ca0c434547";
    this.flickrGetInfoURL = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=427afa96e180a145685af658a83f59bb&photo_id=&secret=&format=json&nojsoncallback=1&api_sig=7c6c0ee5d471114fedc66e7c2453fbed";

    this.getPhotoInfo = function(photoId, callback) {
        var ajaxOptions = {
            type: 'GET',
            url: this.flickrGetInfoURL,
            data: { api_key: this.flickrApiKey, photo_id: photoId },
            dataType: 'json',
            success: function (data) { 
                if (data.stat == "ok") {
                    var photo = data.photo;
                    var photoTitle = photo.title._content;
                    var photoOwner = photo.owner.realname;
                    var photoWebURL = photo.urls.url[0]._content;
                    var photoStaticURL = "https://farm" + photo.farm + ".staticflickr.com/" +  photo.server + "/" + photo.id + "_" + photo.secret + "_b.jpg";

                    var flickrPhoto = new FlickrPhoto(photoTitle, photoOwner, photoWebURL, photoStaticURL);
                    callback(flickrPhoto);

                   $('body').css('background-image', 'url(' + flickrPhoto+ ')');
                
                }
            }
        };

        $.ajax(ajaxOptions);
    }
}

*/
