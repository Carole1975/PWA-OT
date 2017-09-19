(function(){
    console.log("map");
    
    var app = {
        init: function() {
            this.url = "https://raw.githubusercontent.com/Carole1975/PWA-OT/master/public/data/galerie.json";
            this.getGalerie(app.url);
        },

        getGalerie: function(url) {
            $.ajax({
                url: url,

                success: this.initmap,
                error: function(err) {
                    if (err) {
                        console.log(err);
                    };
                }
            });
        },


      // carte interactive 
      initmap: function(data) {
        var map = new L.Map('cdf_map', { fullscreenControl: true });
        var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Imagery © CloudMade';

        var osm = new L.TileLayer(osmUrl, { minZoom: 10, maxZoom: 19, attribution: osmAttrib });

        map.setView(new L.LatLng(43.1083, 0.7234), 16);
        map.addLayer(osm);
        map.scrollWheelZoom.disable();
        map.on('fullscreenchange', function() {
          if (map.isFullscreen()) {
            bouton.remove();
            return;
        } else {
            map.remove();
            app.init();
        }
    });
    }

};

    //Création des marqueurs
     var Marker = function(text, borderColor, backgroundColor, textColor) {
         this.text = text;
         this.iconSize = [15, 15];
         this.borderColor = borderColor;
         this.backgroundColor = backgroundColor;
         this.textColor = textColor;
         this.isAlphaNumericIcon = true;
         this.innerIconStyle = 'margin:auto';
     };

    // //circuit ocre
     //for (i = 0; i < data.ocre.length; i++) {
                 //marqueurs
                 //var markersOcre = new Marker(data.ocre[i].marqueur, '#FF5200', "rgba(255, 82, 0, 0.5)", '#000');
                 //var latOcre = data.ocre[i].geoloc.lat;
                 //var longOcre = data.ocre[i].geoloc.lng;
                 //markersOcre = L.marker([latOcre, longOcre], {
                     //icon: L.BeautifyIcon.icon({
                         //iconSize: markersOcre.iconSize,
                         //borderColor: markersOcre.borderColor,
                         //backgroundColor: markersOcre.backgroundColor,
                         //isAlphaNumericIcon: markersOcre.isAlphaNumericIcon,
                         //text: markersOcre.text,
                         //textColor: markersOcre.textColor,
                         //innerIconStyle: markersOcre.innerIconStyle
                     //})
                 //}).addTo(map);

             //};


    // //sentier
    // var latlngsOcre = data.ocre[0].sentier;
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