(function(){
  console.log("map");

    /*function currentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((function (position) {
        var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
        marker.bindPopup("Ma position :<br> Latitude : " + position.coords.latitude + ',<br>longitude' + position.coords.longitude).openPopup();
     }));
    }else {
      alert("La geolocalisation n'est pas supportée par ce navigateur.");
    }
  }

  $('#MyLocation').click(function(e) {
    currentLocation();
  });*/
  

  /*Exemple code Laurent géoloc
navigator.geolocation.watchPosition(
   ({ coords, timestamp }) =>
     callback({
       latitude: coords.latitude,
       longitude: coords.longitude,
       lastUpdate: timestamp,
       accuracy: Math.floor(coords.accuracy)
     }),
   err => {
     if (err.code !== 3) {
       alert('Unable to find position - ' + err.message);
     }
   },
   {
     enableHighAccuracy: true,
     timeout: 15000
   }
 );*/

  
  
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

              map.setView(new L.LatLng(43.1080, 0.7220), 15);
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

              //circuit ocre
              for (i = 0; i < data.ocre.length; i++) {
                 //marqueurs
                 var latOcre = data.ocre[i].geoloc.lat;
                 var longOcre = data.ocre[i].geoloc.lng;
                 L.marker([latOcre,longOcre], {icon: L.AwesomeMarkers.icon({text: i, markerColor: 'orange', prefix: 'fa', iconColor: 'black'}) }).addTo(map);
                 // var markersOcre = new Marker(data.ocre[i].marqueur, '#FF5200', "rgba(255, 82, 0, 0.5)", '#000');
                 // var latOcre = data.ocre[i].geoloc.lat;
                 // var longOcre = data.ocre[i].geoloc.lng;
                 // markersOcre = L.marker([latOcre, longOcre], {
                 //   icon: L.BeautifyIcon.icon({
                 //     iconSize: markersOcre.iconSize,
                 //     borderColor: markersOcre.borderColor,
                 //     backgroundColor: markersOcre.backgroundColor,
                 //     isAlphaNumericIcon: markersOcre.isAlphaNumericIcon,
                 //     text: markersOcre.text,
                 //     textColor: markersOcre.textColor,
                 //     innerIconStyle: markersOcre.innerIconStyle
                 //   })
                 // }).addTo(map);
                };

                for (i = 0; i < data.vert.length; i++) {
                 //marqueurs
                 var latVert = data.vert[i].geoloc.lat;
                 var longVert = data.vert[i].geoloc.lng;
                 L.marker([latVert, longVert], {icon: L.AwesomeMarkers.icon({text: i, markerColor: '#00AE68', prefix: 'fa', iconColor: 'black'}) }).addTo(map);
                };


                for (i = 0; i < data.annexes.length; i++) {
                 //marqueurs
                 var latAnnexe = data.annexes[i].geoloc.lat;
                 var longAnnexe = data.annexes[i].geoloc.lng;
                 L.marker([latAnnexe, longAnnexe], {icon: L.AwesomeMarkers.icon({text: i, markerColor: 'jaune', prefix: 'fa', iconColor: 'black'}) }).addTo(map);
                };

                for (i = 0; i < data.etoiles.length; i++) {
                 //marqueurs
                 var latEtoile = data.etoiles[i].geoloc.lat;
                 var longEtoile = data.etoiles[i].geoloc.lng;
                 L.marker([latEtoile, longEtoile], {icon: L.AwesomeMarkers.icon({text: i, markerColor: 'bleu', prefix: 'fa', iconColor: 'black'}) }).addTo(map);
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


      // // carte interactive 
      // initmap: function(data) {
      //   var map = new L.Map('cdf_map', { fullscreenControl: true });
      //   var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      //   var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Imagery © CloudMade';

      //   var osm = new L.TileLayer(osmUrl, { minZoom: 10, maxZoom: 19, attribution: osmAttrib });

      //   map.setView(new L.LatLng(43.1083, 0.7234), 16);
      //   map.addLayer(osm);
      //   map.scrollWheelZoom.disable();
      //   map.on('fullscreenchange', function() {
      //     if (map.isFullscreen()) {
      //       bouton.remove();
      //       return;
      //     } else {
      //       map.remove();
      //       app.init();
      //     }
      //   });
      // }

    };



    //Création des marqueurs
    //var Marker = function(text, borderColor, backgroundColor, textColor) {
   //   this.text = text;
   //   this.iconSize = [15, 15];
   //   this.borderColor = borderColor;
   //   this.backgroundColor = backgroundColor;
   //   this.textColor = textColor;
   //   this.isAlphaNumericIcon = true;
   //   this.innerIconStyle = 'margin:auto';
   // };




     //sentier
     // var latlngsOcre = this.ocre[0].sentier;
     // var polylineOcre = L.polyline(latlngsOcre, { color: '#FF5200' }).addTo(map);


    // //circuit vert clair
    // for (i = 0; i < data.vert.length; i++) {
    //             //marqueurs                 
    //             var markersVert = new Marker(data.vert[i].marqueur, '#18453B', "rgba(0, 171, 57, 0.5)", '#000');
    //             var latVert = data.vert[i].geoloc.lat;
    //             var longVert = data.vert[i].geoloc.lng;
    //             markersVert = L.marker([latVert, longVert], {
    //                 icon: L.BeautifyIcon.icon({
    //                     iconSize: markersVert.iconSize,
    //                     borderColor: markersVert.borderColor,
    //                     backgroundColor: markersVert.backgroundColor,
    //                     isAlphaNumericIcon: markersVert.isAlphaNumericIcon,
    //                     text: markersVert.text,
    //                     textColor: markersVert.textColor,
    //                     innerIconStyle: markersVert.innerIconStyle
    //                 })
    //             }).addTo(map);

    //         };

    // //sentier
    // var latlngsVert = data.vert[0].sentier;
    // var polylineVert = L.polyline(latlngsVert, { color: '#00AB39' }).addTo(map);


    app.init();
  })();






























//$('.dropdown-toggle').dropdown()


/*Exemple code Laurent géoloc
navigator.geolocation.watchPosition(
   ({ coords, timestamp }) =>
     callback({
       latitude: coords.latitude,
       longitude: coords.longitude,
       lastUpdate: timestamp,
       accuracy: Math.floor(coords.accuracy)
     }),
   err => {
     if (err.code !== 3) {
       alert('Unable to find position - ' + err.message);
     }
   },
   {
     enableHighAccuracy: true,
     timeout: 15000
   }
 );*/