(function(){
  console.log("map");

   
 var app = {
    init: function() {
      this.url = "https://raw.githubusercontent.com/Carole1975/PWA-OT/master/public/data/galerie.json";
      this.getGalerie(app.url);
    },

    getGalerie: function(url) {
          //   $.ajax({
          //       url: url,
          //       success: this.initmap,
          //       error: function(err) {
          //           if (err) {
          //               console.log(err);
          //           };
          //       }
          //   });
          // },

          fetch('../data/galerie.json')
            // .then((data) => {
            //   this.initmap(data);
            // })
            .then(  
              function(response) {  
                if (response.status !== 200) {  
                  console.log('Looks like there was a problem. Status Code: ' +  
                    response.status);  
                  return;  
                }

            // Examine the text in the response  
            response.json().then(function(data) {  
              var map = new L.Map('cdf_map', { fullscreenControl: true });
              var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
              var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Imagery © CloudMade';

              var osm = new L.TileLayer(osmUrl, { minZoom: 10, maxZoom: 19, attribution: osmAttrib });

              map.setView(new L.LatLng(43.2167, 0.8833), (43.0833, 0.5833), 15);
              map.addLayer(osm);
              map.scrollWheelZoom.disable();

              $('#MyLocation').on('click', function(){
                map.locate({setView: true, maxZoom: 15});
              });

              map.on('locationfound', onLocationFound);
              function onLocationFound(e) {
                console.log(e);

                L.marker(e.latlng).addTo(map);
              }

               //circuit hôtels
              for (i = 0; i < data.hotels.length; i++) {
                 //marqueurs
                 var latHotel = data.hotels[i].geoloc.lat;
                 var longHotel = data.hotels[i].geoloc.lng;

                 //popups
                 var titreHotel = data.hotels[i].titre;
                 var texteHotel = data.hotels[i].texte;
                 var contentPopupHotel = '';
                 contentPopupHotel += "<h3>" + titreHotel + "</h3>" + "<br><div class='carousel'>";
                 for (j = 0; j < data.hotels[i].images.length; j++) {
                  var imgHotel = data.hotels[i].images[j].url;
                  contentPopupHotel += '<a href="' + imgHotel + '" data-lightbox="' + imgHotel+ '"><img class="imgPopup" src="' + imgHotel + '" alt="' + titreHotel + '" data-image="' + imgHotel + '"></a>';
                }
                contentPopupHotel += "</div><p>" + texteHotel + "</p>";

                L.marker([latHotel,longHotel], {icon: L.AwesomeMarkers.icon({icon: 'bed', markerColor: 'purple', prefix: 'fa', iconColor: 'black'}) })
                .bindPopup(contentPopupHotel)
                .addTo(map);
               };

               for (i = 0; i < data.hotes.length; i++) {
                 //marqueurs
                 var latHote = data.hotes[i].geoloc.lat;
                 var longHote = data.hotes[i].geoloc.lng;

                 //popups
                 var titreHote = data.hotes[i].titre;
                 var texteHote = data.hotes[i].texte;
                 var contentPopupHote = '';
                 contentPopupHote += "<h3>" + titreHote + "</h3>" + "<br><div class='carousel'>";
                 for (j = 0; j < data.hotes[i].images.length; j++) {
                  var imgHote = data.hotes[i].images[j].url;
                  contentPopupHote += '<a href="' + imgHote + '" data-lightbox="' + imgHote+ '"><img class="imgPopup" src="' + imgHote + '" alt="' + titreHote + '" data-image="' + imgHote + '"></a>';
                }
                contentPopupHote += "</div><p>" + texteHote + "</p>";

                L.marker([latHote, longHote], {icon: L.AwesomeMarkers.icon({icon: 'bed', markerColor: 'orange', prefix: 'fa', iconColor: 'black'}) })
                .bindPopup(contentPopupHote)
                .addTo(map);
              };


              for (i = 0; i < data.gites.length; i++) {
                 //marqueurs
                 var latGite = data.gites[i].geoloc.lat;
                 var longGite = data.gites[i].geoloc.lng;

                 //popups
                 var titreGite = data.gites[i].titre;
                 var texteGite = data.gites[i].texte;
                 var contentPopupGite = '';
                 contentPopupGite += "<h3>" + titreGite + "</h3>" + "<br><div class='carousel'>";
                 for (j = 0; j < data.gites[i].images.length; j++) {
                  var imgGite = data.gites[i].images[j].url;
                  contentPopupGite += '<a href="' + imgGite + '" data-lightbox="' + imgGite+ '"><img class="imgPopup" src="' + imgGite + '" alt="' + titreGite + '" data-image="' + imgGite + '"></a>';
                }
                contentPopupGite += "</div><p>" + texteGite + "</p>";

                L.marker([latGite, longGite], {icon: L.AwesomeMarkers.icon({icon: 'home', markerColor: 'darkred', prefix: 'fa', iconColor: 'black'}) })
                .bindPopup(contentPopupGite)
                .addTo(map);
              };

              for (i = 0; i < data.campingcars.length; i++) {
                 //marqueurs
                 var latCampingcar = data.campingcars[i].geoloc.lat;
                 var longCampingcar = data.campingcars[i].geoloc.lng;

                 //popups
                 var titreCampingcar = data.campingcars[i].titre;
                 var texteCampingcar = data.campingcars[i].texte;
                 var contentPopupCampingcar = '';
                 contentPopupCampingcar += "<h3>" + titreCampingcar + "</h3>" + "<br><div class='carousel'>";
                 for (j = 0; j < data.campingcars[i].images.length; j++) {
                  var imgCampingcar = data.campingcars[i].images[j].url;
                  contentPopupCampingcar += '<a href="' + imgCampingcar + '" data-lightbox="' + imgCampingcar+ '"><img class="imgPopup" src="' + imgCampingcar + '" alt="' + titreCampingcar + '" data-image="' + imgCampingcar + '"></a>';
                }
                contentPopupCampingcar += "</div><p>" + texteCampingcar + "</p>";

                L.marker([latCampingcar, longCampingcar], {icon: L.AwesomeMarkers.icon({icon: 'truck', markerColor: 'green', prefix: 'fa', iconColor: 'black'}) })
                .bindPopup(contentPopupCampingcar)
                .addTo(map);
              };

              for (i = 0; i < data.reshabjeunes.length; i++) {
                 //marqueurs
                 var latReshabjeune = data.reshabjeunes[i].geoloc.lat;
                 var longReshabjeune = data.reshabjeunes[i].geoloc.lng;

                 //popups
                 var titreReshabjeune = data.reshabjeunes[i].titre;
                 var texteReshabjeune = data.reshabjeunes[i].texte;
                 var contentPopupReshabjeune = '';
                 contentPopupReshabjeune += "<h3>" + titreReshabjeune + "</h3>" + "<br><div class='carousel'>";
                 for (j = 0; j < data.reshabjeunes[i].images.length; j++) {
                  var imgReshabjeune = data.reshabjeunes[i].images[j].url;
                  contentPopupReshabjeune += '<a href="' + imgReshabjeune + '" data-lightbox="' + imgReshabjeune+ '"><img class="imgPopup" src="' + imgReshabjeune + '" alt="' + titreReshabjeune + '" data-image="' + imgReshabjeune + '"></a>';
                }
                contentPopupReshabjeune += "</div><p>" + texteReshabjeune + "</p>";

                L.marker([latReshabjeune, longReshabjeune], {icon: L.AwesomeMarkers.icon({icon: 'child', markerColor: 'darkpurple', prefix: 'fa', iconColor: 'black'}) })
                .bindPopup(contentPopupReshabjeune)
                .addTo(map);
              };

              for (i = 0; i < data.restaurants.length; i++) {
                 //marqueurs
                 var latRestaurant = data.restaurants[i].geoloc.lat;
                 var longRestaurant = data.restaurants[i].geoloc.lng;

                 //popups
                 var titreRestaurant = data.restaurants[i].titre;
                 var texteRestaurant = data.restaurants[i].texte;
                 var contentPopupRestaurant = '';
                 contentPopupRestaurant += "<h3>" + titreRestaurant + "</h3>" + "<br><div class='carousel'>";
                 for (j = 0; j < data.restaurants[i].images.length; j++) {
                  var imgRestaurant = data.restaurants[i].images[j].url;
                  contentPopupRestaurant += '<a href="' + imgRestaurant + '" data-lightbox="' + imgRestaurant+ '"><img class="imgPopup" src="' + imgRestaurant + '" alt="' + titreRestaurant + '" data-image="' + imgRestaurant + '"></a>';
                }
                contentPopupRestaurant += "</div><p>" + texteRestaurant + "</p>";

                L.marker([latRestaurant, longRestaurant], {icon: L.AwesomeMarkers.icon({icon: 'cutlery', markerColor: 'cadetblue', prefix: 'fa', iconColor: 'black'}) })
                .bindPopup(contentPopupRestaurant)
                .addTo(map);
              };
                

                map.on('fullscreenchange', function() {
                  if (map.isFullscreen()) {
                    bouton.remove();
                    return;
                  } else {
                    map.remove();
                    app.init();
                  }
                });
              });  
}  
)  
.catch(function(err) {  
  console.log('Fetch Error :-S', err);  
});

},



    };



   


    app.init();
  })();

            
                
