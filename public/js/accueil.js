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
                 var marqueur= data.ocre[i].marqueur;

                   //popups
                   var titreOcre = data.ocre[i].titre;
                   var texteOcre = data.ocre[i].texte;
                   var contentPopupOcre = '';
                   contentPopupOcre += "<h3>" + titreOcre + "</h3>" + "<br><div class='carousel'>";
                   for (j = 0; j < data.ocre[i].images.length; j++) {
                    var imgOcre = data.ocre[i].images[j].url;
                    contentPopupOcre += '<a href="' + imgOcre + '" data-lightbox="' + imgOcre + '"><img class="imgPopup" src="' + imgOcre + '" alt="' + titreOcre + '" data-image="' + imgOcre + '"></a>';
                  }
                  contentPopupOcre += "</div><p>" + texteOcre + "</p>";
                // L.marker([latOcre,longOcre]).bindPopup(contentPopupOcre);

                L.marker([latOcre,longOcre], {icon: L.AwesomeMarkers.icon({text: marqueur, markerColor: 'orange', prefix: 'fa', iconColor: 'black'}) })
                .bindPopup(contentPopupOcre)
                .addTo(map);
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
                 var marqueur= data.vert[i].marqueur;

                    //popups
                    var titreVert = data.vert[i].titre;
                    var texteVert = data.vert[i].texte;
                    var contentPopupVert = '';
                    contentPopupVert += "<h3>" + titreVert + "</h3>" + "<br><div class='carousel'>";
                    for (j = 0; j < data.vert[i].images.length; j++) {
                      var imgVert = data.vert[i].images[j].url;
                      contentPopupVert += '<a href="' + imgVert + '" data-lightbox="' + imgVert+ '"><img class="imgPopup" src="' + imgVert + '" alt="' + titreVert + '" data-image="' + imgVert + '"></a>';
                    }
                    contentPopupVert += "</div><p>" + texteVert + "</p>";

                    L.marker([latVert, longVert], {icon: L.AwesomeMarkers.icon({text: marqueur, markerColor: 'green', prefix: 'fa', iconColor: 'black'}) })
                    .bindPopup(contentPopupVert)
                    .addTo(map);
                  };


                  for (i = 0; i < data.annexes.length; i++) {
                 //marqueurs
                 var latAnnexe = data.annexes[i].geoloc.lat;
                 var longAnnexe = data.annexes[i].geoloc.lng;
                 var marqueurs= data.annexes[i].marqueur;

                 //popups
                 var titreAnnexe = data.annexes[i].titre;
                 var texteAnnexe = data.annexes[i].texte;
                 var contentPopupAnnexe = '';
                 contentPopupAnnexe += "<h3>" + titreAnnexe + "</h3>" + "<br><div class='carousel'>";
                 for (j = 0; j < data.annexes[i].images.length; j++) {
                  var imgAnnexe = data.annexes[i].images[j].url;
                  contentPopupAnnexe += '<a href="' + imgAnnexe + '" data-lightbox="' + imgAnnexe+ '"><img class="imgPopup" src="' + imgAnnexe + '" alt="' + titreAnnexe + '" data-image="' + imgAnnexe + '"></a>';
                }
                contentPopupAnnexe += "</div><p>" + texteAnnexe + "</p>";

                L.marker([latAnnexe, longAnnexe], {icon: L.AwesomeMarkers.icon({text: marqueurs, markerColor: 'purple', prefix: 'fa', iconColor: 'black'}) })
                .bindPopup(contentPopupAnnexe)
                .addTo(map);
              };

              for (i = 0; i < data.etoiles.length; i++) {
                 //marqueurs
                 var latEtoile = data.etoiles[i].geoloc.lat;
                 var longEtoile = data.etoiles[i].geoloc.lng;
                 var color= data.etoiles[i].couleur;

                  //popups
                  var titreEtoile = data.etoiles[i].titre;
                  var texteEtoile = data.etoiles[i].texte;
                  var contentPopupEtoile = '';
                  contentPopupEtoile += "<h3>" + titreEtoile + "</h3>" + "<br><div class='carousel'>";
                  for (j = 0; j < data.etoiles[i].images.length; j++) {
                    var imgEtoile = data.etoiles[i].images[j].url;
                    contentPopupEtoile += '<a href="' + imgEtoile + '" data-lightbox="' + imgEtoile+ '"><img class="imgPopup" src="' + imgEtoile + '" alt="' + titreEtoile + '" data-image="' + imgEtoile + '"></a>';
                  }
                  contentPopupEtoile += "</div><p>" + texteEtoile + "</p>";

                  L.marker([latEtoile, longEtoile], {icon: L.AwesomeMarkers.icon({icon: 'star', markerColor: 'yellow', prefix: 'fa', iconColor: 'black'}) })
                  .bindPopup(contentPopupEtoile)
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




























