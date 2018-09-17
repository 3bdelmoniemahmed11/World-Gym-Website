var options={speed:3000};
//map
function initialize() {
    var mapCanvas = document.getElementById('map');
    var myLatLng = {lat: 51.434408, lng: -2.53531};
    var mapOptions = {
        center: new google.maps.LatLng(51.434408, -2.53531),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Here'
});
}


google.maps.event.addDomListener(window, 'load', initialize);
var beachMarker = new google.maps.Marker({
    position: beachMarker,
    map: map,
    icon: 'brown_markerA.png'
  });
  function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Here'
    });
  }