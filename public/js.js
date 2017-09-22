$("#submit").on("click", function(event) {
  event.preventDefault();

  var city = $('#city').val().trim()
  var state = $('#state').val().trim()

  var tempAmount;
  var rainAmount;
  var humidityAmount;


  jQuery(document).ready(function($) {

    $.ajax({
        url : "http://api.wunderground.com/api/92f22e9a41ea4efb/geolookup/conditions/q/" + state + "/" + city + ".json",
        dataType : "jsonp",
        success : function(parsed_json) {
          console.log('x');
          Promise.all([

          console.log(parsed_json),
          
          tempAmount = parseInt(parsed_json.current_observation.feelslike_f),
          
          rainAmount = parseInt(parsed_json.current_observation.precip_1hr_in),

          humidityAm = parseInt(parsed_json.current_observation.relative_humidity),

          ]).then(function() {
              console.log(tempAmount, rainAmount, humidityAm);
              temperature(tempAmount);
              rain(rainAmount);
              humidity(humidityAm);
          });
        }
    });
  });
});

function temperature(tempAmount) {
  if(tempAmount >= 85) {
      $("#tempDisplay").append("<img src='images/hotweather.png' style='width:150px; height:165px'/>");
      $("#tempDisplay").append("<p class='text-center'><strong> It's hot! The temperature is: " + tempAmount + "</p>");

  } else if ( tempAmount < 85 && tempAmount >= 65 ) {
      $("#tempDisplay").html("<p class='text-center'> <strong> Warm! The temperature is: " + tempAmount + "</strong></p>");
      $("#tempDisplay").append("<img src='images/hotweather.png' alt='temp' style='width:100px; height:100px'/>");

  } else if ( tempAmount < 65 && tempAmount >= 55) {
      $("#tempDisplay").html("<p class='text-center'><strong> Getting chilly...The temperature is: " + tempAmount + "</strong></p>");
      $("#tempDisplay").append('<img src="images/coldWeather.jpg" alt="temp" style="width:100px; height:100px"/>');

  } else if ( tempAmount < 55 && tempAmount >= 32) {
      $("#tempDisplay").html("<p class='text-center'> <strong> Take a jacket. The temperature is: " + tempAmount + "</strong></p>");
      $("#tempDisplay").append('<img src="images/coldWeather.jpg" alt="temp" style="width:100px; height:100px"/>');

  } else if ( tempAmount < 32 ) {
      $("#tempDisplay").html("<p class='text-center'> <strong> It's freezing! The temperature is: " + tempAmount + "</strong></p>");
      $("#tempDisplay").append('<img src="images/coldWeather.jpg" alt="temp" style="width:100px; height:100px"/>');
  }
};

function rain(rainAmount) {
  if(rainAmount >= 0 && rainAmount < 1) {
      $("#rainDisplay").append("<img src='images/no-rain.jpg' style='width:150px; height:165px'/>");
      $("#rainDisplay").append("<p class='text-center'><strong> No rain! </strong></p>");
  } else if (rainAmount > 1) {
      $("#rainDisplay").append("<img src='images/umbrella.jpg' style='width:150px; height:165px'/>");
      $("#rainDisplay").append("<p class='text-center'><strong> It's raining...</strong></p>");
  }
};

function humidity(humidityAm) {
  if(humidityAm > 50) {
    $("#humidityDisplay").append("<img src='images/humid.jpg' style='width:150px; height:165px'/>");
  }
}
