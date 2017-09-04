$(document).ready(function(){

   

        // carte interactive Carole, Julien
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
                }.addTo(map);
            });
         };
     });
            


           
            
                



            
        
       

        

            
    app.init();




//$('.dropdown-toggle').dropdown()