mapboxgl.accessToken = 'pk.eyJ1Ijoic295YWlidXIiLCJhIjoiY2t2YWY2cWRlMGw2ZTJ1czFiOW5ieDl3eCJ9.EZQq9kWML6Y1om9lZPtmpw';

navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy: true});


function successLocation(position){
    setUpPosition([position.coords.longitude,position.coords.latitude]);
}


function setUpPosition(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://style/mapbox/streets-v11',
        center: center,
        zoom: 7
    });
    
}



function errorLocation(){
  setUpPosition([-2.24,53.48])
}