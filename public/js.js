jQuery(document).ready(function($) {

  $("#submit").on("click", function(event) {
    event.preventDefault();

    var city = $('#city').val().trim()
    var state = $('#state').val().trim()

    var tempAmount, rainAmount, humidityAmount, icon, iconText;

    $.ajax({
      url: "/api/" + state + "/" + city,
      dataType : "json",
      success : function(parsed_json) {
        console.log('x');
        Promise.all([

          console.log(parsed_json),
            
          tempAmount = parseInt(parsed_json.current_observation.feelslike_f),
            
          rainAmount = parseInt(parsed_json.current_observation.precip_today_in),

          humidityAm = parseInt(parsed_json.current_observation.relative_humidity),

          icon = parsed_json.current_observation.icon_url,

          iconText = parsed_json.current_observation.weather

        ]).then(function() {
          temperature(tempAmount, icon, iconText);
          // rain(rainAmount);
          // humidity(humidityAm);
        });
      }
    });
  });
});

function temperature(tempAmount, icon, iconText) {
  if(tempAmount) {
      $("#tempDisplay1").html("<img src='" + icon + "'/>");
      $("#tempDisplay2").html("<h3>" + iconText + "</h3>");
      $("#tempDisplay3").html("<p class='text-center'><h2><strong>" + tempAmount + "F </strong></h2></p>");
  };
};
// function rain(rainAmount) {
//   if(rainAmount <= .5) {
//       $("#rainDisplay").html("<img src='images/no-rain.jpg' style='width:150px; height:165px'/><p class='text-center'><strong> No rain! </strong></p>");
//   } else if (rainAmount > .5) {
//       $("#rainDisplay").html("<img src='images/umbrella.jpg' style='width:150px; height:165px'/> <p class='text-center'><strong> It's raining...</strong></p>");
//   }
// };

// function humidity(humidityAm) {
//   if(humidityAm >= 50) {
//     $("#humidityDisplay").html("<img src='images/humid.jpg' style='width:150px; height:165px'/>");
//   } else if (humidityAm < 50) {
//     $("#humidityDisplay").html(" ")
//   }