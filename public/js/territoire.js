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

              map.setView(new L.LatLng(43.2167, 0.8833),(43.0833, 0.5833), 15);
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

                //circuit patrimoine
              for (i = 0; i < data.patrimoine.length; i++) {
                 //marqueurs
                 var latPatrimoine = data.patrimoine[i].geoloc.lat;
                 var longPatrimoine = data.patrimoine[i].geoloc.lng;

                 //popups
                 var titrePatrimoine = data.patrimoine[i].titre;
                 var textePatrimoine = data.patrimoine[i].texte;
                 var contentPopupPatrimoine = '';
                 contentPopupPatrimoine += "<h3>" + titrePatrimoine + "</h3>" + "<br><div class='carousel'>";
                 for (j = 0; j < data.patrimoine[i].images.length; j++) {
                  var imgPatrimoine = data.patrimoine[i].images[j].url;
                  contentPopupPatrimoine += '<a href="' + imgPatrimoine + '" data-lightbox="' + imgPatrimoine+ '"><img class="imgPopup" src="' + imgPatrimoine + '" alt="' + titrePatrimoine + '" data-image="' + imgPatrimoine + '"></a>';
                }
                contentPopupPatrimoine += "</div><p>" + textePatrimoine + "</p>";

                L.marker([latPatrimoine,longPatrimoine], {icon: L.AwesomeMarkers.icon({icon: 'camera', markerColor: 'red', prefix: 'fa', iconColor: 'black'}) })
                .bindPopup(contentPopupPatrimoine)
                .addTo(map);
               };

               for (i = 0; i < data.lacs.length; i++) {
                 //marqueurs
                 var latLac = data.lacs[i].geoloc.lat;
                 var longLac = data.lacs[i].geoloc.lng;

                 //popups
                 var titreLac = data.lacs[i].titre;
                 var texteLac = data.lacs[i].texte;
                 var contentPopupLac = '';
                 contentPopupLac += "<h3>" + titreLac + "</h3>" + "<br><div class='carousel'>";
                 for (j = 0; j < data.lacs[i].images.length; j++) {
                  var imgLac = data.lacs[i].images[j].url;
                  contentPopupLac += '<a href="' + imgLac + '" data-lightbox="' + imgLac+ '"><img class="imgPopup" src="' + imgLac + '" alt="' + titreLac + '" data-image="' + imgLac + '"></a>';
                }
                contentPopupLac += "</div><p>" + texteLac + "</p>";

                L.marker([latLac, longLac], {icon: L.AwesomeMarkers.icon({icon: 'tint', markerColor: 'cadetblue', prefix: 'fa', iconColor: 'black'}) })
                .bindPopup(contentPopupLac)
                .addTo(map);
              };


              for (i = 0; i < data.offices.length; i++) {
                 //marqueurs
                 var latOffice = data.offices[i].geoloc.lat;
                 var longOffice = data.offices[i].geoloc.lng;

                 //popups
                 var titreOffice = data.offices[i].titre;
                 var texteOffice = data.offices[i].texte;
                 var contentPopupOffice = '';
                 contentPopupOffice += "<h3>" + titreOffice + "</h3>" + "<br><div class='carousel'>";
                 for (j = 0; j < data.offices[i].images.length; j++) {
                  var imgOffice = data.offices[i].images[j].url;
                  contentPopupOffice += '<a href="' + imgOffice + '" data-lightbox="' + imgOffice+ '"><img class="imgPopup" src="' + imgOffice + '" alt="' + titreOffice + '" data-image="' + imgOffice + '"></a>';
                }
                contentPopupOffice += "</div><p>" + texteOffice + "</p>";

                L.marker([latOffice, longOffice], {icon: L.AwesomeMarkers.icon({icon: 'info', markerColor: 'purple', prefix: 'fa', iconColor: 'black'}) })
                .bindPopup(contentPopupOffice)
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





























            