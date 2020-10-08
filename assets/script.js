var city = " "
    var cities = ["Denver", "Seattle", "New York City", "Atlanta"];
        function renderButtons() {

            // Deleting the movies prior to adding new movies
            // (this is necessary otherwise we will have repeat buttons)
            $("#buttons-view").empty();

            // Looping through the array of cities
            for (var i = 0; i < cities.length; i++) {

            // Then dynamicaly generating buttons for each movie in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var a = $("<button>");
            var b = $("<br>");
            // Adding a class
            a.addClass("newCity");
            // Added a data-attribute
            a.attr("data-name", cities[i]);
            // Provided the initial button text
            a.text(cities[i]);
            // Added the button to the HTML
            $("#buttons-view").append(a).append(b);
            }
            }
            renderButtons();
        
            $("#find-city").on("click", function(event) {
                event.preventDefault();
                var city = $("#city-input").val();
                // Here we are building the URL we need to query the database
                var queryURL = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=6e32b6954fb476d7d55a99a8027944ab";

                
                $.ajax({
                url: queryURL,
                method: "GET"
                }).then(function(response) {
                console.log(response);

                console.log(response.list[0].main.temp);

                const today = new Date()
                var newToday = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
                var tomorrow = (today.getMonth()+1)+'-'+(today.getDate()+1)+'-'+today.getFullYear();
                var dayAfter = (today.getMonth()+1)+'-'+(today.getDate()+2)+'-'+today.getFullYear();
                var dayAfter2 = (today.getMonth()+1)+'-'+(today.getDate()+3)+'-'+today.getFullYear();
                var dayAfter3 = (today.getMonth()+1)+'-'+(today.getDate()+4)+'-'+today.getFullYear();
                var dayAfter4 = (today.getMonth()+1)+'-'+(today.getDate()+5)+'-'+today.getFullYear();
            

                ///Today's weather
                var cityDiv = $(".city").text(city)
                var date = $(".date").text(newToday)
                var windDiv = $(".wind").text("Wind Speed (MPH): " + response.list[0].wind.speed);
                var humDiv = $(".humidity").text("Humidity: " + response.list[0].main.humidity + "%");

                var kelvTemp = parseInt(response.list[0].main.temp);
                var farTemp = (kelvTemp - 273.15) * 1.80 + 32;
                var tempDiv = $(".temp").text("Temperature (°F): " + farTemp.toFixed(1));

                ///
                var date1 = $(".date1").text(tomorrow)
                var windDiv1 = $(".wind1").text("Wind (MPH): " + response.list[7].wind.speed);
                var humDiv1 = $(".humidity1").text("Humidity: " + response.list[7].main.humidity + "%");

                var kelvTemp1 = parseInt(response.list[7].main.temp);
                var farTemp1 = (kelvTemp1 - 273.15) * 1.80 + 32;
                var tempDiv1 = $(".temp1").text("Temp (°F): " + farTemp.toFixed(1));
                

                ///
                var date2 = $(".date2").text(dayAfter)
                var windDiv2 = $(".wind2").text("Wind (MPH): " + response.list[15].wind.speed);
                var humDiv2 = $(".humidity2").text("Humidity: " + response.list[15].main.humidity + "%");

                var kelvTemp2 = parseInt(response.list[15].main.temp);
                var farTemp2 = (kelvTemp1 - 273.15) * 1.80 + 32;
                var tempDiv2 = $(".temp2").text("Temp (°F): " + farTemp.toFixed(1));
                

                ///
                var date3 = $(".date3").text(dayAfter2)
                var windDiv3 = $(".wind3").text("Wind (MPH): " + response.list[23].wind.speed);
                var humDiv3 = $(".humidity3").text("Humidity: " + response.list[23].main.humidity + "%");

                var kelvTemp3 = parseInt(response.list[23].main.temp);
                var farTemp3 = (kelvTemp1 - 273.15) * 1.80 + 32;
                var tempDiv3 = $(".temp3").text("Temp (°F): " + farTemp.toFixed(1));

                ///
                var date4 = $(".date4").text(dayAfter3)
                var windDiv4 = $(".wind4").text("Wind (MPH): " + response.list[31].wind.speed);
                var humDiv4 = $(".humidity4").text("Humidity: " + response.list[31].main.humidity + "%");

                var kelvTemp4 = parseInt(response.list[31].main.temp);
                var farTemp4 = (kelvTemp1 - 273.15) * 1.80 + 32;
                var tempDiv4 = $(".temp4").text("Temp (°F): " + farTemp.toFixed(1));

                ///response.list[39].dt_txt old temp
                var date5 = $(".date5").text(dayAfter4)
                var windDiv5 = $(".wind5").text("Wind (MPH): " + response.list[39].wind.speed);
                var humDiv5 = $(".humidity5").text("Humidity: " + response.list[39].main.humidity + "%");

                var kelvTemp5 = parseInt(response.list[39].main.temp);
                var farTemp5 = (kelvTemp1 - 273.15) * 1.80 + 32;
                var tempDiv5 = $(".temp5").text("Temp (°F): " + farTemp.toFixed(1));


                
                });
                
            });
            
        
        

        $("#find-city").on("click", function(event) {
            event.preventDefault();

            // This line grabs the input from the textbox
            var newCity = $("#city-input").val().trim();

            // The movie from the textbox is then added to our array
            cities.push(newCity);

            // Calling renderButtons which handles the processing of our movie array
            renderButtons();
            $(document).on("click", ".newCity");
      });

      function getCityData(){ ////grabs and displays data when you click one of the city buttons under the search bar
        console.log($(this).text());
        var cityTitle = $(this).text().replace(/ /g, "+");
        var cityTitle2 = $(this).text(); //variable so the +'s don't show up when city nae is diplayed
        console.log(cityTitle);
        var queryURL = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=" + cityTitle + "&appid=6e32b6954fb476d7d55a99a8027944ab";

        $.ajax({
                url: queryURL,
                method: "GET"
                }).then(function(response) {
                console.log(response);

                console.log(response.list[0].main.temp);

                const today = new Date()
                var newToday = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
                var tomorrow = (today.getMonth()+1)+'-'+(today.getDate()+1)+'-'+today.getFullYear();
                var dayAfter = (today.getMonth()+1)+'-'+(today.getDate()+2)+'-'+today.getFullYear();
                var dayAfter2 = (today.getMonth()+1)+'-'+(today.getDate()+3)+'-'+today.getFullYear();
                var dayAfter3 = (today.getMonth()+1)+'-'+(today.getDate()+4)+'-'+today.getFullYear();
                var dayAfter4 = (today.getMonth()+1)+'-'+(today.getDate()+5)+'-'+today.getFullYear();
            

                ///Today's weather
                var cityDiv = $(".city").text(cityTitle2)
                var date = $(".date").text(newToday)
                var windDiv = $(".wind").text("Wind Speed (MPH): " + response.list[0].wind.speed);
                var humDiv = $(".humidity").text("Humidity: " + response.list[0].main.humidity + "%");

                var kelvTemp = parseInt(response.list[0].main.temp);
                var farTemp = (kelvTemp - 273.15) * 1.80 + 32;
                var tempDiv = $(".temp").text("Temperature (°F): " + farTemp.toFixed(1));

                ///
                var date1 = $(".date1").text(tomorrow)
                var windDiv1 = $(".wind1").text("Wind (MPH): " + response.list[7].wind.speed);
                var humDiv1 = $(".humidity1").text("Humidity: " + response.list[7].main.humidity + "%");

                var kelvTemp1 = parseInt(response.list[7].main.temp);
                var farTemp1 = (kelvTemp1 - 273.15) * 1.80 + 32;
                var tempDiv1 = $(".temp1").text("Temp (°F): " + farTemp.toFixed(1));
                

                ///
                var date2 = $(".date2").text(dayAfter)
                var windDiv2 = $(".wind2").text("Wind (MPH): " + response.list[15].wind.speed);
                var humDiv2 = $(".humidity2").text("Humidity: " + response.list[15].main.humidity + "%");

                var kelvTemp2 = parseInt(response.list[15].main.temp);
                var farTemp2 = (kelvTemp1 - 273.15) * 1.80 + 32;
                var tempDiv2 = $(".temp2").text("Temp (°F): " + farTemp.toFixed(1));
                

                ///
                var date3 = $(".date3").text(dayAfter2)
                var windDiv3 = $(".wind3").text("Wind (MPH): " + response.list[23].wind.speed);
                var humDiv3 = $(".humidity3").text("Humidity: " + response.list[23].main.humidity + "%");

                var kelvTemp3 = parseInt(response.list[23].main.temp);
                var farTemp3 = (kelvTemp1 - 273.15) * 1.80 + 32;
                var tempDiv3 = $(".temp3").text("Temp (°F): " + farTemp.toFixed(1));

                ///
                var date4 = $(".date4").text(dayAfter3)
                var windDiv4 = $(".wind4").text("Wind (MPH): " + response.list[31].wind.speed);
                var humDiv4 = $(".humidity4").text("Humidity: " + response.list[31].main.humidity + "%");

                var kelvTemp4 = parseInt(response.list[31].main.temp);
                var farTemp4 = (kelvTemp1 - 273.15) * 1.80 + 32;
                var tempDiv4 = $(".temp4").text("Temp (°F): " + farTemp.toFixed(1));

                ///response.list[39].dt_txt old temp
                var date5 = $(".date5").text(dayAfter4)
                var windDiv5 = $(".wind5").text("Wind (MPH): " + response.list[39].wind.speed);
                var humDiv5 = $(".humidity5").text("Humidity: " + response.list[39].main.humidity + "%");

                var kelvTemp5 = parseInt(response.list[39].main.temp);
                var farTemp5 = (kelvTemp1 - 273.15) * 1.80 + 32;
                var tempDiv5 = $(".temp5").text("Temp (°F): " + farTemp.toFixed(1));


                
                });
      }
      $(document).on("click", ".newCity", getCityData);
